const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'P@ssword!',
  database: 'nodemysql',
})

module.exports = pool