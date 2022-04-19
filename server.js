const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

console.log(process);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server is running on ${PORT}`)
);
