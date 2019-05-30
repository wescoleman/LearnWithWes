var express = require('express');
var router = express.Router();

router.get("/addcarouselimage", function(req, res) {
    res.render("standardViews/carouselImagePage");

});

module.exports = router;