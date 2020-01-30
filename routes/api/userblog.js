const router = require("express").Router();
const userblog = require("../../controllers/userblog");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userblog.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userblog.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userblog.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userblog.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userblog.remove);

module.exports = router;