var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MaterialUI',
    description: 'wow omg',
    script: 'bundle'
  });
});

module.exports = router;
