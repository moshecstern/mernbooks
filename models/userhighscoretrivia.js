const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userhighscoretriviasSchema = new Schema({
  userID: {type: String, required: true},
  score: { type: Number, required: true },
  wrong: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});
const Userhighscoretrivia = mongoose.model("userhighscoretrivia", userhighscoretriviasSchema);

module.exports = Userhighscoretrivia;

