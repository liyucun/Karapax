/**
 * Created by Mia on 2015-05-11.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Kitten', { name: String });



/* GET home page. */
router.get('/test', function(req, res, next) {
    var db = mongoose.connection;
    var kittens;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        Cat.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens)
        })

    });
    res.render('test', kittens);

});

module.exports = router;
