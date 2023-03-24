const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the Title"],
      min: 3,
      trim: true,
    },
    text: {
      type: String,
      required: [true, "Please enter the Task"],
      min: 3,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("task", notesSchema);

module.exports = Notes;
