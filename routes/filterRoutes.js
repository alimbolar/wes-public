const express = require("express");
const filterController = require("./../controllers/filterController");
const router = express();

router.get("/", filterController.getAllFilters);

module.exports = router;
