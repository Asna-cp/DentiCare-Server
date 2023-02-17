const express = require('express');
const controller = require('../controllers/adminCtrl');

//router 
const router = express.Router();


router.post("/addDoctors",controller.addDoctors);
router.post("/addTreatments",controller.addTreatments);
router.post("/addBanner",controller.addBanner);




router.get("/allpatients",controller.allpatients);




module.exports = router;