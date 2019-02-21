var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({ obj: 'homework' });
});

router.post('/', function(req, res, next) {
    res.json({"name":"DJ","age":24,"contact":{"phone":8573008150,"email":"zhjiang@bu.edu"}});
});
module.exports = router;