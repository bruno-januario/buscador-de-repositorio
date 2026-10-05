import { showRepositories, showMessage, showLoading } from "./main.js";

// Busca de repositórios na API do GitHub
export async function search(keyword) {

    // Exibe a animação de loading
    showLoading();

    const controller = new AbortController();
    const signal = controller.signal;

    const timeOutID = setTimeout(() => {
        controller.abort(); 
    }, 10000);

    try {
        // Faz a chamada à API e mantém a busca segura com timeout
        let response = await fetch(
            `https://api.github.com/search/repositories?q=${keyword}&sort=stars&per_page=10`, 
            { signal: signal }
        );

        if (!response.ok) {
            throw new Error('Erro ao se conectar com a API do GitHub.');
        }

        let data = await response.json();

        // Limpa o Timeout
        clearTimeout(timeOutID);

        // Mostra uma mensagem de "Nenhum repositório encontrado" caso a contagem de itens retornada seja zero
        if (data.total_count === 0 || data.items.length === 0) {
            showMessage('Nenhum repositório foi encontrado.');
            return;
        }

        // Renderiza os repositórios na área de resultados de busca
        showRepositories(data);
    }
    catch (error) {
        // Limpa o Timeout
        clearTimeout(timeOutID); 

        console.log(error.message);

        // Trata o erro de demora na requisição
        if (error.name === 'AbortError') {
            showMessage('A requisição demorou muito. Tente novamente.');
        } 
        // Trata erro físico de rede (sem internet)
        else if (!navigator.onLine) {
            showMessage('Erro de rede. Por favor, verifique sua conexão com a internet!');
        } 
        // Trata demais erros
        else {
            showMessage(error.message);
        }
    } 
}
