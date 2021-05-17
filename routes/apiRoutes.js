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
        res.send("Number of records created: " + result.affectedRows)
    })
})



module.exports = router;