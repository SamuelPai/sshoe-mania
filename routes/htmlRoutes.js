const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/orders", (req, res) => {
    res.render("orders");
})

router.get("/paymentMethods", (req, res) => {
    res.render("payment_methods");
})

router.get("/products", (req, res) => {
    res.render("products");
})

module.exports = router;