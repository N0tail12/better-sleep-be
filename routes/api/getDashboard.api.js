const express = require("express");
const router = express.Router();
const DashboardController = require("../../controller/api/getDashboard.controller");

router.route("/dashboard").get(DashboardController.getDashboard);
router.route("/update-goal/:id").put(DashboardController.updateGoalTime);

module.exports = router;
