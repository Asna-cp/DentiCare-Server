const doctorModel = require("../model/doctorModel");
const userModel = require("../model/userModel");
const treatmentModel = require("../model/treatmentModel");
const bannerModel = require("../model/bannerModel");
const appointmentModel = require("../model/appointmentModel");
const CategoryModel = require("../model/categoryModel");
const fileUploader = require("../cloudinary/fileUploader");

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

    //PATIENTS COUNT
    patientsCount: async (req, res) => {
        try {
            const count = await userModel.find({}).countDocuments();
            return res.json(count);
        } catch (error) {
            res.json(error);
        }
    },

    //REMOVE PATIENTS
    removePatients: async (req, res) => {
        let id = req.params.id;
        await userModel.findByIdAndDelete({ _id: id });
        res.json("success");
    },

    //ADD DOCTORS
    addDoctors: async (req, res) => {
        try {
            const { doctorName, specialist, description, experience } = req.body.values

            //IMAGE
            const {image}=req.body
            fileUploader(image)
                .then(async (img) => {
                    await new doctorModel({
                        description,
                        doctorName,
                        experience,
                        image: img,
                        specialist,
                    }).save()
                    return res.json({status:true});
                }).catch ((error)=> {
                    console.log(error);
                }) 
            } catch (error) {
            console.log(error);
            res.json(error);
        }
    },

    //ADD CATEGORY(DOCTOR SPECIALISED)
    addCategory: async (req, res) => {
        try {
            const { categoryName } = req.body
            await new CategoryModel({
                categoryName
            }).save()
            return res.json(category);
        } catch (error) {
            res.json(error);
        }
    },

    //VIEW DOCTORS
    getDoctor: async (req, res) => {
        try {
            const user = await doctorModel.find({});
            // .countDocuments()
            return res.json(user);
        } catch (error) {
            res.json(error);
        }
    },

    //Count Doctors(DASHBOARD)
    getDoctorCount: async (req, res) => {
        try {
            const count = await doctorModel.find({}).countDocuments()
            console.log(count);
            return res.json(count);
        } catch (error) {
            res.json(error);
        }

    },

    //REMOVE DOCTORS
    removeDoctor: async (req, res) => {
        let id = req.params.id;
        await doctorModel.findByIdAndDelete({ _id: id });
        res.json("success");
    },

    //ADD TREATMENTS
    addTreatments: async (req, res) => {
        try {
            const { treatmentname, description, about } = req.body.values
            const {image}=req.body
            fileUploader(image)
            .then(async (img) => {
                await new treatmentModel({
                    treatmentname,
                    description,
                    image,
                    about,


                }).save()
                return res.json({status:true});
            }).catch ((error) => {
                console.log(error);
            })
            // const treatment = await treatmentModel.create({ treatmentname, description, about });
            // return res.json(treatment);
        } catch (error) {
            res.json(error);
        }
    },

    //VIEM TREATMENTS 
    viewTreatment: async (req, res) => {
        try {
            await treatmentModel.find().then((data) => res.json(data));
        } catch (error) {
            res.json(error);
        }
    },

    //REMOVE TREATMENTS
    removeTreatments: async (req, res) => {
        let id = req.params.id;
        await treatmentModel.findByIdAndDelete({ _id: id });
        res.json("success")
    },

    //ADD BANNER
    addBanner: async (req, res) => {
        try {
            const { bannerName, description, status, update } = req.body
            const banner = await bannerModel.create({ bannerName, description, status, update });
            return res.json(banner);
        } catch (error) {
            res.json(error);
        }
    },

    //VIEW APPOINTMENTS
    viewAppointments: async (req, res) => {
        try {
            const appointment = await appointmentModel.find({});
            return res.json(appointment);
        } catch (error) {
            res.json(error);
        }
    },

    //APPOINTMENT COUNT
    appointmentsCount: async (req, res) => {
        try {
            const count = await appointmentModel.find({}).countDocuments();
            return res.json(count);
        } catch (error) {
            res.json(error);
        }
    }


};
