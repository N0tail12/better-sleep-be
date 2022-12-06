const express = require("express");
const router = express.Router();
const AuthorController = require("../../controller/api/author.controller");

router.route("/login").post(AuthorController.login);
router.route("/logout").post(AuthorController.logout);

module.exports = router;
