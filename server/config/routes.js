var doge = require("./../controllers/controller.js");

module.exports = function(app){
	app.get('/getapi', function(req,res){
		
		doge.getapi(req,res);
	})




}
