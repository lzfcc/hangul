var express = require('express');
var formidable = require('formidable');
var router = express.Router();

//compileX
var compiler = require('compilex');
var option = {
	stats: true
};
compiler.init(option);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('compiler', {
		title: 'Compiler Demo'
	});
	//res.sendfile( __dirname + "/index.html");
});


router.post('/compilecode', function(req, res) {
	//all the infomation is in Request Payload not in req.body
	
	/*
	var code = req.body.code;
	var input = req.body.input;
	var inputRadio = req.body.inputRadio;
	var lang = req.body.lang;
	*/

	var form = new formidable.IncomingForm(); 
	var postObj;
	//console.log("1", this == global);  //true
    form.parse(req, (err, fields, files) => {  //因为异步不阻塞的原因，所以下面的代码全部要提到该回调函数来
    	//console.log(JSON.stringify(fields));
    	//console.log("3",this === global);  //true

    	var lang = fields.lang,
    		input = fields.input,
    		inputRadio = fields.inputRadio,
    		code = fields.code;
    	//console.log("inputRadio:", inputRadio, "type:", typeof(inputRadio));console.log("input is empty:" , input === "");
    		
    	if (lang === "C") {
			var envData = {
				OS: "windows",
				cmd: "gcc"
			};
			//console.log(typeof(inputRadio));  //string!!!
			compiler.compileC(envData, code, (inputRadio === "true") && input, (data) => { // true && str -> str, false && str -> false 
				if (data.error) {
					res.send(data.error);
				} else {
					res.send(data.output);
				}
			});
		}
		if (lang === "C++") {
			var envData = {
				OS: "windows",
				cmd: "g++"
			};
			compiler.compileCPP(envData, code, (inputRadio === "true") && input, (data) => {
				if (data.error) {
					res.send(data.error);
				} else {
					res.send(data.output);
				}
			});
	
		}
		if (lang === "Java") {
			if (inputRadio === "true") {
				var envData = {
					OS: "windows"
				};
				console.log(code);
				compiler.compileJavaWithInput(envData, code, function(data) {
					res.send(data);
				});
			} else {
				var envData = {
					OS: "windows"
				};
				console.log(code);
				compiler.compileJavaWithInput(envData, code, input, function(data) {
					res.send(data.output);
				});
	
			}
	
		}
		if (lang === "Python") {
			var envData = { OS: "windows" };
			compiler.compilePython(envData, code, (inputRadio === "true") && input, (data) => {
				if(data.error) {
					res.send(data.error);
				}
				else{
					res.send(data.output);
				}
			});
	
		}
		if (lang == "Nodejs") {
			var envData = { OS: "windows" };
			compiler.compileNodejs(envData, code, (inputRadio === "true") && input, (data) => {
				if(data.error) {
					res.send(data.error);
				}
				else{
					res.send(data.output);
				}
			});
		}
    });


});

module.exports = router;