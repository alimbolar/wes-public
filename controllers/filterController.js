const mongoose = require("mongoose");
const { response } = require("..");
const Filter = require("./../models/filterModel");

exports.getAllFilters = async (req, res, next) => {
  const filters = await Filter.find({}, { _id: 0 });
  res.status(200).json({
    status: "success",
    data: filters,
  });
};
