var express = require('express');
var router = express.Router();



router.get("/eyetracker", function(req, res) {
    res.render("sketches/eyeTracker/eyetracker");
});

module.exports = router;