var request = require('request');

module.exports = (function() {
	
	return{
		getapi: function(req,res){
			// console.log("get here");
			var page = Math.floor(Math.random()*3100);
			request("http://food2fork.com/api/search?key=20a0c3d035c0f8c722063145059cc1b7&page="+ page, function(err, response, body){
				
				res.json(response);
			})
		},
		get_ing: function(req,res){
			request("http://food2fork.com/api/get?key=20a0c3d035c0f8c722063145059cc1b7&rId="+ req.params.id, function(err,response,body){
				res.json(body);
			})
			// console.log(req.params.id);
		},
		search: function(req,res){
			
			request("http://food2fork.com/api/search?key=20a0c3d035c0f8c722063145059cc1b7&q="+req.params.food, function(err, response, body){
				
				res.json(response);
			})
		},
		random: function(req,res){
			var page = Math.floor(Math.random()*3100);
			var ingredient = Math.floor(Math.random()*31);
			request("http://food2fork.com/api/search?key=20a0c3d035c0f8c722063145059cc1b7&page="+ page, function(err, response, body){
				var result = JSON.parse(body);

				var id = result.recipes[ingredient].recipe_id;
				request("http://food2fork.com/api/get?key=20a0c3d035c0f8c722063145059cc1b7&rId="+ id, function(err,response,body){
					res.json(body);
				})
			})
		}
	}
})();