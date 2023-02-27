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

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
       
    },
    
    experience: {
        type: Number,
        required: true
    },
  

})

const doctorModel = mongoose.model('Doctors', doctorSchema);
module.exports = doctorModel;