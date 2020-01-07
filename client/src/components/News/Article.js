var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
