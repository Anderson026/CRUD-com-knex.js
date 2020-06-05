/* criando o servidor */
const express = require('express')

const routes = require('./routes')
const app = express()

app.use(routes)



/* configuração para a porta de comunicação */
app.listen(3333, () => console.log('Servidor está rodando'))

