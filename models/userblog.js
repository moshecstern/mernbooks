const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userblogSchema = new Schema({
 userID: {type: String, required: true},
 author: {type: String, required: false},
  title: { type: String, required: true },
  message: { type: String, required: true },
  messagetwo: { type: String, required: false },
  img: {type: String, required: false},
  liked: {type: Number, required: false },
  link: {type: String, required: false},
  linkdescription: {type: String, required: false},
  comments: {type: Array, required: false},
  date: { type: Date, default: Date.now }
});
const userblog = mongoose.model("userblog", userblogSchema);

module.exports = userblog;