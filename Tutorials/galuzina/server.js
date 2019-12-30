const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
 
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static(path.join(__dirname, 'views')));

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "test",
  password: "12345"
});
 
app.set("view engine", "hbs");


// получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM users", function(err, data) {
      if(err) return console.log(err);
      res.render("index.hbs", {
          users: data
      });
    });
});

app.get("/create", function(req, res){
    res.render("create.hbs");
});

app.post("/create", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const phone = req.body.phone;
    const times = req.body.times;
    pool.query("INSERT INTO users (name, phone, times) VALUES (?,?,?)", [name, phone, times], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/");
    });
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){
          
  const id = req.params.id;
  pool.query("DELETE FROM users WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 

app.listen(3000, function(){
  console.log("Сервер ожидает подключения...");
});
