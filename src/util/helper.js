const printDate = function() {
    let currentDate = new Date()
    console.log(currentDate)
}

const printMonth =function() {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth() + 1
    console.log('The current month is ' + currentMonth)
}

const getBatchInfo = function(){
let batchInformation = 'Radon, W3D3, the topic for today session was Nodejs'
console.log(batchInformation)
}
const lodash = function(){
    
}
module.exports.printDate = printDate
module.exports.getCurrentMonth =printMonth
module.exports.getBatchInfo = getBatchInfo
module.exports.lodash = lodash