const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Z@hr@81ZF",
    database: "paminardb",
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM products;";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
})

app.post("/api/insert", (req, res) => {

    const name = req.body.name
    const picture = req.body.picture
    const discription = req.body.discription
    const category = req.body.category
    const price = req.body.price
    const url = req.body.url
    const stock = req.body.stock

    const sqlInsert = "INSERT INTO  products (name, picture, discription, category, price, url, stock) VALUES (?, ?, ?, ?, ?, ?, ?);";
    db.query(sqlInsert, [name, picture, discription, category, price, url, stock] , (err, result) => {
        console.log(err)
    });
    
});

