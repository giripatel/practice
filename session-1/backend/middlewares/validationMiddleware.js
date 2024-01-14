const { models } = require( 'mongoose' );
const {emailValidation,passwordValidation} = require('../validation/validation')

 const validationMiddleware = async (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;

    const isValidEmail = emailValidation.safeParse(email)
    const isValidPassword  = passwordValidation.safeParse(password)

    if(!isValidEmail.success || !isValidPassword.success){
        res.status(404).json({
            message : "Plese enter valid Emai and password"
        })
        
    }else{
        req.email = email
        req.password = password
        next()
    }
} 

module.exports = {
    validationMiddleware
}