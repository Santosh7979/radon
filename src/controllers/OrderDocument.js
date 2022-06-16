const orderModel= require("../models/orderModel")
const userModel= require("../models/userModel")
const poductModel= require("../models/productModel")
// const mongoose = require("mongoose")

const createOrder= async function (req, res) {
    let data = req.body
    let userId =data.userId

    let user = await userModel.findById(userId)
    if(!user){
        return res.send({status:false, msg:"user doesnt exist"})
    }
    let productId = data.productId
    let product = await productModel.findById(productId)
    if(!product){
        return res.send({status:false, msg:"product doesnt exist"})
    }
    //scenario 1 :paid app and user balance is greter than or equal to product price
    if(!header && user.balance>=product.price){
        user.balance = user.balance - product.price
        await user.save()
        data.amount = product.price
        data.isFreeAppUser = false
        let orderCreated = await orderModel.create(data)
        return res.send({status:true, msg: orderCreated})
    } else if(!req.header){
        //scenario 2 : paid app and user balance is less than product price
        return res.send({status: false, msg:"user doesnt have suffiecienr balance"})
    } else {
        //scenario 3 : free app
        data.amount = 0
        data.isFreeAppUser = true
        let orderCreated = await orderModel.create(data)
        res.send ({status: true, msg:orderCreated})
    }
}
module.exports.createOrder= createOrder
