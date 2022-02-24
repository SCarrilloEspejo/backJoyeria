// DB.js config for your database
const sql = require('mssql');
//const dbConfig = require('./../config/dbConfig');

const config = {
  server: '149.62.168.202',
  user: 'Orel',
  password: 'M@rtina14052018',
  database: 'Orelito',
  options: {
    encrypt: false,
    enableArithAbort: true
  }
};
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch((err) => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = { sql, poolPromise };
