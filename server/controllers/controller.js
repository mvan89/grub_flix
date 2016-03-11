var request = require('request');

module.exports = (function() {
	return{
		getapi: function(req,res){
			console.log("get here");
			request("http://food2fork.com/api/search?key=ebc794811e4a59fb16d79a31a6576cac", function(err, response, body){
				res.json(body);
			})
		}
	}
})();