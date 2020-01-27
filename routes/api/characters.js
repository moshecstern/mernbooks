const router = require("express").Router();
const characterController = require("../../controllers/characterController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/characters"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, characterController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, characterController.create);

// Matches with "/api/characters/:id"
router
  .route("/:id")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, characterController.findById)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, characterController.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, characterController.remove);

module.exports = router;
