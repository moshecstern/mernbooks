const router = require("express").Router();
const favcharactersController = require("../../controllers/favcharactersController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.findbyuser)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.findById)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.remove);

  // router.route("/:userid/:offset")
  // .get(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.findbyuser)
  // .post(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.findById)
  // .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, favcharactersController.remove);

module.exports = router;