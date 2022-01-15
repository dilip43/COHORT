const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to Mongo db database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.get("/hello-world", (req, res) => {
  res.send("hello wrold");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at port: " + process.env.PORT);
});
