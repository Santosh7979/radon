// const { count } = require("console")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const BooksByChetanBhagat = async function (req, res) {
    let data= req.body
    let allBooks= await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1 ,_id:0})
    let bookData = await bookModel.find({author_id:allBooks[0].author_id})
    res.send({msg:allBooks,bookData})
}

let authorOfBook =async function (req, res) {
    let data = await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let authorData = await authorModel.find({author_id:data.author_id}).select("author_name")
    let price = data.prices
    res.send({msg:authorData,price})

}
// problem statement 
const updateBooks= async function (req, res) {
    let data = await bookModel.find( {price:{$gte:50, $lte:100}}).select({author_id :1, _id:0})
    const key =data.map(x=>x.author_id)
    let temp =[]

    for (let i=0; i<key.length;i++){
        let y = key[i]
        const author =await authorModel.find({author_id:y}).select({author_name:1, author_id:1 ,_id:0})
        temp.push(author)
    }
    const author_name= temp.flat()
    res.send( { msg: author_name})
}
module.exports.createBook= createBook
module.exports.BooksByChetanBhagat= BooksByChetanBhagat
module.exports.updateBooks= updateBooks
module.exports.authorOfBook=authorOfBook
