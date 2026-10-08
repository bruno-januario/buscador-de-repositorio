# 🔎 Buscador de Repositórios

Uma aplicação web para pesquisar repositórios públicos no GitHub, com foco em praticar consumo de APIs, manipulação do DOM, estados de carregamento e paginação.

👉 Acesse o projeto online: [Buscador de Repositórios](https://bruno-januario.github.io/buscador-de-repositorio/)

## ✨ Sobre o projeto

Este projeto permite buscar repositórios por palavras-chaves, visualizar informações relevantes e navegar entre páginas de resultados sem sair da interface. A ideia é demonstrar, de forma simples e clara, como consumir a API pública do GitHub com JavaScript puro.

Ele foi desenvolvido como exemplo de estudo para:

- `fetch` e `async/await`;
- tratamento de erros de rede e timeout;
- carregamento visual com spinner;
- renderização dinâmica de conteúdos na página;
- paginação de resultados.

---

## 🚀 Funcionalidades

- Busca por nome de repositório;
- exibição de até 10 itens por página;
- ordenação por popularidade (`stars`);
- cards com nome, descrição, linguagem, estrelas e autor;
- avatar do dono do repositório;
- botão para abrir o projeto diretamente no GitHub;
- paginação com navegação anterior/próxima;
- mensagens para quando nada for encontrado ou quando houver erro;
- suporte a busca por tecla `Enter` ou botão de pesquisa.

---

## 🧠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- GitHub REST API

---

## 🏗️ Como funciona

A aplicação envia uma requisição para a API do GitHub usando a seguinte estrutura:

```js
https://api.github.com/search/repositories?q=${keyword}&sort=stars&page=${page}&per_page=10
```

O fluxo da busca é bem direto:

1. o usuário digita o termo e clica em buscar;
2. a interface mostra um estado de carregamento;
3. a chamada é feita com `fetch` e `async/await`;
4. a resposta é validada;
5. os resultados são renderizados em cards;
6. se houver problema, uma mensagem amigável aparece na tela.

---

## 📁 Estrutura do projeto

```text
buscador-de-repositorio/
├── css/
│   ├── animation.css
│   ├── global.css
│   ├── main.css
│   └── responsive.css
├── js/
│   ├── api.js
│   └── main.js
├── index.html
├── README.md
└── .gitignore
```

---

## ▶️ Como executar localmente

Como o projeto é estático, basta abrir o arquivo `index.html` em um navegador ou rodar um servidor local.

### Opção 1: servidor local

No terminal, na raiz do projeto:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

### Opção 2: abrir diretamente

Você também pode abrir o arquivo `index.html` diretamente no navegador, mas o uso de um servidor local é recomendado para uma experiência mais consistente.

---

## ⚠️ Observações

- A busca depende da internet, pois utiliza a API pública do GitHub.
- Existe um timeout para evitar requisições travadas.
- A aplicação foi pensada como um projeto de estudo prático para front-end com JavaScript.

---

## 👨‍💻 Autor

Desenvolvido por [Bruno Januário](https://github.com/bruno-januario).

---

## ✅ Melhorias futuras

- filtro por linguagem;
- debounce na busca;
- favoritos para repositórios;
- tema claro/escuro;
- suporte a busca por organização ou usuário;
- análise visual de resultados em interface mais moderna.

---

Se você está aprendendo JavaScript, este projeto é um ótimo exemplo de como consumir APIs externas, renderizar dados dinamicamente e criar uma interface interativa com comportamento real.

