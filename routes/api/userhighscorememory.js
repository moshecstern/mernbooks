const router = require("express").Router();
const userhighscorememory = require("../../controllers/userhighscorememory");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/userbooks"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscorememory.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscorememory.create);

// Matches with "/api/userbooks/:id"
router
  .route("/:userid")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscorememory.findbyuser)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscorememory.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, userhighscorememory.remove);

module.exports = router;