var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({ obj: 'homework' });
});

router.post('/', function(req, res, next) {
    res.send(req.body);
});
module.exports = router;