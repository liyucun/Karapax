/**
 * Created by Mia on 2015-05-07.
 */
var apt = require('../models/apartment').model;

var api = module.exports;

api.getAptInfo = function(req,res,next){
    var id = req.query.id;
    var aptInfo;
    console.log(id);
    apt.findOne({_id:id},function(err, apt){
        if(err) console.log(err);
        //return apt;
        res.render('listing',apt);
    });
}