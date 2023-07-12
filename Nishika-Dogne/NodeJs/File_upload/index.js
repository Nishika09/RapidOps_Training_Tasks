const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const port = 9000;
let lastFileName;

// const upload=multer({dest:'uploads/'});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    //   cb(null, file.fieldname + "-" + Date.now()+".jpg")
    lastFileName = file.originalname;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/view", async (req, res) => {
  const filename = lastFileName;
  const file = path.join(__dirname, "images", filename);

  const stream = fs.createReadStream(file);

  res.setHeader("Content-Type", "images/jpeg");
  res.setHeader("Content-Disposition", "inline");

  stream.pipe(res);
});

app.get("/download", async (req, res) => {
  const filename = lastFileName;
  const file = path.join(__dirname, "images", filename);

  const stream = fs.createReadStream(file);

  res.setHeader("Content-Type", "images/jpeg");
  res.setHeader("Content-Disposition", "attachment; filename=image.jpeg");

  stream.pipe(res);
});

app.get("/upload", (req, res) => {
  res.render("upload");
});
app.post("/upload", upload.single("image"), (req, res) => {
  res.render("action");
});
app.listen(port, () => {
  console.log(`App listening at port http://localhost:${port}`);
});
