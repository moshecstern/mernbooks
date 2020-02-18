const router = require("express").Router();
const mycartController = require("../../controllers/mycartController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, mycartController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, mycartController.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, mycartController.findbyuser)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, mycartController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, mycartController.remove);

module.exports = router;