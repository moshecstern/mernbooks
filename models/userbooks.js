const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userbooksSchema = new Schema({
  userID: {type: String, required: true},
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
});
const Userbooks = mongoose.model("userbooks", userbooksSchema);

module.exports = Userbooks;


// const userbooksSeed = [
//     {
//       userID:"randomstring",
//       Title: "The Great Gatsby",
//       img: "randomimgurl",
//       link: "mylink",
//       author: "F. Scott Fitzgerald",
//       description: "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
//       published: "9-30-20"
//     },
//     {
//       userID:"randomstring1233",
//       Title: "The Great Gatsby123",
//       img: "randomimgurl132",
//       link: "mylink123",
//       author: "F. Scott Fitzgerald123",
//       description: "132The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
//       published: "9-30-2019"
//     }
//   ];