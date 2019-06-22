const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : '',
      password : '',
      database : 'projection-api'
    }
});

module.exports = db;