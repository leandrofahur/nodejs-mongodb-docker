const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
});

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
