const express = require('express');
const router = express.Router();
 const OrderDocument= require("../controllers/OrderDocument")
const UserDocument= require("../controllers/UserDocument")
const ProductDocument= require("../controllers/ProductDocument")
// const commonMW = require ("../middlewares/commonMiddlewares")
const mid =require("../middlewares/commonMiddlewares")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", ProductDocument.createProduct  )
router.post("/createOrder",mid.mid1, OrderDocument.createOrder)
router.post("/createUser", mid.mid1, UserDocument.createUser)

module.exports = router;