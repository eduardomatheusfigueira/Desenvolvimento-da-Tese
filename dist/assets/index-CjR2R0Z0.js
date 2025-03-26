var $e=Object.defineProperty;var ie=a=>{throw TypeError(a)};var Te=(a,t,e)=>t in a?$e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var k=(a,t,e)=>Te(a,typeof t!="symbol"?t+"":t,e),_e=(a,t,e)=>t.has(a)||ie("Cannot "+e);var re=(a,t,e)=>t.has(a)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e);var v=(a,t,e)=>(_e(a,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function X(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let z=X();function pe(a){z=a}const ue=/[&<>"']/,ze=new RegExp(ue.source,"g"),fe=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Re=new RegExp(fe.source,"g"),Ie={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},oe=a=>Ie[a];function m(a,t){if(t){if(ue.test(a))return a.replace(ze,oe)}else if(fe.test(a))return a.replace(Re,oe);return a}const Se=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ae(a){return a.replace(Se,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Ee=/(^|[^\[])\^/g;function d(a,t){let e=typeof a=="string"?a:a.source;t=t||"";const n={replace:(i,r)=>{let s=typeof r=="string"?r:r.source;return s=s.replace(Ee,"$1"),e=e.replace(i,s),n},getRegex:()=>new RegExp(e,t)};return n}function le(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const S={exec:()=>null};function ae(a,t){const e=a.replace(/\|/g,(r,s,o)=>{let l=!1,p=s;for(;--p>=0&&o[p]==="\\";)l=!l;return l?"|":" |"}),n=e.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function q(a,t,e){const n=a.length;if(n===0)return"";let i=0;for(;i<n&&a.charAt(n-i-1)===t;)i++;return a.slice(0,n-i)}function Le(a,t){if(a.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===t[0])e++;else if(a[n]===t[1]&&(e--,e<0))return n;return-1}function ce(a,t,e,n){const i=t.href,r=t.title?m(t.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:e,href:i,title:r,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,o}return{type:"image",raw:e,href:i,title:r,text:m(s)}}function Ce(a,t){const e=a.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class B{constructor(t){k(this,"options");k(this,"rules");k(this,"lexer");this.options=t||z}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:q(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=Ce(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const i=q(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=q(n.replace(/^ *>[ \t]?/gm,""),`
`);const i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:r,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",p=!1;for(;t;){let c=!1;if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;o=e[0],t=t.substring(o.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,D=>" ".repeat(3*D.length)),h=t.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,l=u.trimStart()):(g=e[2].search(/[^ ]/),g=g>4?1:g,l=u.slice(g),g+=e[1].length);let y=!1;if(!u&&/^ *$/.test(h)&&(o+=h+`
`,t=t.substring(h.length+1),c=!0),!c){const D=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),te=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ne=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),se=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;t;){const Q=t.split(`
`,1)[0];if(h=Q,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),ne.test(h)||se.test(h)||D.test(h)||te.test(t))break;if(h.search(/[^ ]/)>=g||!h.trim())l+=`
`+h.slice(g);else{if(y||u.search(/[^ ]/)>=4||ne.test(u)||se.test(u)||te.test(u))break;l+=`
`+h}!y&&!h.trim()&&(y=!0),o+=Q+`
`,t=t.substring(Q.length+1),u=h.slice(g)}}r.loose||(p?r.loose=!0:/\n *\n *$/.test(o)&&(p=!0));let x=null,$;this.options.gfm&&(x=/^\[[ xX]\] /.exec(l),x&&($=x[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:o,task:!!x,checked:$,loose:!1,text:l,tokens:[]}),r.raw+=o}r.items[r.items.length-1].raw=o.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const u=r.items[c].tokens.filter(g=>g.type==="space"),h=u.length>0&&u.some(g=>/\n.*\n/.test(g.raw));r.loose=h}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){const e=this.rules.block.table.exec(t);if(!e||!/[:|]/.test(e[2]))return;const n=ae(e[1]),i=e[2].replace(/^\||\| *$/g,"").split("|"),r=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const o of i)/^ *-+: *$/.test(o)?s.align.push("right"):/^ *:-+: *$/.test(o)?s.align.push("center"):/^ *:-+ *$/.test(o)?s.align.push("left"):s.align.push(null);for(const o of n)s.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of r)s.rows.push(ae(o,s.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return s}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:m(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=q(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=Le(e[2],"()");if(s>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),ce(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const i=(n[2]||n[1]).replace(/\s+/g," "),r=e[i.toLowerCase()];if(!r){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return ce(n,r,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...i[0]].length-1;let o,l,p=s,c=0;const u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+s);(i=u.exec(e))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){p+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){c+=l;continue}if(p-=l,p>0)continue;l=Math.min(l,l+p+c);const h=[...i[0]][0].length,g=t.slice(0,s+i.index+h+l);if(Math.min(s,l)%2){const x=g.slice(1,-1);return{type:"em",raw:g,text:x,tokens:this.lexer.inlineTokens(x)}}const y=g.slice(2,-2);return{type:"strong",raw:g,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=m(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=m(e[1]),i="mailto:"+n):(n=m(e[1]),i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let i,r;if(e[2]==="@")i=m(e[0]),r="mailto:"+i;else{let s;do s=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(s!==e[0]);i=m(e[0]),e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=m(e[0]),{type:"text",raw:e[0],text:n}}}}const ve=/^(?: *(?:\n|$))+/,qe=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Pe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,L=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Be=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ge=/(?:[*+-]|\d{1,9}[.)])/,de=d(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ge).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),G=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ze=/^[^\n]+/,W=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Me=d(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",W).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Oe=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ge).getRegex(),O="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",K=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,De=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",K).replace("tag",O).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ke=d(G).replace("hr",L).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),Qe=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ke).getRegex(),J={blockquote:Qe,code:qe,def:Me,fences:Pe,heading:Be,hr:L,html:De,lheading:de,list:Oe,newline:ve,paragraph:ke,table:S,text:Ze},he=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",L).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),He={...J,table:he,paragraph:d(G).replace("hr",L).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",he).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex()},Ne={...J,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",K).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:S,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(G).replace("hr",L).replace("heading",` *#{1,6} *[^
]`).replace("lheading",de).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Fe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xe=/^( {2,}|\\)\n(?!\s*$)/,je=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,C="\\p{P}\\p{S}",Ue=d(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,C).getRegex(),Xe=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Ge=d(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,C).getRegex(),We=d("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,C).getRegex(),Ke=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,C).getRegex(),Je=d(/\\([punct])/,"gu").replace(/punct/g,C).getRegex(),Ve=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ye=d(K).replace("(?:-->|$)","-->").getRegex(),et=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ye).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Z=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,tt=d(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Z).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),be=d(/^!?\[(label)\]\[(ref)\]/).replace("label",Z).replace("ref",W).getRegex(),we=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",W).getRegex(),nt=d("reflink|nolink(?!\\()","g").replace("reflink",be).replace("nolink",we).getRegex(),V={_backpedal:S,anyPunctuation:Je,autolink:Ve,blockSkip:Xe,br:xe,code:Fe,del:S,emStrongLDelim:Ge,emStrongRDelimAst:We,emStrongRDelimUnd:Ke,escape:me,link:tt,nolink:we,punctuation:Ue,reflink:be,reflinkSearch:nt,tag:et,text:je,url:S},st={...V,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",Z).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Z).getRegex()},H={...V,escape:d(me).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},it={...H,br:d(xe).replace("{2,}","*").getRegex(),text:d(H.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},P={normal:J,gfm:He,pedantic:Ne},R={normal:V,gfm:H,breaks:it,pedantic:st};class b{constructor(t){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||z,this.options.tokenizer=this.options.tokenizer||new B,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:P.normal,inline:R.normal};this.options.pedantic?(e.block=P.pedantic,e.inline=R.pedantic):this.options.gfm&&(e.block=P.gfm,this.options.breaks?e.inline=R.breaks:e.inline=R.gfm),this.tokenizer.rules=e}static get rules(){return{block:P,inline:R}}static lex(t,e){return new b(e).lex(t)}static lexInline(t,e){return new b(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const n=this.inlineQueue[e];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(o,l,p)=>l+"    ".repeat(p.length));let n,i,r,s;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(r=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=t.slice(1);let p;this.options.extensions.startBlock.forEach(c=>{p=c.call({lexer:this},l),typeof p=="number"&&p>=0&&(o=Math.min(o,p))}),o<1/0&&o>=0&&(r=t.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){i=e[e.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),s=r.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);continue}if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,i,r,s=t,o,l,p;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(l||(p=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,s,p)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(r=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const u=t.slice(1);let h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(r=t.substring(0,c+1))}if(n=this.tokenizer.inlineText(r)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(p=n.raw.slice(-1)),l=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}}class M{constructor(t){k(this,"options");this.options=t||z}code(t,e,n){var r;const i=(r=(e||"").match(/^\S*/))==null?void 0:r[0];return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+m(i)+'">'+(n?t:m(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:m(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>
`}hr(){return`<hr>
`}list(t,e,n){const i=e?"ol":"ul",r=e&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+t+"</"+i+`>
`}listitem(t,e,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const i=le(t);if(i===null)return n;t=i;let r='<a href="'+t+'"';return e&&(r+=' title="'+e+'"'),r+=">"+n+"</a>",r}image(t,e,n){const i=le(t);if(i===null)return n;t=i;let r=`<img src="${t}" alt="${n}"`;return e&&(r+=` title="${e}"`),r+=">",r}text(t){return t}}class Y{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class w{constructor(t){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=t||z,this.options.renderer=this.options.renderer||new M,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Y}static parse(t,e){return new w(e).parse(t)}static parseInline(t,e){return new w(e).parseInline(t)}parse(t,e=!0){let n="";for(let i=0;i<t.length;i++){const r=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=r,o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=o||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=r;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,Ae(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=r;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=r;let o="",l="";for(let c=0;c<s.header.length;c++)l+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});o+=this.renderer.tablerow(l);let p="";for(let c=0;c<s.rows.length;c++){const u=s.rows[c];l="";for(let h=0;h<u.length;h++)l+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(l)}n+=this.renderer.table(o,p);continue}case"blockquote":{const s=r,o=this.parse(s.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const s=r,o=s.ordered,l=s.start,p=s.loose;let c="";for(let u=0;u<s.items.length;u++){const h=s.items[u],g=h.checked,y=h.task;let x="";if(h.task){const $=this.renderer.checkbox(!!g);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=$+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=$+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:$+" "}):x+=$+" "}x+=this.parse(h.tokens,p),c+=this.renderer.listitem(x,y,!!g)}n+=this.renderer.list(c,o,l);continue}case"html":{const s=r;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=r;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,o=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<t.length&&t[i+1].type==="text";)s=t[++i],o+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=e?this.renderer.paragraph(o):o;continue}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let i=0;i<t.length;i++){const r=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=s||"";continue}}switch(r.type){case"escape":{const s=r;n+=e.text(s.text);break}case"html":{const s=r;n+=e.html(s.text);break}case"link":{const s=r;n+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break}case"image":{const s=r;n+=e.image(s.href,s.title,s.text);break}case"strong":{const s=r;n+=e.strong(this.parseInline(s.tokens,e));break}case"em":{const s=r;n+=e.em(this.parseInline(s.tokens,e));break}case"codespan":{const s=r;n+=e.codespan(s.text);break}case"br":{n+=e.br();break}case"del":{const s=r;n+=e.del(this.parseInline(s.tokens,e));break}case"text":{const s=r;n+=e.text(s.text);break}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class A{constructor(t){k(this,"options");this.options=t||z}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}}k(A,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var _,N,ye;class rt{constructor(...t){re(this,_);k(this,"defaults",X());k(this,"options",this.setOptions);k(this,"parse",v(this,_,N).call(this,b.lex,w.parse));k(this,"parseInline",v(this,_,N).call(this,b.lexInline,w.parseInline));k(this,"Parser",w);k(this,"Renderer",M);k(this,"TextRenderer",Y);k(this,"Lexer",b);k(this,"Tokenizer",B);k(this,"Hooks",A);this.use(...t)}walkTokens(t,e){var i,r;let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const o=s;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,e));for(const l of o.rows)for(const p of l)n=n.concat(this.walkTokens(p.tokens,e));break}case"list":{const o=s;n=n.concat(this.walkTokens(o.items,e));break}default:{const o=s;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const p=o[l].flat(1/0);n=n.concat(this.walkTokens(p,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){const r=this.defaults.renderer||new M(this.defaults);for(const s in n.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const o=s,l=n.renderer[o],p=r[o];r[o]=(...c)=>{let u=l.apply(r,c);return u===!1&&(u=p.apply(r,c)),u||""}}i.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new B(this.defaults);for(const s in n.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const o=s,l=n.tokenizer[o],p=r[o];r[o]=(...c)=>{let u=l.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new A;for(const s in n.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const o=s,l=n.hooks[o],p=r[o];A.passThroughHooks.has(s)?r[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(r,c)).then(h=>p.call(r,h));const u=l.call(r,c);return p.call(r,u)}:r[o]=(...c)=>{let u=l.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return b.lex(t,e??this.defaults)}parser(t,e){return w.parse(t,e??this.defaults)}}_=new WeakSet,N=function(t,e){return(n,i)=>{const r={...i},s={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const o=v(this,_,ye).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(l=>t(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>e(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(n=s.hooks.preprocess(n));let l=t(n,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let p=e(l,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(l){return o(l)}}},ye=function(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const i="<p>An error occurred:</p><pre>"+m(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}};const T=new rt;function f(a,t){return T.parse(a,t)}f.options=f.setOptions=function(a){return T.setOptions(a),f.defaults=T.defaults,pe(f.defaults),f};f.getDefaults=X;f.defaults=z;f.use=function(...a){return T.use(...a),f.defaults=T.defaults,pe(f.defaults),f};f.walkTokens=function(a,t){return T.walkTokens(a,t)};f.parseInline=T.parseInline;f.Parser=w;f.parser=w.parse;f.Renderer=M;f.TextRenderer=Y;f.Lexer=b;f.lexer=b.lex;f.Tokenizer=B;f.Hooks=A;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;w.parse;b.lex;const I=[{name:"Checklist Revisão",path:"/content/checklist.md"},{name:"00 Resumo",path:"/content/thesis_content/01_resumo.md"},{name:"01 Introdução",path:"/content/thesis_content/02_introducao.md"},{name:"02 Referencial Teórico",path:"/content/thesis_content/03_referencial_teorico.md"},{name:"03 Procedimentos Metodológicos",path:"/content/thesis_content/04_procedimentos_metodologicos.md"},{name:"04 Desenvolvimento",path:"/content/thesis_content/05_desenvolvimento.md"},{name:"05 Cronograma",path:"/content/thesis_content/07_cronograma.md"},{name:"06 Sumário Provisório",path:"/content/thesis_content/08_sumario_provisorio.md"},{name:"07 Resultados Preliminares",path:"/content/thesis_content/06_resultados_preliminares.md"},{name:"08 Referências",path:"/content/thesis_content/09_referencias.md"}],E=document.getElementById("markdown-content"),F=document.getElementById("file-list"),j=document.getElementById("content-title");let ee=null;async function U(a,t){E.innerHTML="Carregando...",j.textContent=t||"Carregando...",ee=a;try{const e=await fetch(a);if(!e.ok)throw new Error(`Erro ao buscar ${a}: ${e.statusText}`);const n=await e.text(),i=await f(n,{gfm:!0,breaks:!0});E.innerHTML=i,ot(),at()}catch(e){console.error("Falha ao carregar ou processar o markdown:",e),E.innerHTML=`<p style="color: red;">Erro ao carregar o conteúdo: ${e.message}</p>`,j.textContent="Erro"}}function ot(){E.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.disabled=!0})}function lt(){F.innerHTML="",I.forEach(a=>{const t=document.createElement("li"),e=document.createElement("a");e.textContent=a.name,e.href="#",e.dataset.path=a.path,e.dataset.name=a.name,e.addEventListener("click",n=>{n.preventDefault();const i=n.target.dataset.path,r=n.target.dataset.name;i!==ee&&U(i,r)}),t.appendChild(e),F.appendChild(t)})}function at(){F.querySelectorAll("a").forEach(t=>{t.dataset.path===ee?t.classList.add("active"):t.classList.remove("active")})}function ct(){lt();const a=I.find(t=>t.path==="/content/checklist.md");a?U(a.path,a.name):I.length>0?U(I[1].path,I[1].name):(E.innerHTML="Nenhum arquivo Markdown encontrado para exibir.",j.textContent="Nenhum Arquivo")}ct();
