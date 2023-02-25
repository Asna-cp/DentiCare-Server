const express = require('express');
const controller = require('../controllers/adminCtrl');

//router 
const router = express.Router();

//ADDING ADMIN SIDE
router.post("/addDoctors", controller.addDoctors);
router.post("/addCategory", controller.addCategory);
router.post("/addTreatments", controller.addTreatments);
router.post("/addBanner", controller.addBanner);
router.post("/removeDoctor/:id",controller.removeDoctor);
router.post("/removePatients/:id",controller.removePatients);
router.post("/removeTreatments/:id",controller.removeTreatments);




//VIEW IN ADMIN SIDE
router.get("/allpatients", controller.allpatients);
router.get("/alldoctors", controller.getDoctor);
router.get("/alltreatments", controller.viewTreatment);
router.get("/allappointments", controller.viewAppointments)




module.exports = router;