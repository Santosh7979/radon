const express = require('express')
const myHelper = require('../util/helper')
const myFormatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getBatchInfo()
    myFormatter.trim()
    myFormatter.Lower()
    myFormatter.Upper()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    res.send('My second ever api!')  
    const cde =require("lodash")
    let month = ['jan', 'feb', 'mar', 'apr', 'amy', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    console.log(cde.chunk(month,3))

    let array =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19] 
    console.log(cde.tail(array))

    const a =[1, 2, 3, 3, 4, 4, 5, 6]
    const b =[1, 2, 3, 3, 4, 4, 5, 6]
    const c =[1, 2, 3, 3, 4, 4, 5, 6]
    const d =[1, 2, 3, 3, 4, 4, 5, 6]
    const e =[1, 2, 3, 3, 4, 4, 5, 6]
    console.log(cde.union(a,b,c,d,e))
    

    const object = [["horror", "The shining"],["drama","titanic"],["thriller","shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(cde.fromPairs(object))
});

module.exports = router;
// adding this comment for no reason