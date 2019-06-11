const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'postgres',
      database : 'projection-api'
    }
});

module.exports = db;