const router = require("express").Router();
const productsboughtController = require("../../controllers/productsboughtController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, productsboughtController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, productsboughtController.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, productsboughtController.findbyuser)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, productsboughtController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, productsboughtController.remove);

module.exports = router;