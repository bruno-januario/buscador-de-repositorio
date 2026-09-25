import { search } from "./search.js"

const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');

export function showRepositories(data) {
    searchResult.innerHTML = '';
    let items = data.items;

    const htmlContent = items.map(item => `
        <div class="card-result flex">
            <div class="repo-container">
                <h2>Repositório: ${item.name}</h2>
                <p class="repo-description">Descrição: ${item.description || 'Sem descrição'}</p>
                <p>Linguagem principal: ${item.language || 'Indisponível'}</p>
                <p>Número de estrelas: ${item.stargazers_count}</p>
                <p>Para acessar, <a href="${item.html_url}" target="_blank">clique aqui!</a></p>
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

searchBtn.addEventListener('click', () => {
    let fieldValue = searchField.value.trim();

    if(!fieldValue) {
        alert('Por favor, digite o nome de um repositório para buscar!');
    }
    else {
        search(fieldValue);
    }
})