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
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  // productSize: {
  //   type: String,
  // },
  sampleImage: {
    type: String,
  },
});
const product = mongoose.model("Product", Product);
module.exports = product;
