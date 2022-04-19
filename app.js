require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1><br/><p>Welcome to WES</p>");
});

module.exports = app;
