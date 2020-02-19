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

const comicvingvolumes = require("./comicvinevolumes")

const products = require("./products")
const productsbought = require("./productsbought")
const wishlist = require("./wishlist")
const mycart = require("./mycart")
const favcharacters = require("./favcharacters")
const favmedia = require("./favmedia")
// const payment = require("./payment")
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
router.use("/comicvinevolumes",comicvingvolumes);
router.use("/products", products);
router.use("/productsbought", productsbought);
router.use("/wishlist", wishlist);
router.use("/mycart", mycart);
router.use("/favcharacters", favcharacters);
router.use("/favmedia", favmedia);

// router.use("/payment", payment);
module.exports = router;
