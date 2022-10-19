var express = require('express');
var router = express.Router();


/* GET Home */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/* POST Home*/
router.post('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});


/* GET About*/
router.get('/about', function(req, res, next) {
  res.render('aboutMe', { title: 'About'});
});

/* GET Products*/
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products'});
});

/* GET Services*/
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
