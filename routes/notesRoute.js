const express = require("express");
const authUser = require("../middleware/authuser");
const Notes = require("../models/Notes");

const router = express.Router();

router.post("/addnotes", authUser, async (req, res) => {
  try {
    const { title, text } = req.body;
    const note = await Notes.create({ title, text, createdBy: req.userId });

    res.status(201).json({
      status: "success",
      note,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/mynotes", authUser, async (req, res) => {
  try {
    const notes = await Notes.find({ createdBy: req.userId });

    res.status(200).json({
      status: "success",
      notes,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.patch("/update-notes/:id", authUser, async (req, res) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // console.log(task);

    res.status(200).json({
      status: "success",
      note,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.delete("/delete/:id", authUser, async (req, res) => {
  try {
    // console.log(req.params.id);
    const note = await Notes.findByIdAndDelete(req.params.id);
    // console.log(task);
    res.status(200).json({
      status: "success",
      body: note,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
