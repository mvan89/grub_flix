var Myapp = angular.module('Myapp', ['ngRoute', 'ui.bootstrap','ngAnimate']);
            
	Myapp.config(function($routeProvider, $locationProvider){
	    $routeProvider
	    .when('/' , {
	        templateUrl: 'static/partials/main.html'
	    })
	    .otherwise({
	        redirectTo: '/'
	    }); 
	    
	})