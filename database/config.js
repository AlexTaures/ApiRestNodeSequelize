const {Sequelize} = require('sequelize')
const colors = require('colors');

const dbConnection = async(error) => {    
  count = 1;
  maxTries = 10;
  const database = process.env.DB_DATABASE;
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const host = `${process.env.DB_HOST}:${process.env.DB_PORT}`;
  const dialect = process.env.DB_DIALECT;

  while(true) {
    try {
      const sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect: dialect
      })
      console.log('Online Database connected'.blue);
      return sequelize;
    
    } catch (error) {
      console.log(`Error establishing connection to online database, attemping again ${count}`.magenta)
        if (++count == maxTries){
          console.log('Failed to connect to database, please check .env parameters'.red)
          throw new Error('Failed to connect to database, please check .env parameters')
        };
    }
}
  


}


module.exports = {
  dbConnection
}