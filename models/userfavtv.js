const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userfavtvSchema = new Schema({
 userID: {type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: false },
  img: {type: String, required: true},
  link: {type: String, required: false},
  date: { type: Date, default: Date.now },
  episodes: Number,
  year: Number,
  info: String
});
const userfavtv = mongoose.model("userfavtv", userfavtvSchema);

module.exports = userfavtv;