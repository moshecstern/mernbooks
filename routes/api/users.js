const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateNewMember = require("../../validation/register");
const validateMember = require("../../validation/login");
const user = required("../../models/users");

router.post("/register", (req, res) => {
  const { error, isValid } = validateNewMember(req.body);
  if (!isValid) {
    return res.status(401).json(error);
  }
  user.findOne({ email: req.body.email }).then(returnedInfo => {
    if (returnedInfo) {
      return res.status(401).json({ email: "Email already used!" });
    }
  });
  //saving info database
  const newMember = new Member({
    charName: req.body.charName,
    email: req.body.email,
    password: req.body.password
  });
  bcrypt.genSalt(15, (err, salt) => {
    bcrypt.hash(newMember.password, salt, (err, hash) => {
      if (err) throw err;
      newMember.password = hash;
      newMember
        .save()
        .then(member => res.json(member))
        .catch(err => console.log(err));
    });
  });
});
router.post("/login", (req, res) => {
  const { error, isValid } = validateMember(req.body);
  if (!isValid) {
    return res.status(401).json(error);
  }
  const email = req.body.email;
  const password = req.body.password;
  //for existing users
  user.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(404).json({ emaildoesnotexist: "Email doesn't exist" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 },
          (err, token) => {
            res.json({ success: true, token: "Awesome" + token });
          }
        );
      } else {
        return res.status(401), json({ passwordInvalid: "Wrong Password" });
      }
    });
  });
});
module.exports = router;
