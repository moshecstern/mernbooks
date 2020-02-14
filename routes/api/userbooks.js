const router = require("express").Router();
const userbookController = require("../../controllers/userbooksController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookController.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookController.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookController.remove);

module.exports = router;