/**
 * Created by Mia on 2015-05-07.
 */
var express = require('express');
var router = express.Router();

var listing = require('../controllers/listing');
var aptList = require('../controllers/listing');

/* GET listing page. */
router.get('/listing', function(req, res, next) {
    var temp = listing.getAptInfo(req,res,next);
});

/* GET apartments list page. */
router.get('/aptlist', function(req,res,next){
    aptList.getAptListForList(req,res,next);
});

module.exports = router;
