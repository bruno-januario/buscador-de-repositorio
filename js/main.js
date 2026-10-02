import { search } from "./api.js"

const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');

export function showRepositories(data) {
    searchResult.innerHTML = '';
    let items = data.items;

    const htmlContent = items.map(item => `
        <div class="card-result flex">
            <div class="repo-container">
                <h2>${item.name}</h2>
                <p class="repo-description"><span>Descrição</span>: ${item.description || 'Indisponível'}</p>
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

export function showMessage(message) {
    searchResult.innerHTML = '';
    
    let htmlMessage = `
        <div class="message">
            ${message}
        </div>
    `
    searchResult.innerHTML = htmlMessage;
}

export function showLoading() {
    searchResult.innerHTML = '';

    let loadingState = `
        <div class="loading-spinner"></div>
    `
    searchResult.innerHTML = loadingState;
}

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

searchField.addEventListener('input', (event) => {
    let fieldValue = searchField.value.trim();

    if(!fieldValue) {
        searchResult.innerHTML = '';
        showMessage('Nenhum repositório para exibir.');
    }
})

searchBtn.addEventListener('click', () => {
    let fieldValue = searchField.value.trim();

    if(!fieldValue) {
        alert('Por favor, digite o nome de um repositório para buscar!');
    }
    else {
        search(fieldValue);
    }
})