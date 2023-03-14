const express = require('express');
const controller = require('../controllers/doctorCtrl');

const router = express.Router();

router.get("/allappointments", controller.viewAppointments);
router.get("/alldoctors", controller.getDoctor);
router.post("/removeAppointment/:id", controller.removeAppointment);


module.exports = router;