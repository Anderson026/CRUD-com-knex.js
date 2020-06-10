# Knex-Rocketseat

Projeto feito para aprender a fazer um CRUD com um query selector, no caso o Knex.js, com o objetivo de otimizar a manipução de banco de dados.

# Utilizando o knex
npm i knex pg express nodemon = instala as dependências do knex, postgres, express, nodemon nas depedências do desenvolvedor
npx knex init = cria o arquivo knexfile.js para criar as queres do banco
npx knex init = inicia o knex
npx knex migrate:make cerate_table_users = utiliza o migrations para criar uma tabela
npx knex migrate:latest = roda a última migração feita
npx knex seed:make seed_name = cria um usuário seed para testar se os dados estão sendo guardados no banco
migrate:latest seed:run = roda o migrations e o seed
npx knex seed:run --specific 002_projects.js = roda um seed específico filtrado pelo id
npx knex migrate:make add_column_delete_at_to_users = insere uma coluna para simular exlusão de dados de uma tabela (users)
npx knex migrate:rollback --all = faz um retorno para o início do banco antes das inserções ou alterações
npx knex seed:run --specific 001_users.js = roda um seed específico selecionado

# Utilizando o postgres pelo terminal

psql -U postgres = vai abrir o loguin e a senha (no meu caso o loguin é o nome postgres)
\c knex_test = conecta no banco desejado
\dt = descreve as tabelas
\d users = descreve o que contém na tabela de users
\q = comando para deslogar do banco de dados

# Link da aula
https://youtu.be/U7GjS3FuSkA?list=PL85ITvJ7FLogMzb2s6K5wKpQK2nL76vUK