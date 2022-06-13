const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://santosh7979:Santosh7979@cluster0.sthglu8.mongodb.net/authors1?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
app.use(function (req, res, next) {
    var currentDate =new Date()
    var datetime = currentDate.getDate() +" " 
                    +(currentDate.getMonth()+1) +" "
                    currentDate.getYear() +" "
                    currentDate.getHours() +" "
                    currentDate.getMinutes() +" "
                    currentDate.getSeconds();
    let ip = req.ip
    let url =req.originalUrl
    console.log(`${currentDate} ${ip} ${url}`)                
        next() 
}
)
// module.exports.newMiddleware=newMiddleware 

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
