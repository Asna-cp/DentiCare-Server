const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is require']
    },
    email: {
        type: String,
        required: [true, 'email is register']
    },
    password: {
        type: String,
        required: [true, 'password is register']
    },

})

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;