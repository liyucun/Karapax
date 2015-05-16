/**
 * Created by Mia on 2015-05-07.
 */
var express = require('express');
var router = express.Router();
var listing = require('../controllers/listing');

/* GET listing page. */
router.get('/listing', function(req, res, next) {
    var temp = listing.getAptInfo(req,res,next);
    //res.render('listing', temp);
});


module.exports = router;
