const express = require("express");
const router = express.Router();
const DashboardController = require("../../controller/api/getDashboard.controller");

router.route("/dashboard").post(DashboardController.getDashboard);

module.exports = router;
