const db = require("../models");

// Defining methods for the SeriessController
module.exports = {
  findCharacterBySeries: function(req, res) {
    console.log(req.params);
    console.log(req.params.seriesname);
    db.comicvinevolumes.find({
      title: req.params.title
    })
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.comicvinevolumes.find(req.query)
      .sort({ name: 1 })
      .limit(50)
      // .skip(req.params.offset)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.comicvinevolumes.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.comicvinevolumes.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.comicvinevolumes.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.comicvinevolumes.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getbyname: function(req, res) {
    console.log("req.params");
    console.log(req.params);
  //   db.movies.find({
  //     cast: { $elemMatch: {$regex: /Moss/i, $regex: /Carrie-Anne/i}}
  // });      
  // const regex = new RegExp(`ReGeX${req.params.title}ReGeX`);
  // var regex = new RegExp("ReGeX" + req.params.title + "ReGeX")  
  // RegExp    
    db.comicvinevolumes.find({ title: {$regex: req.params.title} }, req.body)
    .sort({ title: 1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getbynamereverse: function(req, res) {
    console.log("req.params");
    console.log(req.params);
    db.comicvinevolumes.find({ title: {$regex: req.params.title} }, req.body)
    .sort({ title: -1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getAllbyname: function(req, res) {
    console.log(req.params.offset)
    console.log("REQ.PARAMS.OFFSET")
    // var OFFSET = req.params.offset
    db.comicvinevolumes
    .find(req.query)
    .sort({ title: 1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getAllbynamereverse: function(req, res) {
    console.log(req.params)
    // still need to check
    // var OFFSET = req.params.offset
    db.comicvinevolumes
    .find(req.query)
    .sort({ title: -1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getByLetter : function(req, res) {
    console.log(req.params.offset)
    console.log("REQ.PARAMS.OFFSET")
    // var OFFSET = req.params.offset
    // db.comicvinevolumes    {$regex: req.params.title}
    db.comicvinevolumes.find({ title: {$regex: "^" + req.params.letter } }, req.body)
    .sort({ title: 1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getByLetterReverse : function(req, res) {
    console.log(req.params.offset)
    console.log("REQ.PARAMS.OFFSET")
    // var OFFSET = req.params.offset
    // db.comicvinevolumes
    db.comicvinevolumes.find({ title: {$regex: "^" + req.params.letter} }, req.body)
    .sort({ title: -1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
 getByYear : function(req, res) {

    // var OFFSET = req.params.offset
    // db.comicvinevolumes
    db.comicvinevolumes.find({ year: req.params.year }, req.body)
    .sort({ year: 1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getByYearreverse : function(req, res) {

    // var OFFSET = req.params.offset
    // db.comicvinevolumes
    db.comicvinevolumes.find({ year: req.params.year }, req.body)
    .sort({ year: -1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getByMostIssues : function(req, res) {

    // var OFFSET = req.params.offset
    // db.comicvinevolumes
    db.comicvinevolumes.find(req.query)
    .sort({ Field7: 1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
};