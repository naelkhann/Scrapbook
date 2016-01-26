var weatherApp = angular.module ('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		.when('/forecast', {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastController'
		})
});

weatherApp.controller("mainController", ['$scope', function($scope){

}]);

weatherApp.controller("forecastController", ['$scope', function($scope){

}]);

