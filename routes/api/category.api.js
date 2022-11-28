const express = require("express");
const router = express.Router();
const CategoryController = require("../../controller/api/category.controller");
const { route } = require("./dashboard.api");

router.route("/category").get(CategoryController.GetAllCategory);
router.route("/category/add-category").post(CategoryController.AddCategory);
router.route("/category/update-category").put(CategoryController.UpdateCategory);
router.route("/category/delete-category").delete(CategoryController.DeleteCategory);

module.exports = router;
