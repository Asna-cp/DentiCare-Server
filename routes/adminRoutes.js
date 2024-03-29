const express = require('express');
const controller = require('../controllers/adminCtrl');

//router 
const router = express.Router();

//ADDING ADMIN SIDE
router.post("/login", controller.loginController);

router.post("/addDoctors", controller.addDoctors);
router.post("/addCategory", controller.addCategory);
router.post("/addTreatments", controller.addTreatments);
router.post("/addBanner", controller.addBanner);
router.post("/removeDoctor/:id", controller.removeDoctor);
router.post("/removePatients/:id", controller.removePatients);
router.post("/removeTreatments/:id", controller.removeTreatments);
router.post("/removeAppointment/:id", controller.removeAppointment);

router.post('/cancelAppointment/:id', controller.cancelAppointment)
router.post('/confirmAppointment/:id', controller.confirmAppointment)

//VIEW IN ADMIN SIDE
router.get("/allpatients", controller.allpatients);
router.get("/alldoctors", controller.getDoctor);
router.get("/alltreatments", controller.viewTreatment);
router.get("/allappointments", controller.viewAppointments);

//DashBoard
// router.get("/getDoctorCount",controller.getDoctorCount);
// router.get("/patientsCount",controller.patientsCount);
// router.get("/appointmentsCount",controller.appointmentsCount);

router.get("/allCounts", controller.allCounts)




module.exports = router;