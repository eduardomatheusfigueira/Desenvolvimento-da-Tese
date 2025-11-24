import pypdf
import os

def extract_text_from_pdf(pdf_path):
    if not os.path.exists(pdf_path):
        return f"File not found: {pdf_path}"
    
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            content = page.extract_text()
            if content:
                text += f"--- SLIDE {i+1} ---\n{content}\n"
        return text
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    pdf_path = r"D:\repos\Desenvolvimento-da-Tese\Slides da qualificação.pdf"
    print(extract_text_from_pdf(pdf_path))
