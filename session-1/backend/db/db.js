const connectionString = require('../secrates');
const mongoose = require('mongoose')

mongoose.connect(connectionString+"Practice")
const userSchema = mongoose.Schema({
    email : String,
    password : String  
})

const User = mongoose.model('User',userSchema)

module.exports = {
    User
}

