const db = require("../models");
// const jwtDecode = require('jwt-decode');
// console.log(jwtDecode(accessString).id)
module.exports = {
  findAll: function(req, res) {
    db.Userbooks.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Userbooks.findById(req.params.userid)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findbyuser: function(req, res) {
db.Userbooks.find({
  userID : req.params.userid
})
.then(dbResult => res.json(dbResult))
.catch(err => res.status(422).json(err));
  } ,
  create: function(req, res) {
    console.log("req.body")
    console.log(req.body)
    db.Userbooks.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Userbooks.findOneAndUpdate({ _id: req.params.userid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Userbooks.findById({ _id: req.params.userid })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
