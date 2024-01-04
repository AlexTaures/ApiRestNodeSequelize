const Sequelize = require('sequelize');

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const dialect = process.env.DB_DIALECT
const database = process.env.DB_DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD


// const db = new Sequelize(database,username, password, {
//   dialect: dialect,
//   host: host,
//   port: port
// });

const db = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${database}`)


module.exports = db;