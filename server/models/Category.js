const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema({
  categoryName: {
    type: String,
    require: true,
  },
});

const category = mongoose.model("Category", Category);
module.exports = category;
