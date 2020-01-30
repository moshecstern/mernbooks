const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userfavblogsSchema = new Schema({
 userID: {type: String, required: true},
 originalID: {type: String, required: true},
  title: { type: String, required: true },
  message: { type: String, required: true },
  img: {type: String, required: false},
  link: {type: String, required: false},
  date: { type: Date, default: Date.now }
});
const userfavblogs = mongoose.model("userfavblogs", userfavblogsSchema);

module.exports = userfavblogs;