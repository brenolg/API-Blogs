# Blog API

O projeto API de Blogs consiste no desenvolvimento de uma API para um blog, com funcionalidades de criação, atualização, exclusão e visualização de postagens, além de uma camada de autenticação de usuários.O objetivo é fornecer uma solução completa para a produção de conteúdo em um blog, aplicando os conhecimentos adquiridos durante o curso e garantindo a aderência à especificação, organização do código e qualidade.

## Funcionalidades

- Criação, atualização, exclusão e visualização de postagens
- Autenticação de usuários para garantir a segurança dos dados
- Armazenamento de informações em um banco de dados

## Tecnologias utilizadas
- APIs REST
- MSC Architeture
- ORM - Interface da aplicação com o banco de dados
- Sequelize
- Express
- C.R.U.D
- JWT
- Middlewares
- Node.js

## Banco de dados
<details close>
    <summary><strong> Diagrama de Entidade-Relacionamento</strong></summary>
<img src='./api.png'>>
</details>

## Requisitos

1. Crie migrations para as tabelas users, categories, blog_posts, posts_categories
2. Crie o modelo User em src/models/User.js com as propriedades corretas
3. Sua aplicação deve ter o endpoint POST /login
4. Sua aplicação deve ter o endpoint POST /user
5. Sua aplicação deve ter o endpoint GET /user
6. Sua aplicação deve ter o endpoint GET /user/:id
7. Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas
8. Sua aplicação deve ter o endpoint POST /categories
9. Sua aplicação deve ter o endpoint GET `/categories`
10. Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas
11. Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas
12. Sua aplicação deve ter o endpoint POST `/post`
</details>

## Instalação do projeto localmente

Para instalar e executar o projeto localmente, você precisa ter o Docker instalado na sua máquina. Depois, siga os seguintes passos:

Clone o repositório do GitHub:
```bash
git clone git@github.com:brenolg/Store-Maneger-API-REST.git
```
Rode os serviços node e db:
```bash
docker-compose up -d --build
```
Rode o container one_for_all via CLI ou abri-lo no VS Code
```bash
docker exec -it blogs_api bash
```
  Instale as dependências usando
```bash
npm install
```
Cria o banco e gere e popule as tabelas
```bash
"prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
"seed": "npx sequelize-cli db:seed:all"
```
- Execute a aplicação com npm run debug
- Execute as rotas como preferir

## Agradecimentos
Este projeto foi desenvolvido como parte do curso de Desenvolvimento de Software da Trybe. Agradeço à Trybe pela oportunidade de aprender e praticar SQL e outras tecnologias.
