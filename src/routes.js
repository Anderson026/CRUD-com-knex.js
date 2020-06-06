const express = require('express')
const routes = express.Router()

/* instanciando o knex */
const UserController = require('./controllers/UserController')

/* rota para pegar os dados do knex */
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes

