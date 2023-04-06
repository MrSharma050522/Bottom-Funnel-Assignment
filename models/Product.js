const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the Title"],
      min: 3,
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Please enter the Task"],
      min: 3,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
