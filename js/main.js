import { search } from "./api.js"

const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');

// Renderização dos resultados da busca 
export function showRepositories(data) {
    searchResult.innerHTML = '';
    let items = data.items;

    const htmlContent = items.map(item => `
        <div class="card-result flex">
            <div class="repo-container">
                <h2>${item.name}</h2>
                <p class="repo-description"><span>Descrição</span>: ${limitText(item.description)}</p>
                <p><span>Linguagem principal</span>: ${item.language || 'Indisponível'}</p>
                <p><span>Número de estrelas</span>: ${item.stargazers_count}</p>
                <a href="${item.html_url}" target="_blank">Acessar Repositório</a>
            </div>
            <div class="author-container flex">
                <div class="name-pic-pair">
                    <img class="author-pic" src="${item.owner.avatar_url}" alt="${'Sem foto'}">
                    <p>${item.owner.login}</p>
                </div>       
            </div>
        </div>
        `).join('');

    searchResult.innerHTML = htmlContent;
}

// Limita o texto da descrição do repositório para, no máximo, 200 caracteres 
function limitText(text, limit = 200) {
    if(!text) return 'Indisponível';
    if(text.length <= limit) return text;
    return text.slice(0, limit) + '...';
}

// Mensagens de estado e feedback para o usuário
export function showMessage(message) {
    searchResult.innerHTML = '';
    
    let htmlMessage = `
        <div class="message">
            ${message}
        </div>
    `
    searchResult.innerHTML = htmlMessage;
}

// Renderiza a animação de loading com um "spinner" feito com CSS
export function showLoading() {
    searchResult.innerHTML = '';

    let loadingState = `
        <div class="loading-spinner"></div>
    `
    searchResult.innerHTML = loadingState;
}

// Interação do usuário com a busca através da tecla 'Enter'
searchField.addEventListener('keyup', (event) => {
    if(event.key.toLowerCase() == 'enter') {
        let fieldValue = searchField.value.trim();

        if(!fieldValue) {
            alert('Por favor, digite o nome de um repositório para buscar!');
        }
        else {
            search(fieldValue);
        }
    }
})

// Ouve eventos de 'input' no campo de pesquisa e renderiza uma mensagem de 'empty state' quando o mesmo estiver vazio
searchField.addEventListener('input', (event) => {
    let fieldValue = searchField.value.trim();

    if(!fieldValue) {
        searchResult.innerHTML = '';
        showMessage('Nenhum repositório para exibir.');
    }
})

// Interação do usuário com a busca através do 'click' no botão de pesquisa
searchBtn.addEventListener('click', () => {
    let fieldValue = searchField.value.trim();

    if(!fieldValue) {
        alert('Por favor, digite o nome de um repositório para buscar!');
    }
    else {
        search(fieldValue);
    }
})