# Podcast List App

Este projeto é uma aplicação React simples para gerenciar uma lista de podcasts que você deseja ouvir. A aplicação permite adicionar, editar e excluir podcasts da lista.

## Estrutura de Arquivos

A estrutura dos arquivos no diretório `src` é a seguinte:

src/
│
├── components/
│ ├── PodcastItem.jsx
│ └── PodcastList.jsx
│
├── App.css
├── App.js
├── index.css
└── index.js

- **components**: Contém os componentes React utilizados na aplicação.
- **App.css**: Contém os estilos globais da aplicação.
- **App.js**: Componente principal da aplicação.
- **index.css**: Estilos adicionais para a aplicação.
- **index.js**: Ponto de entrada da aplicação React.

## Instalação do React

Para criar e executar o projeto, é necessário ter o Node.js instalado. Utilizando os comandos abaixo para iniciar a aplicação:

1. **Instalar a aplicação**:
   ```
   npx create-react-app NOME-PROJETO
   ```
2. **Inicie o servidor de desenvolvimento**:
   ```
   npm start
   ```
Isso iniciará o servidor de desenvolvimento, e a aplicação estará disponível em `http://localhost:3000`.

## Tema

O tema da aplicação é uma lista de podcasts para ouvir. Os usuários podem adicionar novos podcasts, editar os existentes ou removê-los da lista.

## Componentes

### PodcastItem.jsx

Este componente representa um item individual na lista de podcasts. Ele possui duas versões de visualização: uma para exibição e outra para edição. As principais funcionalidades incluem:

- **Exibição de Podcast**: Mostra o nome do podcast com botões para editar ou excluir.
- **Edição de Podcast**: Permite ao usuário alterar o nome do podcast e salvar ou cancelar as mudanças.

### PodcastList.jsx

Este é o componente principal que gerencia a lista de podcasts. Ele utiliza hooks do React como `useState` e `useCallback` para gerenciar o estado e otimizar a performance da aplicação. As principais funcionalidades incluem:

- **Adicionar Podcast**: Permite ao usuário adicionar um novo podcast à lista.
- **Excluir Podcast**: Remove um podcast da lista.
- **Editar Podcast**: Inicia o modo de edição para um podcast selecionado e salva ou cancela as alterações.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS**: Estilização da aplicação.
