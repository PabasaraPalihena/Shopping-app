const express = require("express");
const router = express.Router();

const {
  addCategory,
  getCategories,
  getaCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/Category");

router.get("/", getCategories); //get all categories
router.get("/:id", getaCategory); //get category using id
router.post("/", addCategory); //add a category
router.put("/:id", updateCategory); //update category details
router.delete("/:id", deleteCategory); //delete the category

module.exports = router;
