const mongoose = require('mongoose');
const objectid = mongoose.Types.ObjectId
const treatmentSchema = new mongoose.Schema({

    treatmentname: {
        type: String,
        required: [true, 'name is require']
    },
    description: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }

})

const treatmentModel = mongoose.model('Treatments', treatmentSchema);
module.exports = treatmentModel;