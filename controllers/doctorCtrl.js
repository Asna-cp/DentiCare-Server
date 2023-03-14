const doctorModel = require("../model/doctorModel");
const userModel = require("../model/userModel");
const jwt = require(`jsonwebtoken`);
const appointmentModel = require("../model/appointmentModel");


  //VIEW APPOINTMENTS
  module.exports = { 

      viewAppointments: async (req, res) => {
          try {
              const appointment = await appointmentModel.find({});
              return res.json(appointment);
            } catch (error) {
                res.json(error);
            }
        },
         //VIEW DOCTORS
  getDoctor: async (req, res) => {
    try {
      const user = await doctorModel.find({});
      return res.json(user);
    } catch (error) {
      res.json(error);
    }
  },

  //REMOVE APPOINTMENTS
  removeAppointment: async (req, res) => {
    let id = req.params.id;
    await appointmentModel.findByIdAndDelete({_id: id });
    res.json("success");
  },

  }