var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DJ' });
});
// router.get('/data',function(req,res,next){
// //   res.send({name:'DJ',phone:8573008150});
// // });
// router.delete('/data',function (req,res,next) {
//   res.
// })
module.exports = router;
