const router = require("express").Router();
const characterRoutes = require("./characters");
const seriesRoutes = require("./series");
const notesRoutes = require("./notes");
const Userbooks = require("./userbooks")
const userhighscoretrivia = require("./userhighscoretrivia")
const userhighscorememory = require("./userhighscorememory")
const userprofilecustom = require("./userprofilecustom")

const userbookstolend = require("./userbookstolend")
const userbooksloaned = require("./userbooksloaned")
const userblog = require("./userblog")
const userfavblogs = require("./userfavblogs")
// api routes
router.use("/characters", characterRoutes);
router.use("/series", seriesRoutes);
router.use("/notes", notesRoutes);
router.use("/userbooks",Userbooks);
router.use("/userhighscoretrivia",userhighscoretrivia);
router.use("/userhighscorememory",userhighscorememory);
router.use("/userprofilecustom",userprofilecustom);

router.use("/userbookstoloan",userbookstolend);
router.use("/userbooksloaned",userbooksloaned);
router.use("/userblog",userblog);
router.use("/userfavblogs",userfavblogs);


module.exports = router;
