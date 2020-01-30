const router = require("express").Router();
const userprofilecustom = require("../../controllers/userprofilecustom");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userprofilecustom.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userprofilecustom.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userprofilecustom.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userprofilecustom.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userprofilecustom.remove);
  // .update(jwtVerify.confirmToken, jwtVerify.verifyToken, userprofilecustom.update);

module.exports = router;