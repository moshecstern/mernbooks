const router = require("express").Router();
const seriesController = require("../../controllers/seriesController");

// Matches with "/api/series"
router.route("/")
  .get(seriesController.findAll)
  .post(seriesController.create);

// Matches with "/api/seriess/:id"
router
  .route("/:id")
  .get(seriesController.findById)
  .put(seriesController.update)
  .delete(seriesController.remove);

  router
  .route("/:seriesname/:charactername")
  .get(seriesController.findCharacterBySeries);

  router
  .route("/:id")
  .get(seriesController.findById)
  // .put(characterController.update)
  // .delete(characterController.remove);
router
  .route("/:name")
  .get(seriesController.getbyname);
  
module.exports = router;