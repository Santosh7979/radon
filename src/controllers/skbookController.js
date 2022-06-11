const skauthorModel = require("../models/skauthorModel")
const skbookModel= require("../models/skbookModel")
const mongoose = require('mongoose')

const check= function(ObjectId){
    return mongoose.Types.ObjectId.isValid(ObjectId)
}

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author_id){return res.send("please enter author_id")}
    if(!check(book.author_id)){return res.send("author object id is inavalid")}
    if(!book.publisher){return res.send("please enter publisher")}
    if(!check(book.publisher)){return res.send("publisher object id is inavalid")}
    let bookCreated = await skbookModel.create(book)
    res.send( {bookCreated})
}

const getBooksData= async function (req, res) {
    
    let books = await skbookModel.find()
    res.send({data: books})
}

const getBook = async function (req, res) {
    let specificBook = await skbookModel.find().populate[('author_id'),("publisher")]
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBook = getBook
