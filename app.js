var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTE
weatherApp.config(function ($routeProvider) {
		
		$routeProvider

		.when('/', {
			templateUrl: 'pages/home.htm',
			controller: 'mainController'
		})

		.when('/forecast', {
			templateUrl: 'pages/forecast.htm',
			controller: 'forecastController'
		})

});


//CONTROLLERS

weatherApp.service('cityService', function(){
	this.city = "New York, NY";
})

weatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService){
	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	})
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
	$scope.city = cityService.city;

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&appid=44db6a862fba0b067b1930da0d769e98", {callback : "JSON_CALLBACK"}, {get: {method : "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({ q : $scope.city, cnt: 2 });

	$scope.convertToFarenheit = function(degreesK) {

			return Math.round((1.8 * (degreesK - 273)) + 32);
	}
}]);

