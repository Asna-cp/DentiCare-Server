const express = require('express');
const controller = require('../controllers/adminCtrl');

//router 
const router = express.Router();

//ADDING ADMIN SIDE
router.post("/addDoctors", controller.addDoctors);
router.post("/addTreatments", controller.addTreatments);
router.post("/addBanner", controller.addBanner);




//VIEW IN ADMIN SIDE
router.get("/allpatients", controller.allpatients);
router.get("/alldoctors", controller.getDoctor);
router.get("/alltreatments", controller.viewTreatment);
router.get("/allappointments", controller.viewAppointments)




module.exports = router;