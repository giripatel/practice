const {Router} = require('express')
const {User} = require('../db/db') 
const  {validationMiddleware} = require('../middlewares/validationMiddleware')
const jwt = require('jsonwebtoken')
const {jwtSecrate}= require('../secrates')
const {authentication} = require('../middlewares/authentication')
const { default: mongoose } = require( 'mongoose' )
const router = Router();

router.get('/',(req,res) => {
    res.send("Hello World!")
})

router.post('/signup',validationMiddleware,async (req,res) => {
    const email = req.email
    const password = req.password

    await User.create({
        email : email,
        password : password
    })
    res.json({
        message : "User created",
    })
})

router.get('/login',validationMiddleware,(req,res) => {
    const email = req.email;
    
    const jwtToken = jwt.sign({email : email},jwtSecrate)
    console.log(jwtSecrate)
    res.json({
        message : jwtToken 
    })
})

router.get('/home',authentication,async(req,res) =>{
    const email = req.email
    console.log('============================************Reached here 1*************=======================')
    const user = await User.findOne({
        email : email
    })
    console.log(user)
    console.log('============================************Reached here 2*************=======================')
    res.status(201).json({
        message : "Home page is accessable",
    })
})


router.patch('/update',authentication,async (req,res) => {
    
    const email = req.email
    const user = await User.findOne({
        email : email
    })
    let _id = user._id
    console.log(_id)
    await User.updateOne(
        {
            _id : _id
        },
        {
            password : "Is it working?"
        }
        )
    res.json({
        message : "user account is updated"
    })    
})

router.delete('/delete',authentication,async (req,res) => {
    
    const email = req.email
    const user = await User.findOne({
        email : email
    })
    let _id = user._id
    console.log(_id)
    await User.deleteOne(
        {
            _id : _id
        },
        {
            password : "Is it working?"
        }
        )
    res.json({
        message : "user account is deleted...........!"
    })    
})

module.exports = router;