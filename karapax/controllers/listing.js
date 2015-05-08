/**
 * Created by Mia on 2015-05-07.
 */

var aptInfo = require('../models/apartment').model;

var api = module.exports;

api.getAptInfo = function(req, res, next){
    return aptInfo;
}