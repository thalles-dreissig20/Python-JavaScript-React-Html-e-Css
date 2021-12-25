const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tha171999",
    database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/Register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email],
    (err, result) =>{
        if(err){
            res.send(err);
        }
        if(result.length == 0) {
            db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)",
            [email, password], 
            (err, result) => {
                if(err){
                    res.send(err);
                }
                res.send({ msg: "cadastrado com sucesso!" });
            }

            );
        } else {
            res.send({ msg: "Usuario já cadastrado!" });
        }
    });
});

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
