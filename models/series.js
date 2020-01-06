const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SeriesSchema = new Schema({
  series: String,
  character: String,
  name: { type: String, required: true },
  synopsis: String,
  volumes: { type: Array },
  extras: Array
});
const Series = mongoose.model("Series", SeriesSchema);

module.exports = Series;
