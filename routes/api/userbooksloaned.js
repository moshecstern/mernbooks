const router = require("express").Router();
const userbooksloaned = require("../../controllers/userbooksloanedController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userbooksloaned.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userbooksloaned.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userbooksloaned.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userbooksloaned.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userbooksloaned.remove);

module.exports = router;