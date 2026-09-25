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
                <h2>${item.name}</h2>
                <p class="repo-description"><span>Descrição</span>: ${item.description || 'Sem descrição'}</p>
                <p><span>Linguagem principal</span>: ${item.language || 'Indisponível'}</p>
                <p><span>Número de estrelas</span>: ${item.stargazers_count}</p>
                <p class="margin-top"><a href="${item.html_url}" target="_blank">Acessar</a><p>
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