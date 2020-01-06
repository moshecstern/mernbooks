const mongoose = require("mongoose");
const userSchema = newSchema({
  charName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = userSchema = mongoose.model("user", userSchema);
