import { marked } from 'marked';

// Lista de arquivos Markdown conhecidos, na ordem especificada
// Caminhos atualizados para refletir a nova pasta 'content'
const markdownFiles = [
  { name: 'Checklist Revisão', path: '/content/checklist.md' },
  { name: '00 Resumo', path: '/content/thesis_content/01_resumo.md' },
  { name: '01 Introdução', path: '/content/thesis_content/02_introducao.md' },
  { name: '02 Referencial Teórico', path: '/content/thesis_content/03_referencial_teorico.md' },
  { name: '03 Procedimentos Metodológicos', path: '/content/thesis_content/04_procedimentos_metodologicos.md' },
  { name: '04 Desenvolvimento', path: '/content/thesis_content/05_desenvolvimento.md' },
  { name: '05 Cronograma', path: '/content/thesis_content/07_cronograma.md' },
  { name: '06 Sumário Provisório', path: '/content/thesis_content/08_sumario_provisorio.md' },
  { name: '07 Resultados Preliminares', path: '/content/thesis_content/06_resultados_preliminares.md' },
  { name: '08 Referências', path: '/content/thesis_content/09_referencias.md' }
];

const contentDiv = document.getElementById('markdown-content');
const fileListUl = document.getElementById('file-list');
const contentTitleH1 = document.getElementById('content-title');
let currentFilePath = null; // Guarda o caminho do arquivo atualmente exibido

// Função para carregar e renderizar Markdown de um arquivo específico
async function loadMarkdown(filePath, fileName) {
  contentDiv.innerHTML = 'Carregando...';
  contentTitleH1.textContent = fileName || 'Carregando...'; // Atualiza o título principal
  currentFilePath = filePath; // Atualiza o arquivo atual

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Erro ao buscar ${filePath}: ${response.statusText}`);
    }
    const markdownText = await response.text();
    const htmlContent = await marked(markdownText, { gfm: true, breaks: true });
    contentDiv.innerHTML = htmlContent;
    addCheckboxInteraction();
    updateActiveLink(); // Atualiza o link ativo na sidebar
  } catch (error) {
    console.error('Falha ao carregar ou processar o markdown:', error);
    contentDiv.innerHTML = `<p style="color: red;">Erro ao carregar o conteúdo: ${error.message}</p>`;
    contentTitleH1.textContent = 'Erro';
  }
}

// Adiciona interatividade aos checkboxes (desabilitados por padrão)
function addCheckboxInteraction() {
  const checkboxes = contentDiv.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.disabled = true;
  });
}

// Preenche a lista de arquivos na barra lateral
function populateFileList() {
  fileListUl.innerHTML = ''; // Limpa a lista existente
  markdownFiles.forEach(file => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = file.name;
    a.href = '#'; // Evita navegação padrão
    a.dataset.path = file.path; // Armazena o caminho no atributo data-*
    a.dataset.name = file.name; // Armazena o nome no atributo data-*

    a.addEventListener('click', (event) => {
      event.preventDefault(); // Previne a navegação padrão do link
      const path = event.target.dataset.path;
      const name = event.target.dataset.name;
      if (path !== currentFilePath) { // Só carrega se for diferente do atual
         loadMarkdown(path, name);
      }
    });

    li.appendChild(a);
    fileListUl.appendChild(li);
  });
}

// Atualiza qual link está marcado como ativo na sidebar
function updateActiveLink() {
    const links = fileListUl.querySelectorAll('a');
    links.forEach(link => {
        if (link.dataset.path === currentFilePath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Inicialização
function initialize() {
  populateFileList();
  // Carrega o checklist por padrão ao iniciar
  const checklistFile = markdownFiles.find(f => f.path === '/content/checklist.md'); // Caminho atualizado
  if (checklistFile) {
    loadMarkdown(checklistFile.path, checklistFile.name);
  } else if (markdownFiles.length > 0) {
    // Se o checklist não estiver na lista, carrega o primeiro arquivo da lista (Resumo)
    // Ajuste para carregar o primeiro item real da lista de conteúdo da tese (índice 1)
    loadMarkdown(markdownFiles[1].path, markdownFiles[1].name);
  } else {
    contentDiv.innerHTML = 'Nenhum arquivo Markdown encontrado para exibir.';
    contentTitleH1.textContent = 'Nenhum Arquivo';
  }
}

initialize(); // Chama a função de inicialização
