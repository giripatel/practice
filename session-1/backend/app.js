const express = require('express')
const user = require('./routes/user')
const bodyParser = require('body-parser')
const app = express();
const port = 3000

app.use(bodyParser.json())

let numberOfEntries = {}

setInterval(() => {
    numberOfEntries = {}
},10000)
app.use((req,res,next) =>{
    const email = req.body.email

    if(numberOfEntries[email]){
        numberOfEntries[email] += 1;
        if(numberOfEntries[email] >= 5){
            res.status(403).json({
                message : "You have reached your limit please try again later"
            })
            return;
        }
        next()
    }else{
        numberOfEntries[email] = 1
        next()
    }
})
app.use('/',user)
app.listen(port,() =>{
    console.log('server is running on http://localhost:3000')
})