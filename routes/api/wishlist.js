const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, wishlistController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, wishlistController.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, wishlistController.findbyuser)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, wishlistController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, wishlistController.remove);

module.exports = router;