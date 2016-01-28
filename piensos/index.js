var express = require('express');
var router = express.Router();

/* GET piensos listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  res.send({id: req.params.id });
});

module.exports = router;
