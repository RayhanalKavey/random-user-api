const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5004;

// MIDDLEWARE

// Database connection
dbConnect();

app.get("/", (req, res) => {
  res.send("Welcome to the Random User Server");
});

app.listen(port, () => {
  console.log(`Random User Server app listening on port ${port}`);
});
