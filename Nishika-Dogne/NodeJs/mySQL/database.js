var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "mydb",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
var sql =
  "INSERT INTO customers (name, address) VALUES ('Cohhmpany Ioooinc', 'Highway 37')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});

con.query("SELECT * FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
