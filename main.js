import { marked } from 'marked';

// Lista de arquivos Markdown conhecidos
const markdownFiles = [
  { name: 'Checklist Revisão', path: '/content/checklist.md' },
  { name: 'Feedback Fabricio', path: '/content/feedback-fabricio.md' },
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
const KANBAN_FILE_PATH = '/content/kanban.md';

// Elementos do DOM
const contentDiv = document.getElementById('markdown-content');
const fileListUl = document.getElementById('file-list');
const contentTitleH1 = document.getElementById('content-title');
const kanbanModal = document.getElementById('kanban-modal');
const kanbanContentDiv = document.getElementById('kanban-markdown-content');
const kanbanToggleButton = document.getElementById('kanban-toggle-button');
const closeModalButton = kanbanModal.querySelector('.close-button');

let currentFilePath = null; // Guarda o caminho do arquivo atualmente exibido
let isKanbanLoaded = false; // Flag para evitar recarregar o Kanban desnecessariamente

// Função para carregar e renderizar Markdown de um arquivo específico (conteúdo principal)
async function loadMarkdown(filePath, fileName) {
  contentDiv.innerHTML = 'Carregando...';
  contentTitleH1.textContent = fileName || 'Carregando...';
  currentFilePath = filePath;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Erro ao buscar ${filePath}: ${response.statusText}`);
    }
    const markdownText = await response.text();
    const htmlContent = await marked(markdownText, { gfm: true, breaks: true });
    contentDiv.innerHTML = htmlContent;
    addCheckboxInteraction(contentDiv, true); // Desabilita checkboxes no conteúdo principal
    updateActiveLink();
  } catch (error) {
    console.error('Falha ao carregar ou processar o markdown principal:', error);
    contentDiv.innerHTML = `<p style="color: red;">Erro ao carregar o conteúdo: ${error.message}</p>`;
    contentTitleH1.textContent = 'Erro';
  }
}

// Função para carregar e renderizar o Kanban no modal
async function loadKanban() {
  if (isKanbanLoaded) return; // Não recarrega se já estiver carregado

  kanbanContentDiv.innerHTML = 'Carregando Kanban...';
  try {
    const response = await fetch(KANBAN_FILE_PATH);
    if (!response.ok) {
      throw new Error(`Erro ao buscar ${KANBAN_FILE_PATH}: ${response.statusText}`);
    }
    const markdownText = await response.text();
    // Renderiza o Markdown, transformando checkboxes em elementos interativos
    const htmlContent = await marked(markdownText, { gfm: true, breaks: true });
    kanbanContentDiv.innerHTML = htmlContent;
    addCheckboxInteraction(kanbanContentDiv, false); // Habilita checkboxes no Kanban
    wrapTaskTextInSpan(kanbanContentDiv); // Adiciona span para estilo de riscado
    isKanbanLoaded = true; // Marca como carregado
  } catch (error) {
    console.error('Falha ao carregar ou processar o markdown do Kanban:', error);
    kanbanContentDiv.innerHTML = `<p style="color: red;">Erro ao carregar o Kanban: ${error.message}</p>`;
  }
}

// Adiciona interatividade aos checkboxes
// `disableCheckboxes` = true para desabilitar (conteúdo principal), false para habilitar (Kanban)
function addCheckboxInteraction(container, disableCheckboxes) {
  const listItems = container.querySelectorAll('li');
  listItems.forEach(li => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.disabled = disableCheckboxes; // Habilita ou desabilita

      // Se habilitado (Kanban), adiciona listener para estilo
      if (!disableCheckboxes) {
         // Garante que o texto após o checkbox esteja em um span para aplicar estilo
         wrapTaskTextInSpan(li);
         const textSpan = li.querySelector('span.task-text');

         // Aplica estilo inicial baseado no estado do checkbox
         if (textSpan) {
            if (checkbox.checked) {
                textSpan.style.textDecoration = 'line-through';
                textSpan.style.color = '#888';
            } else {
                textSpan.style.textDecoration = 'none';
                textSpan.style.color = 'inherit';
            }
         }


        checkbox.addEventListener('change', (event) => {
          const isChecked = event.target.checked;
          const textSpan = event.target.closest('li')?.querySelector('span.task-text');
          if (textSpan) {
            textSpan.style.textDecoration = isChecked ? 'line-through' : 'none';
            textSpan.style.color = isChecked ? '#888' : 'inherit';
          }
          // Aqui você poderia adicionar lógica para salvar o estado do Kanban,
          // mas como não temos backend, a mudança é apenas visual e temporária.
        });
      }
    }
  });
}

// Envolve o texto da tarefa (após o checkbox) em um <span> para aplicar estilos
function wrapTaskTextInSpan(container) {
    const listItems = container.querySelectorAll('li');
    listItems.forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox && !li.querySelector('span.task-text')) { // Só adiciona se não existir
            let textContent = '';
            let currentNode = checkbox.nextSibling;
            while (currentNode) {
                // Coleta nós de texto e outros elementos inline, se houver
                if (currentNode.nodeType === Node.TEXT_NODE) {
                    textContent += currentNode.textContent;
                } else if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.tagName.toLowerCase() !== 'br') {
                     // Inclui o HTML de outros elementos inline (ex: `<code>`, `<strong>`)
                    textContent += currentNode.outerHTML;
                }
                const next = currentNode.nextSibling;
                // Remove o nó original após envolvê-lo
                if (currentNode.nodeType === Node.TEXT_NODE || currentNode.nodeType === Node.ELEMENT_NODE) {
                   li.removeChild(currentNode);
                }
                currentNode = next;
            }

            // Cria o span e insere após o checkbox
            const span = document.createElement('span');
            span.className = 'task-text';
            span.innerHTML = textContent.trim(); // Usa innerHTML para preservar tags inline
            li.insertBefore(span, checkbox.nextSibling); // Insere logo após o checkbox
        }
    });
}


// Preenche a lista de arquivos na barra lateral
function populateFileList() {
  fileListUl.innerHTML = ''; // Limpa a lista existente
  markdownFiles.forEach(file => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = file.name;
    a.href = '#';
    a.dataset.path = file.path;
    a.dataset.name = file.name;

    a.addEventListener('click', (event) => {
      event.preventDefault();
      const path = event.target.dataset.path;
      const name = event.target.dataset.name;
      if (path !== currentFilePath) {
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

// --- Funções do Modal Kanban ---

// Abre o modal do Kanban
function openKanbanModal() {
  loadKanban(); // Carrega (ou recarrega se necessário) o conteúdo
  kanbanModal.style.display = 'block'; // Exibe o modal
}

// Fecha o modal do Kanban
function closeKanbanModal() {
  kanbanModal.style.display = 'none'; // Oculta o modal
}

// --- Event Listeners ---

// Botão para abrir o modal
kanbanToggleButton.addEventListener('click', openKanbanModal);

// Botão 'X' para fechar o modal
closeModalButton.addEventListener('click', closeKanbanModal);

// Fechar o modal clicando fora da área de conteúdo
window.addEventListener('click', (event) => {
  if (event.target === kanbanModal) {
    closeKanbanModal();
  }
});

// Fechar o modal com a tecla Escape
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && kanbanModal.style.display === 'block') {
        closeKanbanModal();
    }
});


// --- Inicialização ---
function initialize() {
  populateFileList();
  // Carrega o checklist por padrão ao iniciar
  const checklistFile = markdownFiles.find(f => f.path === '/content/checklist.md');
  if (checklistFile) {
    loadMarkdown(checklistFile.path, checklistFile.name);
  } else if (markdownFiles.length > 0) {
    loadMarkdown(markdownFiles[0].path, markdownFiles[0].name);
  } else {
    contentDiv.innerHTML = 'Nenhum arquivo Markdown encontrado para exibir.';
    contentTitleH1.textContent = 'Nenhum Arquivo';
  }
}

initialize(); // Chama a função de inicialização
