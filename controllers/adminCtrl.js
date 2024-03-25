const doctorModel = require("../model/doctorModel");
const userModel = require("../model/userModel");
const treatmentModel = require("../model/treatmentModel");
const bannerModel = require("../model/bannerModel");
const appointmentModel = require("../model/appointmentModel");
const CategoryModel = require("../model/categoryModel");
const fileUploader = require("../cloudinary/fileUploader");
const adminModel = require("../model/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require(`jsonwebtoken`);

const generateToken = (admin) => {
  return jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "20D",
  });
};

module.exports = {
  //Login
  loginController: async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body.values;
    try {
      const admin = await adminModel
        .findOne({ email })
        .then((admin) => {
          bcrypt
            .compare(password, admin.password)
            .then((checkPass) => {
              if (!checkPass)
                return res
                  .status(400)
                  .send({ status: false, error: "Password does not match" });
           
              const adminToken = generateToken(admin);
              return res.status(200).send({
                msg: "Login Success",
                adminEmail: admin.email,
                adminToken,
                status: true,
              });
            })
            .catch((error) => {
              res
                .status(400)
                .send({ status: false, error: "Password does not match" });
            });
        })
        .catch((error) => {
          res.status(404).send({ status: false, error: "Email not found" });
        });
      console.log(admin);
    } catch (error) {}
  },

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
  removePatients: async (req, res) => {
    let id = req.params.id;
    await userModel.findByIdAndDelete({ _id: id });
    res.json("success");
  },

  //ADD DOCTORS
  addDoctors: async (req, res) => {
    try {
      const { doctorName, specialist, description, experience } =
        req.body.values;

      //IMAGE
      const { image } = req.body;
      fileUploader(image)
        .then(async (img) => {
          await new doctorModel({
            description,
            doctorName,
            experience,
            image: img,
            specialist,
          }).save();
          return res.json({ status: true });
        })
        .catch((error) => {});
    } catch (error) {
      res.json(error);
    }
  },

  //ADD CATEGORY(DOCTOR SPECIALISED)
  addCategory: async (req, res) => {
    try {
      const { categoryName } = req.body;
      await new CategoryModel({
        categoryName,
      }).save();
      return res.json(category);
    } catch (error) {
      res.json(error);
    }
  },
  deletecategory: async (req, res) => {
    let id = req.params.id;
    //console.log("delete")
    await CategoryModel.findByIdAndDelete({ _id: id });
    res.json("success");
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

  //REMOVE DOCTORS
  removeDoctor: async (req, res) => {
    let id = req.params.id;
    await doctorModel.findByIdAndDelete({ _id: id });
    res.json("success");
  },

  //ADD TREATMENTS
  addTreatments: async (req, res) => {
    console.log("newcheck");
    try {
      const { treatmentname, description, about } = req.body.values;
      const { image } = req.body;
      console.log("imagess" ,req.body);
      fileUploader(image)
        .then(async (img) => {
          // console.log("img" ,img);
          await new treatmentModel({
            treatmentname,
            description,
            image:img,
            about,
          }).save();
          return res.json({ status: true });
        })
        .catch((error) => {
          console.log("servererror" , error);
            res.json(error);
        });
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
    res.json("success");
  },

  //ADD BANNER
  addBanner: async (req, res) => {
    try {
      const { bannerName, description, status, update } = req.body;
      const banner = await bannerModel.create({
        bannerName,
        description,
        status,
        update,
      });
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
  //ALL COUNTS(DASHBOARD)
  allCounts: async (req, res) => {
    try {
      const doctorsCount = await doctorModel.find({}).countDocuments();
      const patientsCount = await userModel.find({}).countDocuments();
      const appointmentsCount = await appointmentModel
        .find({})
        .countDocuments();
      const treatmentsCount = await treatmentModel.find({}).countDocuments();
      const all = {
        doctorsCount,
        patientsCount,
        appointmentsCount,
        treatmentsCount,
      };
      return res.json(all);
    } catch (error) {
      res.json(error);
    }
  },
  //REMOVE APPOINTMENTS
  removeAppointment: async (req, res) => {
    let id = req.params.id;
    await appointmentModel.findByIdAndDelete({ _id: id });
    res.json("success");
  },

  //CANCEL APPOINTMENT
  cancelAppointment: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await appointmentModel.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "Cancel" } }
    );
    res.json("success");
  },

  confirmAppointment: async (req, res) => {
    const id = req.params.id;
    await appointmentModel.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "Confirmed" } }
    );
    res.json("success");
  },
};
