const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String, 
    author_id: Number, 
    prices:Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
