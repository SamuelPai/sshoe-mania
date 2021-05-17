const router = require("express").Router();
const mysql = require("../db/dbcon");


router.get("/", (req, res) => {
    let sqlQuery = "SELECT * FROM Customers";
    mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
            console.log(err);
        }
    else {
        // handlebars accepts an object an then one property that should hold an array of values.
        let data = {
            customer: result
        }
        res.render("index", data);
    }
        
    })
    
})

router.get("/orders", (req, res) => {
    res.render("orders");
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
