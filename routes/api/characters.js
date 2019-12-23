const router = require("express").Router();
const characterController = require("../../controllers/characterController");

// Matches with "/api/character"
router.route("/")
  .get(characterController.findAll)
  .post(characterController.create);

// Matches with "/api/character/:id"
router
  .route("/:id")
  .get(characterController.findById)
  .put(characterController.update)
  .delete(characterController.remove);

module.exports = router;
