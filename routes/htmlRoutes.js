const router = require("express").Router();
const mysql = require("../db/dbcon");

function getCustomers() {
    let sqlQuery = "SELECT customer_name FROM Customers";
    mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            return result;
        }
    })
}

function getPayments() {
    let sqlQuery = "SELECT credit_card_name FROM Payment_Methods";
    mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            return result;
        }
    })
}

function getProducts() {
    let sqlQuery = "SELECT product_name FROM Products";
    mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            return result;
        }
    })
}

router.get("/", (req, res) => {
    let sqlQuery = "SELECT * FROM Customers";
    mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // handlebars accepts an object an then one property that should hold an array of values.
            let data = {
                customer: result,

            }
            res.render("index", data);
        }

    })

})

router.get("/orders", (req, res) => {
    let customers;
    let payments;
    let products;

    new Promise((resolve, reject) => {
        let sqlQuery = "SELECT customer_name FROM Customers";
        mysql.pool.query(sqlQuery, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                resolve(result);
            }
        })
    }).then(val => {
        customers = val;
        new Promise((resolve, reject) => {
            let sqlQuery = "SELECT credit_card_name FROM Payment_Methods";
            mysql.pool.query(sqlQuery, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    resolve(result);
                }
            })
        }).then(val => {
            payments = val;
            new Promise((resolve, reject) => {
                let sqlQuery = "SELECT product_name FROM Products";
                mysql.pool.query(sqlQuery, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        resolve(result);
                    }
                })
            }).then(val => {
                products = val;
                let data = {
                    customers,
                    products,
                    payments
                }
                res.render("orders", data);
            })
        })
    })


})

// router.get("/paymentMethods", (req, res) => {
//     res.render("payment_methods");
// })

router.get("/paymentMethods", (req, res) => {
    let sqlQuery = "SELECT * FROM Payment_Methods";
    mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // handlebars accepts an object an then one property that should hold an array of values.
            let data = {
                paymentMethod: result
            }
            res.render("payment_methods", data);
        }

    })
})

router.get("/products", (req, res) => {
    let sqlQuery = "SELECT * FROM Products";
    mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // handlebars accepts an object an then one property that should hold an array of values.
            let data = {
                product: result
            }
            res.render("products", data);
        }

    })
})

module.exports = router;
