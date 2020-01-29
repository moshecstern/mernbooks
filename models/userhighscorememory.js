const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userhighscorememorySchema = new Schema({
  userID: {type: String, required: true},
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});
const Userhighscorememory = mongoose.model("userhighscorememory", userhighscorememorySchema);

module.exports = Userhighscorememory;