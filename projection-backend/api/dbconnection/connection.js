const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port: 50961,
      user : '',
      password : '',
      database : 'projection-api'
    }
});

module.exports = db;