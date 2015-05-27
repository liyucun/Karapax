/**
 * Created by Mia on 2015-05-11.
 */
var express = require('express');
var router = express.Router();

var apt = require('../models/apartment').model;
var aptSherbrooke = require('../models/sherbrooke');
var aptBishop = require('../models/bishop');
var aptAlex118 = require('../models/stalexandre118');
var aptAlex220 = require('../models/stalexandre220');
var aptYouville = require('../models/youville');

//var mongoose = require("mongoose");


router.get('/save', function(req, res, next) {
    var sherbrooke = new apt(aptSherbrooke);
    var bishop = new apt(aptBishop);
    var alex110 = new apt(aptAlex118);
    var alex220 = new apt(aptAlex220);
    var youville = new apt(aptYouville);
    sherbrooke.save(function(err){
        if(err) console.log(err);
        console.log(sherbrooke);
    });
    youville.save(function(err){
        if(err) console.log(err);
        console.log(youville);
    })
    bishop.save(function(err){
        if(err) console.log(err);
        console.log(bishop);
    })
    alex110.save(function(err){
        if(err) console.log(err);
        console.log(alex110);
    })
    alex220.save(function(err){
        if(err) console.log(err);
        console.log(alex220);
    })
    res.render('test',{name:"Karapx"});

});

module.exports = router;
