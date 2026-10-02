import { showRepositories, showMessage, showLoading } from "./main.js";

export async function search(keyword) {
    showLoading();

    const controller = new AbortController();
    const signal = controller.signal;

    const timeOutID = setTimeout(() => {
        controller.abort(); 
    }, 10000);

    try {
        let response = await fetch(
            `https://api.github.com/search/repositories?q=${keyword}&sort=stars&per_page=10`, 
            { signal: signal }
        );

        if (!response.ok) {
            throw new Error('Erro ao se conectar com a API do GitHub.');
        }

        let data = await response.json();

        clearTimeout(timeOutID);

        if (data.total_count === 0 || data.items.length === 0) {
            showMessage('Nenhum repositório foi encontrado.');
            return;
        }

        showRepositories(data);
    }
    catch (error) {
        clearTimeout(timeOutID); 

        console.log(error.message);

        if (error.name === 'AbortError') {
            showMessage('A requisição demorou muito. Tente novamente.');
        } 
        else if (!navigator.onLine) {
            showMessage('Erro de rede. Por favor, verifique sua conexão com a internet!');
        } 
        else {
            showMessage(error.message);
        }
    } 
}
