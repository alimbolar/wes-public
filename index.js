require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mailRouter = require("./routes/mailRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1><br/><p>Welcome to WES</p>");
});

app.use("/api/v1/mail", mailRouter);

module.exports = app;
