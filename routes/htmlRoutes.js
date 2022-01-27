const express = require("express");
const path = require("path");
const router = require("express").Router();

const router = require("express").Router();

router.get ("/", (reg, res) => {

    //setup dirname with double underscores b/c they are global objects per Node.js 

    res.sendFile (path.join(__dirname, "../public/index.html"));
});
router.get ("/exercise", (req,res) => {
    res.sendFile (path.join (__dirname, "../exercise/index.html"));
});
router.get ("/stats", (req,res) => {
    res.sendFile (path.join (__dirname, "../stats/index.html"));
});

module.exports = router;
