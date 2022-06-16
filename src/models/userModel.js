const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    userid: Number,
    name: String,
    balance:{
    type:Number, 
    default:100,
    },
  address:String,
  age: Number,
  gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array