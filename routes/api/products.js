const router = require("express").Router();
const productsController = require("../../controllers/productsController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/productss"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, productsController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, productsController.create);

// Matches with "/api/productss/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, productsController.findbyuser)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, productsController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, productsController.remove);

module.exports = router;