const {Router} = require('express')
const {User} = require('../db/db') 
const  {validationMiddleware} = require('../middlewares/validationMiddleware')
const jwt = require('jsonwebtoken')
const router = Router();

router.get('/',(req,res) => {
    res.send("Hello World!")
})

router.post('/signup',validationMiddleware,async (req,res) => {
    const email = req.email
    const password = req.password

    const token = jwt.sign()
    await User.create({
        email : email,
        password : password
    })
    res.json({
        message : "User created",
    })
})

router.get('/login',(req,res) => {

})

module.exports = router;