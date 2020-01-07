const router = require("express").Router();
const characterRoutes = require("./characters");
const seriesRoutes = require("./series");
const notesRoutes = require("./notes");
// api routes
router.use("/characters", characterRoutes);
router.use("/series", seriesRoutes);
router.use("/notes", notesRoutes);

module.exports = router;
