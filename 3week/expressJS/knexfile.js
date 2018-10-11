// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'express_demo'
    },
    migrations: { 
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: { 
      directory: "./db/seeds"
    }
  }

};
