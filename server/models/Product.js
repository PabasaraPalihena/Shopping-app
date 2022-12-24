const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
  productID: {
    type: String,
  },
  productName: {
    type: String,
    require: true,
  },
  Price: {
    type: Number,
  },
  availableQty: {
    type: Number,
  },
  productSize: {
    type: String,
  },
});
const product = mongoose.model("Product", Product);
module.exports = product;
