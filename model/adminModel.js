const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is require']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },

})

const adminModel = mongoose.model('Admins', adminSchema);
module.exports = adminModel;