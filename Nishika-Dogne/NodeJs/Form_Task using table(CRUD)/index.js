var con = require("./connection");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const port = 5000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

// con.connect(function(err){
//   if(err){
//     console.log(err);
//   }
//   var sql1="CREATE TABLE mytb (name VARCHAR(255),dob DATE)"
//   con.query(sql1,function(err,result){
//     if(err){console.log(err);}
//     else{console.log('table created');}
//   })
// })

app.post("/form", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;

  // con.connect(function(err){
  // if(err) throw err;
  var sql = `INSERT INTO formtable (name,DOB) values ("${name}","${dob}")`;
  con.query(sql, function (err, result) {
    // res.send("form submitted successfully");
    // console.log(result);
    if (err) throw err;
    console.log(result);
  });
  con.query(`select * from formtable`, function (err, rows) {
    if (err) {
      res.render("display_data", { data: "" });
    } else {
      res.render("display_data", { data: rows });
    }
  });
});

app.get("/delete/:Id", (req, res) => {
  let Id = req.params.Id;
  console.log("id");
  con.query(`DELETE FROM formtable WHERE Id=${Id};`, function (err) {
    if (err) throw err;
    else {
      res.send("data deleted");
    }
  });
});

app.get("/update/:Id",(req,res)=>{
con.connect(function(err) {
  const formdata=req.body;
  const Id= req.params.Id;
  if (err) throw err;
  var sql = "UPDATE formtable SET name=?,DOB=? WHERE Id=?";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
});

app.listen(port, () => {
  console.log(`App listening at port http://localhost:${port}`);
});
