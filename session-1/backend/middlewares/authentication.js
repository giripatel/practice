const {jwtSecrate} = require('../secrates')
const jwt = require('jsonwebtoken')

const authentication = (req,res,next) =>{
    const token = req.headers.authorization
    console.log(token)
    try{
    const decodedToken = jwt.verify(token,jwtSecrate)
    req.email = decodedToken.email
    next()
    console.log(decodedToken);
    }catch(error){
        res.status(404).json({
            message : "Please eneter valid email and password"
        })
    }
}

module.exports = {
    authentication
}