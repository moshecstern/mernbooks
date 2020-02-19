const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favcharactersSchema = new Schema({
 userID: {type: String, required: true},
  name: { type: String, required: true },
  img: {type: String, required: false},
  realname: String,
  aliases: Array,
  bio: String,
  description: { type: String, required: false },
  link: {type: String, required: false},
  apearences: String,
  birth: String,
  catagory: String,
  nummembers: Number,
  date: { type: Date, default: Date.now }
});
const favcharacters = mongoose.model("favcharacters", favcharactersSchema);

module.exports = favcharacters;