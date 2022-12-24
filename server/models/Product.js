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
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  productSize: {
    type: String,
  },
  sampleImages: {
    type: String,
    default: "no-photo.jpg",
  },
});
const product = mongoose.model("Product", Product);
module.exports = product;
