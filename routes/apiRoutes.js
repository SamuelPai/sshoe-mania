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

router.post("/paymentMethod", (req, res) => {
  let userInput = Object.values(req.body);
  var sqlQuery = "INSERT INTO Payment_Methods (payment_type, credit_card_name, credit_card_number, credit_card_exp_date) VALUES (?, ?, ?, ?)";
  // var inserts = [req.body.payment_type, req.body.Credit_card_name, req.body.Credit_card_number, req.body.Credit_card_exp_date];
  mysql.pool.query(sqlQuery, userInput, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.sendStatus(200);
  });
});




module.exports = router;
