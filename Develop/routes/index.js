//express mongoose and api and html routes coded 


const router = require("express").Router();

const { model } = require("mongoose");

const apiRoutes = require("./api.js");

const htmlRoutes = require("./htmlRoutes.js")


router.use("/", htmlRoutes);
router.use("./api", apiRoutes)





module.exports = router;
