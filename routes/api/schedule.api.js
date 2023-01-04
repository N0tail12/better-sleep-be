const express = require("express");
const router = express.Router();
const ScheduleController = require("../../controller/api/schedule.controller");

router.route("/schedule").get(ScheduleController.GetSchedule);

module.exports = router;
