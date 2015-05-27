var express = require('express');
var router = express.Router();

var aptList = require('../controllers/listing');

/* GET home page. */
router.get('/', function(req, res, next) {
  aptList.getAptListForIndex(req,res,next);
});

router.get('/career', function(req, res, next) {
  res.render('career');
});


module.exports = router;
