import { showRepositories, showMessage, showLoading } from "./main.js";

export async function search(keyword) {

    showLoading();

    try {
        let response = await fetch(`https://api.github.com/search/repositories?q=${keyword}&sort=stars&per_page=10`);

        if (!response.ok) {
            throw new Error('Erro ao se conectar com a API do GitHub.');
        }

        let data = await response.json();

        if (data.total_count === 0 || data.items.length === 0) {
            showMessage('Nenhum repositório foi encontrado.');
            return;
        }

        showRepositories(data);
    }
    catch (error) {
        console.log(error.message);
        showMessage('Erro de rede. Por favor, verifique sua conexão com a internet!')
    } 
}