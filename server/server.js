import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  user: "ikram",
  password: "password",
  host: "localhost",
  database: "crud-mysql-react",
});

app.use(cors());
app.use(express.json());

app.post("/create", (req, resp) => {
  const { name, age, country, position, wage } = req.body;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(result);
      }
    }
  );
});

app.get("/employees", (req, resp) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.put("/update", (req, resp) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    `UPDATE employees SET wage = ? WHERE id = ?`,
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, resp) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.listen(3001, console.log("listening on port 3001"));
