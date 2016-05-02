var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('markdownpad', { layout: 'markdownLayout' });
});

module.exports = router;

//https://scotch.io/tutorials/building-a-real-time-markdown-viewer