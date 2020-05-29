const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogPostSchema = new Schema({
  header: { type: String },
  body: { type: String },
  date: { type: String }
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
