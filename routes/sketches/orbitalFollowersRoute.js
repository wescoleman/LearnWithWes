var express = require('express');
var router = express.Router();


router.get('/orbitalFollowers', function(req, res) {
    res.render('sketches/orbitalFollowers/orbitalFollowers')
});

module.exports = router;