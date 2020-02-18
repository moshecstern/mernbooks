const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productsboughtSchema = new Schema({
  userID: {type: String, required: true},
  username: String,
  Title: { type: String, required: true },
  img: { type: String, required: true },
  link: { type: String, required: false },
  author: { type: Array, required: false },
  description: { type: String, required: false },
  published: { type: String, required: true },
  numIssues: String,
  publisher: String,
  date: { type: Date, default: Date.now },
  img2: String,
  price: {type: Number, required: true},
  recieved: Boolean,
  sent: Boolean,
  payed: Boolean,
  message: Array
});
const productsbought = mongoose.model("productsbought", productsboughtSchema);

module.exports = productsbought;
