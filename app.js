const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();

app.use(express.json({ extended: false }));

mongoose
  .connect("mongodb://mongo:27017/node-app", {
    useNewUrlParser: true,
  })
  .then(console.log("MongoDB connected!"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello from express in docker-compose!!!",
  });
});

app.post("/", async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    console.log(user);
    console.log(req.body.name);
    await user.save();
    res.status(200).json({
      status: 200,
      message: "Hello from express in docker-compose!!!",
    });
  } catch (error) {
    console.log(error.message);
    await User.save();
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
});

app.get("/all", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: 200,
      message: user,
    });
  } catch (error) {
    console.log(error.message);
    // await User.save();
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT | 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server up and running on port ${PORT}`);
});
