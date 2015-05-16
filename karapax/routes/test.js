/**
 * Created by Mia on 2015-05-11.
 */
var express = require('express');
var router = express.Router();

var apt = require('../models/apartment').model;
var aptSherbrooke = require('../models/sherbrooke');

//var mongoose = require("mongoose");


router.get('/save', function(req, res, next) {
    var sherbrooke = new apt(aptSherbrooke);
    sherbrooke.save(function(err){
        if(err) console.log(err);
        console.log(sherbrooke);
    })
    res.render('test',{name:"Karapx"});

});

module.exports = router;
