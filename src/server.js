/* criando o servidor */
const express = require('express')

const routes = require('./routes')
const app = express()

/* usando o json para testar dados no insomnia */
app.use(express.json())
app.use(routes)

/* tratamento para rotas não encontradas */
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

/* capturar todos os erros */
app.use ((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

/* configuração para a porta de comunicação */
app.listen(3333, () => console.log('Servidor está rodando'))

