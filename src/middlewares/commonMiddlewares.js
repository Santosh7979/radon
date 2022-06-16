
const mid1= function ( req, res, next) {
   let header=req.headers.isfreeappuser;//req.headers["isFreeAppUser"]
   // console.log(header)
    // if(!req.headers.isfreeappuser) return res.send({msg:});
   if(!header){
        return res.send({status: false, msg:"request is missing a mandatory header"})
   }
   if(!header=='true'){
      req.headerFree = true
   } else{
      req.headerFree = false
   }
     next()
   }
   
module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
