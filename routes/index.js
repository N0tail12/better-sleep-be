const router = require("express").Router();

// router.use("/api", require("./api/author.api"));
// router.use("/api", require("./api/dashboard.api"));
// router.use("/api", require("./api/category.api"));
router.use("/api", require("./api/getDashboard.api"))
module.exports = router;
