const trim = function(){
    const a = ("  functionUp  ")
    const a1 = console.log(a.trim())
}


const Lower = function(){
    const str= "JavaScript is High level Programming Language"
    const str1  =console.log(str.toLocaleLowerCase())
}
const Upper = function(){
    const abc = "JavaScript is High level Programming Language"
    const pqr =console.log(abc.toLocaleUpperCase())
}
module.exports.Lower = Lower
module.exports.Upper = Upper
module.exports.trim = trim