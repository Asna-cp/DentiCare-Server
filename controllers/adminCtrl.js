const doctorModel = require("../model/doctorModel");
const userModel = require("../model/userModel");
const treatmentModel = require("../model/treatmentModel");
const bannerModel = require("../model/bannerModel");
const appointmentModel = require("../model/appointmentModel");
const CategoryModel = require("../model/categoryModel");

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

        //REMOVE PATIENTS
        removePatients:async (req, res) => {
            let id = req.params.id;
            await userModel.findByIdAndDelete({ _id: id});
            res.json("success");
        },
    
    //ADD DOCTORS
    addDoctors: async (req, res) => {
        try {
            const { doctorName, specialist, discription, experience } = req.body
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

    //ADD CATEGORY(DOCTOR SPECIALISED)
    addCategory: async (req, res) => {
        try {
            const { categoryName } = req.body
            await new CategoryModel({
                categoryName
            }) .save()
            return res.json(category);
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

    //REMOVE DOCTORS
    removeDoctor:async (req, res) => {
        let id = req.params.id;
        await doctorModel.findByIdAndDelete({ _id: id});
        res.json("success");
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
