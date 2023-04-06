const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of Product"],
      min: 3,
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Please enter the price of Product"],
      min: 3,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
