const express = require("express");
const router = express.Router();
const DashboardRepository = require("../../controller/api/dashboard.controller");

router.route("/dashboard/all-item").get(DashboardRepository.GetAllItem);
router.route("/dashboard/item-by-id").get(DashboardRepository.GetItemByID);
router.route("/dashboard/delete-item").delete(DashboardRepository.DeleteItemByID);
router.route("/dashboard/add-item").post(DashboardRepository.AddItem);
router.route("/dashboard/update-item").put(DashboardRepository.UpdateItem);

module.exports = router;
