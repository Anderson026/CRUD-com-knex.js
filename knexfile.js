// Update with your config settings.

module.exports = {
/* criando conexão com o banco postgres */
  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "1234"
    },
    /* criando a pasta migrations dentro da pasta database */
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    /* criando a pasta seeds dentro da pasta daatabase */
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
