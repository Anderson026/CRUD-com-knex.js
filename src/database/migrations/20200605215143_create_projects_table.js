/* importando a função de onUpdateTrigger */
const { onUpdateTrigger } = require('../../../knexfile')

/* função para criar dados no banco*/
exports.up = async knex => knex.schema.createTable('projects', table =>{
    table.increments('id')
    table.text('title')

    /* relacionamentos com a tabela de usuários */
    table.integer('user_id').references('users.id')
    .notNullable().onDelete("CASCADE")

    table.timestamps(true, true)
}).then(() => knex.raw(onUpdateTrigger('projects')))

/* função para reverter o up */
exports.down = async knex => knex.schema.dropTable('projects')

