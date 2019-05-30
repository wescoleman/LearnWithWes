var express = require('express');
var router = express.Router();

router.get('/aboutme', function(req, res) {
    res.render('standardViews/aboutMe');
});

module.exports = router;