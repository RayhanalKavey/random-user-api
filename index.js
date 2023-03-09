const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();

const user = require("./randomUser.json");
console.log(user);

const app = express();
const port = process.env.PORT || 5004;

// MIDDLEWARE
app.use(cors());
// app.use(express.json());

const newUser = {};
// Database connection
dbConnect();

app.get("/", (req, res) => {
  res.send("Welcome to the Random User Server");
});

app.listen(port, () => {
  console.log(`Random User Server app listening on port ${port}`);
});
