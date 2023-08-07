const express = require("express");
const router = express.Router();
const {
  getUserCollection,
  getProgramCollection,
  getDailyCollection,
  getActivityCollection,
} = require("../db/database");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  userCollection
    .find()
    .toArray()
    .then((response) => {
      res.json({ users: response });
    });
});

router.post("/user", (req, res) => {
  const userCollection = getUserCollection();

  const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());

  if (!req.body.username || req.body.email || !req.body.password) {
    res.status(400).json({ message: "missiong mandatory fields" });
    return;
  }

  if (request.body.password.length < 8) {
    response
      .status(400)
      .json({ message: "password must be 8 characters or more" });
    return;
  }

  userCollection.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json({
        message: `user with the email ${req.body.email} already exists`,
      });
      return;
    }

    userCollection
      .insertOne({
        username: req.body.username,
        email: req.body.email,
        passwordHash: passwordHash,
      })
      .then((_) => {
        res.json({ message: "User signup was successful!" });
        return;
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      });
  });
});
