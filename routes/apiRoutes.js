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

router.get("/specific-customer/:name", (req, res) => {
    let target_user = req.params.name;
    let sqlQuery = "SELECT * FROM Customers WHERE customer_name = ?";
    mysql.pool.query(sqlQuery, [target_user], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result)
            let data = {
                customer: result
            }
            res.render("index", data)
        }
    })
});



module.exports = router;