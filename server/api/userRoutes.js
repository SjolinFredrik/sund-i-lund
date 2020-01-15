const express = require("express");
const User = require("../schema/User");

const router = express.Router();

router.get("/api/users", async (req, res) => {
  let allUsers = await User.find();
  res.status(200).send(allUsers);
});

router.post("/api/users", async (req, res) => {
  if (typeof req.body.password !== "string" || req.body.password.length < 6) {
    res.json({ error: "Password too short" });
    return;
  }
});

module.exports = router;
