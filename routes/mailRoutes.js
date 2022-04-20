const express = require("express");
const router = express.Router();
const mailController = require("./../controllers/mailController");

router.use("/sendPayOfflineEmail", mailController.sendPayOfflineEmail);

module.exports = router;
