const express = require("express");
const router = express.Router();
const UserController = require("../../controller/api/user.controller");

router.route("/profile").get(UserController.GetUserInfo);
router.route("/update-status/:id").put(UserController.UpdateStatus);
router.route("/signup").post(UserController.CreateNewUser);
router.route("/add-goal-default").post(UserController.AddDefaultGoal);

module.exports = router;
