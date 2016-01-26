var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

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

weatherApp.service('cityService', function(){
	this.city = "New York, NY";

});

weatherApp.controller("mainController", ['$scope', 'cityService', function($scope, cityService){
	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;

	});

}]);

weatherApp.controller("forecastController", ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
	$scope.city = cityService.city;

	$scope.weatherAPI = $resource("api.openweathermap.org/data/2.5/forecast?", { callback: "JSON_CALLBACK" }, {get: {method: "JSONP"}});
	$scope.weatherData = $scope.weatherAPI.get({ q: $scope.city, cnt: 2});

}]);

