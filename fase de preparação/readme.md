# Visualizador de Conteúdo Markdown

Este é um visualizador simples de conteúdo Markdown, feito com HTML, CSS e JavaScript.

## Funcionalidades

- Exibe uma lista de arquivos Markdown na barra lateral.
- Renderiza o conteúdo dos arquivos Markdown na área principal.
- Usa a biblioteca [marked](https://www.npmjs.com/package/marked) para a conversão de Markdown para HTML.
- Estilos básicos com CSS para uma leitura confortável.

## Como usar

1. Abra o `index.html` em seu navegador.
2. Selecione um arquivo Markdown na barra lateral para visualizar o conteúdo.

## Estrutura de Pastas

- `/`: Raiz do projeto.
- `index.html`: Arquivo HTML principal.
- `main.js`: Arquivo JavaScript principal.
- `style.css`: Arquivo CSS para estilos.
- `content/`: Pasta contendo os arquivos Markdown.
  - `checklist.md`: Arquivo Markdown de exemplo.
  - `thesis_content/`: Pasta contendo arquivos Markdown adicionais.

## Dependências

- [vite](https://vitejs.dev/): Bundler e servidor de desenvolvimento.
- [marked](https://www.npmjs.com/package/marked): Biblioteca Markdown parser.
