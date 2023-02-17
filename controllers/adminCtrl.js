const doctorModel = require("../model/doctorModel");
const userModel = require("../model/userModel");
const treatmentModel = require("../model/treatmentModel");
const bannerModel = require("../model/bannerModel");
const appointmentModel = require("../model/appointmentModel");

module.exports = {

    //VIEW PATIENTS
    allpatients: async (req, res) => {
        try {
            const user = await userModel.find({});
            return res.json(user);
        } catch (error) {
            res.json(error);

        }
    },

    //ADD DOCTORS
    addDoctors: async (req, res) => {
        try {
            const { doctorName, specialist, discription, experience } = req.body
            // const doctor = await doctorModel.create({doctorName,specialist,discription,experience})
            // doctor.save()

            await new doctorModel({
                discription,
                doctorName,
                experience,
                specialist,
            }).save()
            return res.json(doctor);
        } catch (error) {
            res.json(error);
        }
    },

    //VIEW DOCTORS
    getDoctor: async (req, res) => {
        try {
            const user = await doctorModel.find({});
            return res.json(doctor);
        } catch (error) {
            res.json(error);

        }
    },
    //ADD TREATMENTS
    addTreatments: async (req, res) => {
        try {
            const { treatmentname, discription, about } = req.body
            const treatment = await treatmentModel.create({ treatmentname, discription, about });
            return res.json(treatment);
        } catch (error) {
            res.json(error);
        }
    },
    
    //VIEM TREATMENTS 
    viewTreatment: async (req, res) => {
        try {
            const user = await treatmentModel.find({});
            return res.json(treatment);
        } catch (error) {
            res.json(error);
        }
    },

    //ADD BANNER
    addBanner: async (req, res) => {
        try {
            const { bannerName, discription, status, update } = req.body
            const banner = await bannerModel.create({ bannerName, discription, status, update });
            return res.json(banner);

        } catch (error) {
            res.json(error);
        }
    },
    viewAppointments: async (req, res) => {
        try {
            const appointment = await appointmentModel.find({});
    
            return res.json(appointment);
        } catch (error) {
            res.json(error);
        }
    },

};
