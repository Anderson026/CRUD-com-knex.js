const express = require('express')
const routes = express.Router()

/* instanciando o knex */
const UserController = require('./controllers/UserController')

/* rota para pegar os dados do knex */
routes.get('/users', UserController.index)

module.exports = routes

/* parei aos 43: 15 do video de sql no node.js com knex.js */