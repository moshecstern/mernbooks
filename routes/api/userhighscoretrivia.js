const router = require("express").Router();
const userhighscoretrivia = require("../../controllers/userhighscoretriviaController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscoretrivia.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscoretrivia.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscoretrivia.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscoretrivia.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscoretrivia.remove);

module.exports = router;