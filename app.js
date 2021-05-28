const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://mongo:27017/docker-nodejs-mongodb", {
    useNewUrlParser: true,
  })
  .then(console.log("MongoDB connected!"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello from express in docker-compose!",
  });
});

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
