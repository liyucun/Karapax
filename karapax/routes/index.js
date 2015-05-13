var express = require('express');
var router = express.Router();
var test = require('./test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karapax' });
});

router.get('/career', function(req, res, next) {
  res.render('career', { title: 'Karapax'});
});

router.use('/',test);


module.exports = router;
