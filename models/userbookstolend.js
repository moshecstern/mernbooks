const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userbookstolendScema = new Schema({
  userID: {type: String, required: true},
  location: {type: String, required: false},
  available: {type: Boolean, required: true},
price: {type: Number, required: false},
message: {type: String, required : false},
img: {type: String, required: false},
title: {type: String, required: true},
  link: { type: String, required: false },
  author: { type: Array, required: false },
  description: { type: String, required: true },
  published: { type: String, required: false },
  comments: {type : Array, required: false},
  date: { type: Date, default: Date.now }
});
const userbookstolend = mongoose.model("userbookstolend", userbookstolendScema);

module.exports = userbookstolend;