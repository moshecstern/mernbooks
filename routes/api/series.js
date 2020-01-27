const router = require("express").Router();
const seriesController = require("../../controllers/seriesController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/series"
router
  .route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.create);
router.route("/:name").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getbyname);

module.exports = router;
