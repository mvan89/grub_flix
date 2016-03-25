Myapp.factory('apifactory', function($http){
    var functions = {};
    var recipes = [];
    var ingredients = [];
    var random = [];
    
    
    functions.getapi = function(callback){
        // console.log("test");
        $http.get('/getapi').success(function(response){
            
            recipes.push(JSON.parse(response.body));
            // console.log(JSON.parse(response.body));
            
            callback(recipes);
        })
    }
    functions.callback = function(callback){
        callback(recipes);
    }
    
    functions.get_ing = function(ing, callback){
        $http.get("/ing/"+ing).success(function(result){  
            var test = JSON.parse(result);
            //console.log(test.recipe.ingredients);
            ingredients = test.recipe.ingredients;
            callback(ingredients);
        })
    },
    functions.search = function(data, callback){
    	
    	$http.get('/search/'+data.search).success(function(response){
    		var test= JSON.parse(response.body);

    		if (test.count == 0){
    			
    			alert("No Recipes Found!");
    		}
    		else{
        		recipes = [];
        		recipes.push(JSON.parse(response.body));
        		callback(recipes);
        	}
    	})
    },
    functions.random = function(callback){

    	$http.get('/random').success(function(response){
    		
    		random = JSON.parse(response);
    		callback(random);
    		
    	})
    }


    return functions;
})