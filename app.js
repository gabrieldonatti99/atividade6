var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
