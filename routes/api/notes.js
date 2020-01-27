const router = require("express").Router();
const notesController = require("../../controllers/notesController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "api/notes"
router
  .route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, notesController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, notesController.create);
  
module.exports = router;
