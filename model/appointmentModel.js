const mongoose = require('mongoose');
const objectid = mongoose.Types.ObjectId
const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'name is require']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is require']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'phoneNumber is required']
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
    },
    status: {
        type : String,
        default : 'Pending'
    }
});

const appointmentModel = mongoose.model('appointment', appointmentSchema);
module.exports = appointmentModel;