const router = require("express").Router();
const characterRoutes = require("./characters");
const seriesRoutes = require("./series");

// character routes
router.use("/characters", characterRoutes);
router.use("/series", seriesRoutes);

module.exports = router;