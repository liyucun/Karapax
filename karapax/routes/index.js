var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karapax' });
});

router.get('/career', function(req, res, next) {
  res.render('career', { title: 'Karapax'});
});

router.get('/listing', function(req, res, next) {
  if(req.query.id==1) var imgPath = 'images/181placedyouville300br1.jpg';
  //var imgPath = 'images/kitchen.jpg';
  res.render('listing', { imgPath: imgPath});
});


module.exports = router;
