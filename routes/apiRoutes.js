const router = require("express").Router();
const mysql = require("../db/dbcon");

function extractObjValues(obj) {
    // this function extracts the values of the input object
    let values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}

// Allows users to post a new customer to the database.
router.post("/customer", (req, res) => {

    let userInput = extractObjValues(req.body);
    let sqlQuery = "INSERT INTO Customers (customer_name, customer_email, customer_phone) VALUES (?, ?, ?)";
    mysql.pool.query(sqlQuery, userInput, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});

// Allows users to post a new order to the database.
router.post("/order", (req, res) => {

    let userInput = extractObjValues(req.body);
    console.log(userInput);
    let sqlQuery = "INSERT INTO Orders (order_date, price_total, customer_id, payment_method_id) VALUES (?, ?, ?, ?)";
    mysql.pool.query(sqlQuery, userInput, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});

// Allows users to post a new entry into orders_products table.
router.post("/orders_products", (req, res) => {

    let userInput = extractObjValues(req.body);
    console.log(userInput)
    let sqlQuery = "INSERT INTO Orders_Products (order_id, product_id) VALUES (?, ?)";
    mysql.pool.query(sqlQuery, userInput, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.sendStatus(200);
    });
});



router.post("/product", (req, res) => {

    let userInput = extractObjValues(req.body);
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
    let userInput = extractObjValues(req.body);
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
