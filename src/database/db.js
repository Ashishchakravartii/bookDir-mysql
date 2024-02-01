const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "bookdir",
});

connection.connect((err, result) => {
  if (err) {
    console.log("Error connecting database!!!");
  } else {
    const sql =
      "CREATE TABLE IF NOT EXISTS books (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), note VARCHAR(200))";

    connection.query(sql, (err, result) => {
      if (err) {
        console.log("Table not created");
      } else {
        console.log("Database Connected!!!");
      }
    });
  }
});

module.exports = connection;
