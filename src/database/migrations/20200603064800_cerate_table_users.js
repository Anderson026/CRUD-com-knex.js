/* função para criar dados no banco*/
exports.up = (knex) => knex.schema.createTable('users', table =>{
      table.increments('id')
      table.text('username').unique().notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

/* função para reverter o up */
exports.down = knex => knex.schema.dropTable('users')

