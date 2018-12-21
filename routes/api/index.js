const router = require("express").Router();
const matchingRoutes = require("./matchingRouter");
const populateRoutes = require("./populateRouter");

//  routes
router.use("/matching", matchingRoutes);


// populate routes
router.use("/populate", populateRoutes);


module.exports = router;
