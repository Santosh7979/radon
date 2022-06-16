const userModel= require("../models/userModel")
const req = require("express/lib/request")

const createUser= async function (req, res) {
      let data= req.body
     data.isFreeAppUser = req.headerFree
    let userCreated =await userModel.create(data)
    res.send({status:true, data:userCreated})
}
module.exports.createUser= createUser
