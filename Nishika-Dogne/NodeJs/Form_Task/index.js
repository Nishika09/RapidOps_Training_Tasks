const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const port = 8000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;

  fs.appendFile("file.txt", `${name}, ${dob}\n`, function (err) {
    if (err) throw err;
    console.log("Data Saved");
  });

  res.send(`Name : ${name},Dob : ${dob}`);
});

app.get('/download', async (req, res) => {
    const file = path.join(__dirname, "file.txt");

    const stream = fs.createReadStream(file);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="file.txt"');

    stream.pipe(res);
});


app.get("/displayData", (req, res) => {
  const data = fs.readFileSync("file.txt", 'utf-8');
  res.render("display_data", { data });
  console.log(data);
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
