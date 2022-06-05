const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// // })
router.get('/sol1', function (req, res){
let arr = [1, 2, 3, 4, 6, 7, 8]
for(let i=0;i<arr.length-1;i++){
    if(arr[i]+1!=arr[i+1]){
        missingNumber=arr[i]+1
    }
}
res.send("The missing number is "+ missingNumber)
})


router.get('/movies', function(req, res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    
    res.send(movies)
})


router.get('/movies/:indexNumber', function(req, res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    return res.send(movies[2])
})


 router.get('/movies/:indexNumber', function(req, res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    i=2
    if(i>-1 && i<4){
       res.send(movies[i])
    } 
    else{
       res.send('use valid index number')
    }
})


    router.get('/films', function(req, res){
     let moviesObjects = [{
         "id":1,
         "name":"The Shining"
     },{
         "id":2,
         "name":"Incendies"
     },{
         "id": 3,
         "name":"Rang de Basanti"
     },{
         "id":4,
         "name":"Finding Nemo"
     }]
     res.send(moviesObjects)  
})


router.get('/films/:3', function(req, res){
    let moviesObjects = [{
        "id":1,
        "name":"The Shining"
    },{
        "id":2,
        "name":"Incendies"
    },{
        "id": 3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Nemo"
    }]
    res.send(moviesObjects[3])    
})


router.get('/films/:3', function(req, res){
    let moviesObjects = [{
        "id":1,
        "name":"The Shining"
    },{
        "id":2,
        "name":"Incendies"
    },{
        "id": 3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Nemo"
    }]
    i=7
    if(i>0 &&i<5){
        res.send(moviesObjects[i])
    } else{
        res.send('No movies exists with this id')
    }
})
router.get('/candidates/:candidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.candidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason