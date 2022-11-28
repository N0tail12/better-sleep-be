const express = require("express");
const router = express.Router();
const AuthorController = require("../../controller/api/author.controller");

router.route("/login").get(AuthorController.login);
router.route("/logout").get(AuthorController.logout);

module.exports = router;
