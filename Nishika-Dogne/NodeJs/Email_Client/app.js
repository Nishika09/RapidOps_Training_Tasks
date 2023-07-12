const con = require("./connection");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { log } = require("console");

const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server: ", err);
  } else {
    console.log("Connected to MySQL server!");
  }
});

app.get("/createUser/:id", (req, res) => {
  const id = req.params.id;

  createfolder(id);
  res.redirect(`/folders/'${id}'`);
});

function createfolder(email) {
  return new Promise((resolve, reject) => {
    let id;
    con.query(
      `SELECT id FROM users WHERE Email='${email}'`,
      (err, [output]) => {
        if (err) {
          reject(err);
        } else {
          id = output.id;
          console.log(id);
          const sql = `INSERT INTO Email_Folder (Name, UserId) VALUES ('inbox',${id}),('sent',${id}),('archived',${id}),('outbox',${id}),('trash',${id})`;

          con.query(sql, (err, result) => {
            if (err) {
              reject(err);
            } else {
              console.log(
                `Inserted ${result.affectedRows} row(s) into Email_Folder`
              );
              resolve(result);
            }
          });
        }
      }
    );
  });
}

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/createFolder/:id", (req, res) => {
  let Name = req.body.Name;
  console.log(Name);

  //   let UserId=req.body.UserId;
  // Check if folder name is empty
  if (!Name) {
    return res.status(400).json({ error: "Folder name is required" });
  }

  //   Check if folder name already exists for user
  con.query(
    `SELECT * FROM Email_Folder WHERE Name='${Name}' AND UserId=${id}`,
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        return res.status(400).json({ error: "Folder name already exists" });
      }

      // Insert folder into database if validations pass
      const sql = `INSERT into Email_Folder (Name,UserId) values (?,?)`;
      con.query(sql, [Name, UserId], (err, result) => {
        if (err) throw err;
        else {
          //   console.log(`Inserted ${result.affectedRows} row(s) into Email_Folder`);
          res.redirect(`/folders/'${id}'`);
        }
      });
    }
  );
});

app.get("/folders/:id", (req, res) => {
  con.query(
    `select * from Email_Folder where UserId=${req.params.id}`,
    function (err, rows) {
      if (err) {
        res.flash(err);
      } else {
        res.render("display_data", { data: rows, id: req.params.id });
      }
    }
  );
});

app.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // Check if folder ID exists
  con.query(`SELECT * FROM Email_Folder WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(404).json({ error: "Folder ID not found" });
    }
    // Delete folder from database if validations pass
    con.query(`DELETE FROM Email_Folder WHERE id=${id};`, function (err) {
      if (err) throw err;
      else {
        res.redirect(`/folders/'${id}'`);
      }
    });
  });
});

app.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  // Check if folder ID exists
  con.query(`SELECT * FROM Email_Folder WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(404).json({ error: "Folder ID not found" });
    }

    // Render update page if validations pass
    con.query(
      `select * from Email_Folder where id=${id};`,
      function (err, rows) {
        if (err) throw err;
        else {
          res.render("update", { Email_Folder: rows, id: req.params.id });
        }
      }
    );
  });
});
// });
app.post("/update/:id", (req, res) => {
  console.log(req.body.Name);
  let Name = req.body.Name;
  let id = req.params.id;
  // Check if folder name is empty
  if (!Name) {
    return res.status(400).json({ error: "Folder name is required" });
  }
  con.query(
    `update Email_Folder set Name='${Name}' where id=${id}`,
    function (err) {
      if (err) throw err;
    }
  );
  res.redirect(`/folders/'${id}'`);
});

//USERS table API

app.post("/users", async (req, res) => {
  const name = req.body.Name;
  const email = req.body.Email;
  const password = req.body.Password;

  try {
    // Check if email already exists in the database
    const result1 = await new Promise((resolve, reject) => {
      con.query(
        `SELECT * FROM users WHERE Email = ?`,
        [email],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    if (result1.length > 0) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Email does not exist, so create a new user
    const sql = `INSERT INTO users (Name, Email, Password) VALUES (?,?,?)`;

    const result = await new Promise((resolve, reject) => {
      con.query(sql, [name, email, password], (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log(email);
          createfolder(email);
          // resolve(result);
        }
      });
    });

    console.log(`Created new user with ID ${result.insertId}`);
    res.send(`Created new user with ID ${result.insertId}`);

    const userId = result.insertId;

    await createFolder(userId);
  } catch (err) {
    console.error("Error creating new user: ", err);
    res.status(500).send("Error creating new user");
  }
});

// Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM users WHERE id=${id}`;

  con.query(sql, (err, result) => {
    if (err) {
      console.error(`Error deleting user with ID ${id}: `, err);
      res.status(400).send(`Error deleting user with ID ${id}`);
    } else {
      console.log(`Deleted user with ID ${id}`);
      res.send(`Deleted user with ID ${id}`);
    }
  });
});

// Update a user by ID
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.Name;
  const email = req.body.Email;
  const password = req.body.Password;

  const sql = `UPDATE users SET Name='${name}', Email='${email}', Password='${password}' WHERE id=${id}`;

  con.query(sql, (err, result) => {
    if (err) {
      console.error(`Error updating user with ID ${id}: `, err);
      res.status(500).send(`Error updating user with ID ${id}`);
    } else {
      console.log(`Updated user with ID ${id}`);
      res.send(`Updated user with ID ${id}`);
    }
  });
});

// Get all users
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  con.query(sql, (err, result) => {
    if (err) {
      console.error("Error retrieving users: ", err);
      res.status(500).send("Error retrieving users");
    } else {
      console.log(`Retrieved ${result.length} user(s)`);
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at port http://localhost:${port}`);
});
