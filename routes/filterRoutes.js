const express = require("express");
const filterController = require("./../controllers/filterController");
const router = express();

router.get("/getAll", filterController.getAllFilters);

module.exports = router;
