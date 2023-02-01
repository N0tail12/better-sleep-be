const express = require("express");
const router = express.Router();
const ScheduleController = require("../../controller/api/schedule.controller");

router.route("/schedule").get(ScheduleController.GetSchedule).post(ScheduleController.AddSchedule);
router.route("/update-schedule/:id").put(ScheduleController.UpdateSchedule);
router.route("/delete-schedule/:id").delete(ScheduleController.DeleteSchedule);
router.route("/update-schedules").post(ScheduleController.UpdateSchedules);

module.exports = router;
