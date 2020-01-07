const router = require("express").Router();
const seriesController = require("../../controllers/seriesController");

// Matches with "/api/series"
router
  .route("/")
  .get(seriesController.findAll)
  .post(seriesController.create);
router.route("/:name").get(seriesController.getbyname);

module.exports = router;
