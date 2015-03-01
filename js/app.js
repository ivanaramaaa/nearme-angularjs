var app = angular.module('NearMeApp', ['ngRoute', 'leaflet-directive']);
  
  app.config(function ($routeProvider)
  {
	$routeProvider
	  .when('/', {
	  	templateUrl: 'views/main.html',
	    controller: 'MainController'
	  })

	  .when('/about', {
	  	templateUrl: 'views/about.html',
	    controller: 'AboutController'
	  })

	  .otherwise({
	  	redirectTo: '/'
	  });
  });