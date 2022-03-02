const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sadyyan',
  password: 'password',
  database: 'del',
})

module.exports = connection
