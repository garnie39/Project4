const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log("app is running");
});
