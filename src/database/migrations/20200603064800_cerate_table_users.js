/* importando a função de onUpdateTrigger */
const { onUpdateTrigger } = require('../../../knexfile')

/* função para criar dados no banco*/
exports.up = async knex => knex.schema.createTable('users', table =>{
      table.increments('id')
      table.text('username').unique().notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  }).then(() => knex.raw(onUpdateTrigger('users')))

/* função para reverter o up */
exports.down = async knex => knex.schema.dropTable('users')

