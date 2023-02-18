const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({

    doctorName: {
        type: String,
        required: [true, 'name is require']
    },
    specialist: {
        type: String,
        required: [true, 'Specialist is require']
    },

    discription: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },

})

const doctorModel = mongoose.model('Doctors', doctorSchema);
module.exports = doctorModel;