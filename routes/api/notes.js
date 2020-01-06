const router = require("express").Router();
const seriesController = require("../../controllers/notesController");
// Matches with "api/notes"
router
  .route("/")
  .get(seriesController.findAll)
  .post(seriesController.create);

module.exports = router;
