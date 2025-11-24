import os
import zipfile
import xml.etree.ElementTree as ET

def extract_comments_from_docx(docx_path):
    comments = {}
    try:
        with zipfile.ZipFile(docx_path, 'r') as docx_zip:
            # 1. Read comments.xml to get the comment details (author, date, text)
            if 'word/comments.xml' not in docx_zip.namelist():
                return []

            xml_comments = docx_zip.read('word/comments.xml')
            root_comments = ET.fromstring(xml_comments)
            
            namespaces = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }

            for comment in root_comments.findall('.//w:comment', namespaces):
                comment_id = comment.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}id')
                author = comment.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}author')
                date = comment.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}date')
                
                text_parts = []
                for p in comment.findall('.//w:p', namespaces):
                    p_text = ""
                    for r in p.findall('.//w:r', namespaces):
                        for t in r.findall('.//w:t', namespaces):
                            if t.text:
                                p_text += t.text
                    text_parts.append(p_text)
                
                full_text = "\n".join(text_parts)
                
                comments[comment_id] = {
                    'id': comment_id,
                    'author': author,
                    'date': date,
                    'text': full_text,
                    'context': '' # To be filled
                }

            # 2. Read document.xml to find the referenced text (context)
            if 'word/document.xml' in docx_zip.namelist():
                xml_document = docx_zip.read('word/document.xml')
                root_doc = ET.fromstring(xml_document)
                
                # We need to traverse the document in order.
                # We will maintain a set of active comment IDs (ranges that have started but not ended).
                active_comments = set()
                
                # Helper function to traverse and collect text
                def traverse(node):
                    tag = node.tag
                    # Check for comment range start
                    if tag == f"{{{namespaces['w']}}}commentRangeStart":
                        c_id = node.get(f"{{{namespaces['w']}}}id")
                        if c_id in comments:
                            active_comments.add(c_id)
                    
                    # Check for comment range end
                    elif tag == f"{{{namespaces['w']}}}commentRangeEnd":
                        c_id = node.get(f"{{{namespaces['w']}}}id")
                        if c_id in active_comments:
                            active_comments.remove(c_id)
                            
                    # Check for text nodes
                    elif tag == f"{{{namespaces['w']}}}t":
                        if node.text and active_comments:
                            for c_id in active_comments:
                                comments[c_id]['context'] += node.text

                    # Recurse
                    for child in node:
                        traverse(child)

                traverse(root_doc)

    except Exception as e:
        print(f"Error processing {docx_path}: {e}")
        return []

    # Convert dict to list and sort by ID (roughly chronological usually, but not guaranteed)
    # Better to just return the list values.
    return list(comments.values())

def main():
    base_dir = os.path.join(os.getcwd(), 'sugestoes_banca')
    if not os.path.exists(base_dir):
        print(f"Directory not found: {base_dir}")
        return

    for filename in os.listdir(base_dir):
        if filename.endswith(".docx") and not filename.startswith("~$"):
            docx_path = os.path.join(base_dir, filename)
            print(f"Processing: {filename}")
            
            comments_list = extract_comments_from_docx(docx_path)
            
            if comments_list:
                md_filename = f"sugestoes_{filename.replace('.docx', '.md')}"
                md_path = os.path.join(base_dir, md_filename)
                
                with open(md_path, "w", encoding="utf-8") as f:
                    f.write(f"# Sugestões extraídas de: {filename}\n\n")
                    # Sort by ID is a reasonable default if position isn't tracked perfectly
                    # But often ID is just creation order. 
                    # Ideally we would track position in document, but that's harder.
                    # Let's sort by ID for stability.
                    comments_list.sort(key=lambda x: int(x['id']) if x['id'].isdigit() else x['id'])

                    for i, comment in enumerate(comments_list, 1):
                        f.write(f"## Comentário {i}\n")
                        f.write(f"**Autor:** {comment['author']}\n")
                        if comment['date']:
                            f.write(f"**Data:** {comment['date']}\n")
                        
                        # Add Context
                        context = comment['context'].strip()
                        if context:
                            f.write(f"**Texto Original (Contexto):** \"{context}\"\n")
                        else:
                            f.write(f"**Texto Original (Contexto):** [Não foi possível extrair o contexto exato]\n")

                        f.write(f"\n**Comentário:**\n{comment['text']}\n\n")
                        f.write("---\n\n")
                
                print(f"  -> Extracted {len(comments_list)} comments to {md_filename}")
            else:
                print("  -> No comments found.")

if __name__ == "__main__":
    main()
