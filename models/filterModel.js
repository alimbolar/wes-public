const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  Brand: "object",
  "Frame Type": "object",
  "Frame Shape": "object",
  "Frame Colour": "object",
  "Lens Colour": "object",
});

const Filter = mongoose.model("Filter", filterSchema);

module.exports = Filter;
