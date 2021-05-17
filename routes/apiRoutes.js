const router = require("express").Router();
const mysql = require("../db/dbcon");

// Allows users to post a new customer to the database.
router.post("/customer", (req, res) => {

    let userInput = Object.values(req.body);
    let sqlQuery = "INSERT INTO Customers (customer_name, customer_email, customer_phone) VALUES (?, ?, ?)";
    mysql.pool.query(sqlQuery, userInput, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});

router.post("/product", (req, res) => {

    let userInput = Object.values(req.body);
    let sqlQuery = "INSERT INTO Products (product_name, product_price, product_information, stock_amount) VALUES (?, ?, ?, ?)";
    mysql.pool.query(sqlQuery, userInput, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});



module.exports = router;