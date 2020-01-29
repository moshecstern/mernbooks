const router = require("express").Router();
const characterRoutes = require("./characters");
const seriesRoutes = require("./series");
const notesRoutes = require("./notes");
const Userbooks = require("./userbooks")
const userhighscoretrivia = require("./userhighscoretrivia")
const userhighscorememory = require("./userhighscorememory")


// api routes
router.use("/characters", characterRoutes);
router.use("/series", seriesRoutes);
router.use("/notes", notesRoutes);
router.use("/userbooks",Userbooks);
router.use("/userhighscoretrivia",userhighscoretrivia);
router.use("/userhighscorememory",userhighscorememory);


module.exports = router;
