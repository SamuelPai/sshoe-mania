const router = require("express").Router();
const mysql = require("../db/dbcon");

function getCustomers() {
  let sqlQuery = "SELECT customer_name FROM Customers";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return result;
    }
  })
}

function getPayments() {
  let sqlQuery = "SELECT credit_card_name FROM Payment_Methods";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return result;
    }
  })
}

function getProducts() {
  let sqlQuery = "SELECT product_name FROM Products";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return result;
    }
  })
}

function getOrdersTable(data) {
  let sqlQuery = "SELECT o.order_id, c.customer_name, p.product_name, o.order_date, pm.payment_type, o.price_total FROM Orders o JOIN Orders_Products op ON o.order_id = op.order_id JOIN Products p ON op.product_id = p.product_id INNER JOIN Customers c ON o.customer_id = c.customer_id INNER JOIN Payment_Methods pm ON o.payment_method_id = pm.payment_method_id;";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      //data.ordersTable = result
      console.log(result)
      console.log(" space    ")
      return result;
    }
  })
}


function formatDate(order) {
  console.log(JSON.parse(order[0]))
  // for (let i = 0; i < order.length; i++) {
  //     let currValue = order[i].order_date;

  //     //console.log("FORMATED DATE:", currValue.slice(0, 11));
  // }
}

router.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM Customers ORDER BY customer_id ASC";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
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
  let orders;
  let ordersTable;

  new Promise((resolve, reject) => {
    let sqlQuery = "SELECT customer_name, customer_id FROM Customers ORDER BY customer_id ASC";
    mysql.pool.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        resolve(result);
      }
    })
  }).then(val => {
    customers = val;
    new Promise((resolve, reject) => {
      let sqlQuery = "SELECT payment_method_id, credit_card_name FROM Payment_Methods ORDER BY payment_method_id ASC";
      mysql.pool.query(sqlQuery, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          resolve(result);
        }
      })
    }).then(val => {
      payments = val;
      new Promise((resolve, reject) => {
        let sqlQuery = "SELECT product_id, product_name FROM Products ORDER BY product_id ASC";
        mysql.pool.query(sqlQuery, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            resolve(result);
          }
        })
      }).then(val => {
        products = val;
        new Promise((resolve, reject) => {
          let sqlQuery = "SELECT order_id, order_date FROM Orders ORDER BY order_id ASC";
          mysql.pool.query(sqlQuery, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              resolve(result);
            }
          })
        }).then(val => {
          orders = val;
          new Promise((resolve, reject) => {
            let sqlQuery = "SELECT o.order_id, c.customer_name, p.product_name, o.order_date, pm.payment_type, o.price_total FROM Orders o JOIN Orders_Products op ON o.order_id = op.order_id JOIN Products p ON op.product_id = p.product_id INNER JOIN Customers c ON o.customer_id = c.customer_id INNER JOIN Payment_Methods pm ON o.payment_method_id = pm.payment_method_id ORDER BY o.order_id ASC";
            mysql.pool.query(sqlQuery, (err, result) => {
              if (err) {
                console.log(err);
              } else {
                resolve(result);
              }
            })
        }).then(val => {
          ordersTable = val;

          let data = {
            customers,
            products,
            payments,
            orders,
            ordersTable
          }
          //getOrdersTable(data)
          console.log(data)
          res.render("orders", data);
        })
      })
    })
  })


})})

// router.get("/paymentMethods", (req, res) => {
//     res.render("payment_methods");
// })

router.get("/paymentMethods", (req, res) => {
  let sqlQuery = "SELECT * FROM Payment_Methods ORDER BY payment_method_id ASC";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // handlebars accepts an object an then one property that should hold an array of values.
      let data = {
        paymentMethod: result
      }
      res.render("payment_methods", data);
    }

  })
})

router.get("/products", (req, res) => {
  let sqlQuery = "SELECT * FROM Products ORDER BY product_id ASC";
  mysql.pool.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // handlebars accepts an object an then one property that should hold an array of values.
      let data = {
        product: result
      }
      res.render("products", data);
    }

  })
})

module.exports = router;
