const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher= req.body
    let publisherCreated= await publisherModel.create(publisher)
    res.send({msg: publisherCreated})
}



module.exports.createPublisher=createPublisher
// module.exports.getUsersData= getUsersData