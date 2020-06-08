/* função para alterar dados no banco*/
exports.up = (knex) => knex.schema.alterTable('users', table =>{
    
    table.timestamp('deleted_at')
})

/* função para reverter o up */
exports.down = (knex) => knex.schema.alterTable('users', table =>{
    table.dropColumn('deleted_at')
})
