const router = require("express").Router();
const userbookstolend = require("../../controllers/userbookstoloanController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookstolend.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookstolend.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookstolend.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookstolend.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userbookstolend.remove);

module.exports = router;