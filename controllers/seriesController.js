const db = require("../models");

// Defining methods for the SeriessController
module.exports = {
  findCharacterBySeries: function(req, res) {
    // console.log(res)
    console.log(req.params)
    console.log(req.params.seriesname)
    db.Series
    .find({
      series: req.params.seriesname,
      character: req.params.charactername
    })
    .then(dbResult => res.json(dbResult))
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Series
      .find(req.query)
      .sort({ name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Series
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Series
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Series
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Series
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
