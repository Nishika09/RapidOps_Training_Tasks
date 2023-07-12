const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/form-submit", (req, res) => {
  res.send(req.body);
});
app.listen(4200);
