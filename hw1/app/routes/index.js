var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DJ' });
});
router.get('/users', function(req, res, next) {
  res.send('ohio');
});
router.get('/users/foo', function(req, res, next) {
  res.send('wave'); //http://localhist:3000/users/foo
});

module.exports = router;
