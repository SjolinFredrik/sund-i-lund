const express = require("express");
const User = require("../schema/User");
const encryptPassword = require("../config/encryptPassword");

const router = express.Router();

router.get("/api/users", async (req, res) => {
  console.log("running");
  let allUsers = await User.find();
  res.status(200).send(allUsers);
});

router.post("/api/users", async (req, res) => {
  console.log(req.body);
  let user = new User({
    ...req.body,
    password: encryptPassword(req.body.password)
  });
  await user.save();
  res.json(user);
});

module.exports = router;
