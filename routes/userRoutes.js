const express = require('express')
// const { default: doctorDetails } = require('../../client/src/pages/Doctors/doctorDetails')
const {
    loginController,
    registerController,
    allpatients,
    getDoctor,
    viewTreatment,
    addAppointments,
    profile,
    doctorDetails,
    checkAppoTime,
} = require('../controllers/userCtrl')

//router 
const router = express.Router()

//routes
//LOGIN || POST
router.post('/login', loginController)

//REGISTER || POST
router.post('/register', registerController)

router.route("/addAppointment").get(checkAppoTime).post(addAppointments);

router.get("/allpatients", allpatients)
router.get("/alldoctors", getDoctor)
router.get("/alltreatments", viewTreatment)
router.get("/profile", profile)
router.get("/doctorDetails",doctorDetails)


module.exports = router;