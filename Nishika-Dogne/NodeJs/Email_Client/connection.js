
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'email_db'
})

module.exports=con

