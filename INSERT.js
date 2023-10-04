var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

    var novoCliente = { name: "Nome do Cliente", address: "Endereço do Cliente" };
    con.query("INSERT INTO customers SET ?", novoCliente, function (err, result) {
      if (err) throw err;
      console.log("Novo cliente inserido");
    });
  });
});
