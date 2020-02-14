const router = require("express").Router();
const seriesController = require("../../controllers/comicvinevolumesController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
// Matches with "/api/series"
router
  .route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.create);
  router.route("/all/:something/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getAllbyname);
  router.route("/allreverse/:something/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getAllbynamereverse);
  router.route("/title/:title/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getbyname);
  router.route("/titlereverse/:title/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getbynamereverse);
  router.route("/letter/:letter/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getByLetter);
  router.route("/letterreverse/:letter/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getByLetterReverse);
  router.route("/year/:year/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getByYear);
  router.route("/yearreverse/:year/:offset").get(jwtVerify.confirmToken, jwtVerify.verifyToken, seriesController.getByYearreverse);


module.exports = router;