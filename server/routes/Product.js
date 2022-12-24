const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getaProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product");

router.get("/", getProducts); //get all products
router.get("/:id", getaProduct); //get product using id
router.post("/", addProduct); //add a product
router.put("/:id", updateProduct); //update product details
router.delete("/:id", deleteProduct); //delete the product

module.exports = router;
