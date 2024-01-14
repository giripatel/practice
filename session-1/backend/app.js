const express = require('express')
const user = require('./routes/user')
const bodyParser = require('body-parser')
const app = express();
const port = 3000

app.use(bodyParser.json())

app.use('/',user)
app.listen(port,() =>{
    console.log('server is running on http://localhost:3000')
})