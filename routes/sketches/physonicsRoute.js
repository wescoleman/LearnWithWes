var express = require('express');
var router = express.Router();


router.get('/physonics', function(req, res) {
    res.render('sketches/physonics/physonics')
});

module.exports = router;