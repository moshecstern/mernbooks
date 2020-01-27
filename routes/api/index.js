const router = require("express").Router();
const characterRoutes = require("./characters");
const seriesRoutes = require("./series");
const notesRoutes = require("./notes");
// const contactsRoutes = require("./contacts");
// const authRoutes = require("./notes");
// const usersRoutes = require("./users");


// api routes
router.use("/characters", characterRoutes);
router.use("/series", seriesRoutes);
router.use("/notes", notesRoutes);
// router.use("/notes", notesRoutes);

// router.use("/contacts", contactsRoutes);
// router.use("/auth", authRoutes);
// router.use("/users", usersRoutes);

module.exports = router;
