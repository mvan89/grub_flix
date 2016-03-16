var doge = require("./../controllers/controller.js");

module.exports = function(app){
	app.get('/getapi', function(req,res){
		
		doge.getapi(req,res);
	})
	app.get('/ing/:id', function(req,res){
		doge.get_ing(req,res);
	})
	app.get('/search/:food', function(req,res){
		doge.search(req,res);
	})
	app.get('/random', function(req,res){
		doge.random(req,res);
	})


}
