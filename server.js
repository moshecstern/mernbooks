const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors")


// use react 20, activities 8 and 11. (pupster and ajax)
// video guide in 20

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comicbookdb", { useNewUrlParser: true });

// Define API routes here
// const characterController= require("./controllers/characterController");
// app.use(characterController);
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
