const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favcharactersSchema = new Schema({
 userID: {type: String, required: true},
  name: { type: String, required: true },
  realname: String,
  aliases: Array,
  bio: String,
  description: { type: String, required: false },
  img: {type: String, required: false},
  link: {type: String, required: false},
  date: { type: Date, default: Date.now }
});
const favcharacters = mongoose.model("favcharacters", favcharactersSchema);

module.exports = favcharacters;