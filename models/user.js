// const mongoose = require("mongoose");
// const userSchema = newSchema({
//   charName: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   date: { type: Date, default: Date.now }
// });

// module.exports = userSchema = mongoose.model("user", userSchema);
// const mongoose = require('mongoose');

// const UserSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('user', UserSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    username: String,
    password: String,
    email: String,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;