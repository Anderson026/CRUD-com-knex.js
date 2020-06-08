/* importando o knex */
const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id, page = 1 } = req.query

            const query = knex('projects')
            /* limitando o número de páginas para mostrar os dados do banco */
            .limit(5)
            .offset((page - 1) * 5)

            /* mostrando o total de páginas */
            const countObj =  knex('projects').count()

            /* join das tabelas users e projects */
            if(user_id){
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')

                countObj
                .where({ user_id })
            }
            /* mostrando o total por objeto */
            const [count] = await countObj

            res.header('X-Total-Count', count["count"])

            const results = await query
        
            return res.json(results)

        } catch (error) {
            next(error)
        }
    },
    /* criando projects */
    async create(req, res, next){
        try {
            const { title, user_id } = req.body
            
            await knex('projects').insert({
                title,
                user_id
            })

            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    }
}

/* parei em 1:30:00 do sql no node.js com knex.js */