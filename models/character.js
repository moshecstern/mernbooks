const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  link: String,
  img: { type: String, required: true },
  info: String,
  series: {type: Array},
  date: { type: Date, default: Date.now }
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;