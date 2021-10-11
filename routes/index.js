// name of file initially found in /public/index.js
const router = require("express").Router();
const path = require("path");

// Get ./public/index.html
router.get("/", function (res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Get ./public/exercise.html
router.get("/exercise", function (res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

});

// Get ./public/stats.html
router.get("/stats", function (res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));

});

module.exports = router;
