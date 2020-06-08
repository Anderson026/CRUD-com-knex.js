const express = require('express')
const routes = express.Router()

/* instanciando o knex */
const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')

/* rota para pegar os dados do knex */
routes
    /* rotas users */
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    /* rotas projects */
    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)

module.exports = routes

