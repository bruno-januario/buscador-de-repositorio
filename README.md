# Buscador de Repositórios

Aplicação web simples e funcional para buscar repositórios públicos no GitHub, consumindo a API oficial do GitHub com JavaScript puro. O projeto foi desenvolvido para praticar conceitos de `fetch`, `async/await`, tratamento de erros, loading states e manipulação do DOM.

## Visão geral

Este projeto permite:

- buscar repositórios por palavra-chave;
- exibir até 10 resultados ordenados por popularidade (`stars`);
- mostrar informações como nome, descrição, linguagem principal, número de estrelas e autor;
- tratar estados de carregamento, ausência de resultados e falhas de rede ou timeout.

É uma solução leve, estática e fácil de entender, ideal para aprender integrações com APIs em front-end.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- GitHub REST API

## Funcionalidades

- Busca por nome de repositório com input de texto;
- ativação da busca por Enter ou botão de pesquisa;
- feedback visual de carregamento enquanto a requisição está em andamento;
- mensagem amigável quando nenhum resultado for encontrado;
- mensagem de erro para problemas de rede, timeout ou falha da API;
- abertura do repositório em uma nova aba.

## Como funciona

A aplicação envia uma requisição à API do GitHub com o seguinte padrão:

```js
https://api.github.com/search/repositories?q=${keyword}&sort=stars&per_page=10
```

Quando a busca é executada:

1. a interface exibe um spinner de carregamento;
2. a consulta é feita com `fetch` e `async/await`;
3. a resposta é validada;
4. os dados são renderizados na página;
5. em caso de problema, uma mensagem apropriada é exibida.

## Estrutura do projeto

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

## Como executar

Como o projeto é estático, basta abrir o arquivo `index.html` em um navegador ou rodar um servidor local para evitar problemas de carregamento de módulos.

### Opção 1: usando servidor local

No terminal, na raiz do projeto:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

### Opção 2: abrir diretamente

Você também pode abrir o `index.html` diretamente no navegador, mas o uso de um servidor local é recomendado para uma experiência mais consistente.

## Observações importantes

- A aplicação utiliza a API pública do GitHub, então depende de conexão com a internet.
- A busca pode demorar em caso de latência; há timeout configurado para evitar requisições travadas.
- O projeto foi pensado como estudo prático de consumo de APIs no front-end.

## Autor

Desenvolvido por Bruno Januário.

## Licença

Este projeto foi criado para fins de estudo e demonstração.

## Melhorias futuras

- paginação de resultados;
- pesquisa com debounce;
- filtro por linguagem;
- favoritos para repositórios;
- interface mais moderna com tema escuro/claro.

---

Se você está estudando JavaScript, este projeto é um ótimo exemplo de como consumir APIs externas, gerenciar estados da interface e criar experiências mais dinâmicas em páginas web.
