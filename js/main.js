import { search } from "./search.js"

const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');

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