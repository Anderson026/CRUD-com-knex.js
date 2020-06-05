/* seed para inserir dados no banco e testar se estar funcionando */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'anderson'},
        {  username: 'diego'},
       
      ]);
    });
};
