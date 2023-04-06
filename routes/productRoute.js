const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/addproduct", async (req, res) => {
  // console.log(req.body);
  try {
    const { name, price } = req.body;
    const product = await Product.create({ name, price });

    res.status(201).json({
      status: "success",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.patch("/update-product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // console.log(task);

    res.status(200).json({
      status: "success",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const procuct = await Product.findByIdAndDelete(req.params.id);
    // console.log(task);
    res.status(200).json({
      status: "success",
      body: procuct,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
