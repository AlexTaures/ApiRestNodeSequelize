const Sequelize = require('sequelize');
const db = require('../database/dbConnection')

const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
});

User.sync({ force: false })
  .then(() => console.log('User table created successfully!'))
  .catch(error => console.error('Error creating User table:', error));

module.exports = User;
