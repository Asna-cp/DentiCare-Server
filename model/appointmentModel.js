const mongoose = require('mongoose');
const objectid = mongoose.Types.ObjectId
const appointmentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'name is require']
    },
    email: {
        type:String,
        required:[true,'email is register']
    },
    date: {
        type: Date,
        default: Date.now
    },
      time: {
        type: DataTypes.DATE,
        allowNull: false
      },
    
})

const appointmentModel = mongoose.model('appointment',appointmentSchema);
module.exports = appointmentModel;