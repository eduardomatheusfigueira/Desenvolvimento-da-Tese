# Visualizador de Conteúdo Markdown para Tese

Este projeto é uma aplicação web simples projetada para visualizar e organizar o conteúdo de uma tese ou documento extenso escrito em Markdown. Ele permite navegar facilmente entre diferentes seções do documento armazenadas em arquivos `.md`.

## Visão Geral

A aplicação apresenta uma barra lateral com a lista de arquivos Markdown disponíveis na pasta `content/` e suas subpastas. Ao clicar em um arquivo, seu conteúdo é renderizado na área principal da página, facilitando a leitura e revisão do material.

## Funcionalidades Principais

- **Navegação por Arquivos:** Lista arquivos `.md` da pasta `content/` na barra lateral.
- **Renderização de Markdown:** Converte e exibe o conteúdo Markdown como HTML formatado na área de visualização principal.
- **Estrutura Organizada:** Mantém a estrutura de pastas do conteúdo, permitindo uma organização lógica dos capítulos ou seções da tese.
- **Estilização Simples:** Aplica CSS básico para garantir uma boa legibilidade do conteúdo renderizado.

## Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (inclui npm) instalado em sua máquina.

### Instalação

1.  Clone ou baixe este repositório (se aplicável, como não há git, apenas certifique-se de ter os arquivos).
2.  Navegue até o diretório do projeto no seu terminal.
3.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Execução

1.  Inicie o servidor de desenvolvimento Vite:
    ```bash
    npm run dev
    ```
2.  Abra o endereço local fornecido (geralmente `http://localhost:5173`) no seu navegador web.
3.  Clique nos nomes dos arquivos na barra lateral para visualizar seu conteúdo Markdown renderizado.

## Estrutura de Pastas do Projeto

```
/
├── node_modules/      # Dependências instaladas (gerenciado pelo npm)
├── content/           # Pasta contendo os arquivos Markdown da tese
│   ├── checklist.md
│   └── thesis_content/
│       ├── 01_resumo.md
│       ├── 02_introducao.md
│       ├── ... (outros arquivos da tese)
├── index.html         # Arquivo HTML principal da aplicação
├── main.js            # Lógica JavaScript principal (busca arquivos, renderiza Markdown)
├── package.json       # Metadados do projeto e dependências npm
├── package-lock.json  # Lockfile das dependências
├── README.md          # Este arquivo
└── style.css          # Folha de estilos CSS
```

## Tecnologias Utilizadas

- **HTML:** Estrutura da página web.
- **CSS:** Estilização da interface.
- **JavaScript:** Lógica da aplicação no lado do cliente.
- **[Vite](https://vitejs.dev/):** Ferramenta de build e servidor de desenvolvimento rápido.
- **[marked](https://marked.js.org/):** Biblioteca para converter Markdown em HTML.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* (se o projeto estiver em um repositório Git).

## Licença

Este projeto é de código aberto (detalhes da licença podem ser adicionados aqui, se necessário).
