var express = require('express'),
	SketchImage = require('../../models/Sketches');

var router = express.Router();


router.get("/", function(req, res) {
	SketchImage.find({}, (err, allSketchImages ) => {
		if (err) {
			res.render('standardViews/home');
		} else {
			for (var i = 0; i < allSketchImages.length; i++) {
			}
			res.render('standardViews/home', {sketchImages: allSketchImages})
		}
	})
    // res.render("standardViews/home");

});

module.exports = router;