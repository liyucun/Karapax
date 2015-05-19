/**
 * Created by Mia on 2015-05-07.
 */
var express = require('express');
var router = express.Router();

var aptSherbrooke = require('../models/sherbrooke');
var aptAlex118 = require('../models/stalexandre118');
var aptAlex220 = require('../models/stalexandre220');
var aptBishop = require('../models/bishop');
var aptYouville = require('../models/youville');

/* GET listing page. */
router.get('/listing', function(req, res, next) {
    var id = req.query.id;
    var aptInfo;
    switch(id){
        case '1' : aptInfo = aptSherbrooke;
            break;
        case '2': aptInfo = aptAlex118;
            break;
        case '3': aptInfo = aptAlex220;
            break;
        case '4': aptInfo = aptBishop;
            break;
        default : aptInfo = aptYouville;
            break;
    }
    res.render('listing',aptInfo);

});


module.exports = router;
