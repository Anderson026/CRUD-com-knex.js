/* importando o knex */
const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('users')
        /* método para mostrar o teste de simulação de deleção do migrations */
        .where('deleted_at', null)

        return res.json(results)
    },
    /* criando uma rota para o knex inserir dados no banco*/
    async create(req, res, next) {
           
        try {
            const { username } = req.body
            
            await knex('users').insert({
                username
            })

            return res.status(201).send()

        } catch (error) {
            next(error)
        }

       
    },
    /* criando uma rota para o knex alterar dados no banco */
    async update(req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params

            await knex('users').update({ username }).where(id)

            return res.send()

            
        } catch (error) {
            next(error)
        }
    },
    /* criando uma rota para o knex deletar dados no banco */
    async delete(req, res, next){
        try {
            const { id } = req.params

            await knex('users').where({id})
            .update('deleted_at', new Date())
            //.del()

            return res.send()

        } catch (error) {
            next(error)
        }
    }
}

