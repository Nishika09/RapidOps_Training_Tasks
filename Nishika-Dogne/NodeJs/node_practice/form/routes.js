var express = require("express");
var app = express();

app.get("/thing/:id/:name", function (req, res) {
console.log(`server is running on http://localhost:4000`);
res.send("id: " + req.params.id + " and name: " + req.params.name);
});
app.listen(4000);
