const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  active: { type: Boolean, default: false },
  email: { type: String }
});

module.exports = mongoose.model("User", userSchema);
