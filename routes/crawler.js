/**
 * Created by Coronary on 2016/12/24.
 */
var express = require('express');
var router = express.Router();
var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
    var word = req.query.q;
    queryNaver(word, function(result){
      	res.send(result);
    });
});


function queryNaver(word, callback) {
	var result;
	superagent.get('http://cndic.naver.com/search/all')
			.query({'q': word})
			.end(function(err, res){
				var $ = cheerio.load(res.text);
				fs.writeFile('./res.html', res.text, 'utf8', function(err){
					console.log(err);
				});
				result = $('#content .word_result dl').text();
				callback(result);
			});
}

module.exports = router;