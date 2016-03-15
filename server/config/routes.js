var doge = require("./../controllers/controller.js");

module.exports = function(app){
	app.get('/getapi', function(req,res){
		
		doge.getapi(req,res);
	})
	app.get('/ing/:id', function(req,res){
		doge.get_ing(req,res);
	})



}
