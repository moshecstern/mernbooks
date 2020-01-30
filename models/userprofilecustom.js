const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userprofilecustomScema = new Schema({
  userID: {type: String, required: true},
  location: {type: String, required: false},
  ocupation: { type: String, required: false },
  img: { type: String, required: false },
  blogs: { type: Number, required: false },
  info: { type: String, required: false },
  fullname: { type: String, required: false },
  nickname: { type: String, required: false },
  date: { type: Date, default: Date.now }
});
const userprofilecustom = mongoose.model("userprofilecustom", userprofilecustomScema);

module.exports = userprofilecustom;