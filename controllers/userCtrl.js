const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require(`jsonwebtoken`);
const doctorModel = require("../model/doctorModel");
const treatmentModel = require("../model/treatmentModel");
const appointmentModel = require("../model/appointmentModel");

//Token Generate Function
const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "24" });

};
//register callback
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "user already exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save()
      .then((user) => {
        const token = generateToken(user);
        res.
          status(201)
          .send({ message: "Register successfully", status: true, token });
      })
      .catch((error) => res.status(200).send({ error, status: false }))
  } catch (error) {
    console.log(error);

    return res.status(500).send(error);
  }
};

//Login
const loginController = async (req, res) => {
 
  const { email, password } = req.body;
  try {
  const user = await userModel
    .findOne({ email })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((checkPass) => {
          if (!checkPass)
            return res.status(400)
              .send({ status: false, error: "Password does not match" });

          const token = generateToken(user);
          return res.status(200).send({
            msg: "Login Success",
            userName: user.name,
            token,
            status: true,
          });
        })
        .catch((error) => {
          console.log(error);

          res
            .status(400)
            .send({ status: false, error: "Password does not match" })
        });
    })
    .catch((error) => {
      console.log(error);

      res.status(404).send({ status: false, error: "Email not found" })
 });
} catch (error) {
  console.log(error);

};
}
    
// ADD PATIENTS
const allpatients = async (req, res) => {
  try {
    const user = await userModel.find();
    return res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
};

//ADD APPOINTMENT
const addAppointments = async (req, res) => {
  try {
    const { name, lastName, email, phoneNumber, date, time } = req.body;
    const data = await new appointmentModel({
      name,
      lastName,
      email,
      phoneNumber,
      date,
      time,
    }).save();
    return res.json(data);
  } catch (error) {
    res.json(error);
  }
};

// VIEW DOCTORS
const getDoctor = async (req, res) => {
  await doctorModel.find().then((data) => res.json(data));
};

//VIEW TREATMENTS
const viewTreatment = async (req, res) => {
  await treatmentModel.find().then((data) => res.json(data));
};

module.exports = {
  loginController,
  registerController,
  allpatients,
  getDoctor,
  viewTreatment,
  addAppointments,
};
