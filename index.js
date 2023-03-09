const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();
const userRouter = require("./routes/v1/user.route");

const app = express();
const port = process.env.PORT || 5004;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const newUser = {};
// Database connection
dbConnect();

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Random User Server");
});

app.all("*", (req, res) => {
  res.send("!!!!!!------ No Route Found -----!!!!!!!");
});

app.listen(port, () => {
  console.log(`Random User Server app listening on port ${port}`);
});
