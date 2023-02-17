require('dotenv').config();


module.exports = {
  development: {
    username: 'postgres',
    password: 'supereasypassword1234',
    database: 'postgres',
    host: 'db.hgbwaamhvqpgwketixyq.supabase.co',
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: 'postgres',
    password: 'supereasypassword1234',
    database: 'postgres',
    host: 'db.hgbwaamhvqpgwketixyq.supabase.co',
    dialect: "postgres"
  },
  production: {
    username: 'postgres',
    password: 'supereasypassword1234',
    database: 'postgres',
    host: 'db.hgbwaamhvqpgwketixyq.supabase.co',
    dialect: "postgres"
  }
}
