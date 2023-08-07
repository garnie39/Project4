const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { getUserCollection } = require("../db/database");

router.get("/login", (req, res) => {
  if (req.session.username) {
    res.json(req.session);
  } else {
    res.status(400).json({ message: "User is not logged in" });
    return;
  }
});

router.post("/login", (req, res) => {
  let user;
  const userCollection = getUserCollection();

  userCollection.findOne({ username: req.body.username }).then((result) => {
    user = result;
    if (!user || !bcrypt.compareSync(req.body.password, user.passwordHash)) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }
    req.session.username = user.username;
    res.json({ message: "User login was successful" });
  });
});

router.delete("/login", (req, res) => {
  req.session.destroy();
  res.json({ message: "Successfully logged out" });
});

module.exports = router;
