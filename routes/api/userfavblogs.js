const router = require("express").Router();
const userfavblogs = require("../../controllers/userfavblogsController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userfavblogs.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userfavblogs.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userfavblogs.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userfavblogs.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userfavblogs.remove);

module.exports = router;