const express = require('express')
const { loginController, registerController,allpatients, getDoctor,viewTreatment,addAppointments } = require('../controllers/userCtrl')

//router 
const router = express.Router()

//routes
//LOGIN || POST
router.post('/login',loginController)

//REGISTER || POST
router.post('/register',registerController)
router.post("/addAppointment",addAppointments);

router.get("/allpatients",allpatients)
router.get("/alldoctors",getDoctor)
router.get("/alltreatments",viewTreatment)


module.exports = router