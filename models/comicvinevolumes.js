const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const comicvinevolumesSchema = new Schema({
  title: { type: String, required: true },
  img: String,
  year: String, 
  publisher: String,
  Field7: String,
  description: { type: String }
});
const comicvinevolumes = mongoose.model("comicvinevolumes", comicvinevolumesSchema);

module.exports = comicvinevolumes;