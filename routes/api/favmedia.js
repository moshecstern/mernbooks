const router = require("express").Router();
const favmediaController = require("../../controllers/favmediaController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.findbyuser)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.remove);

  // router
  // .route("/:userid/:offset")
  // .get(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.findbyuser)
  // .post(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.findById)
  // .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, favmediaController.remove);

module.exports = router;