const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tha171999",
    database: "banco",
});

app.get("/", (req, res) => {
    db.query(
        "INSERT INTO usuarios (email, password) VALUES('thalles1999dreissig@gmail.com', '12345678')", (err, result) => {
            if(err){
                console.log(err)
            };
        }
    );
});
app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
