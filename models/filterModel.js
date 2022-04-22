const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  brand: "object",
  frameType: "object",
  frameShape: "object",
  frameColour: "object",
  lensColour: "object",
});

const Filter = mongoose.model("Filter", filterSchema);

module.exports = Filter;
