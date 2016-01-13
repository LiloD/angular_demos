(function(){
	'use strict';

	var app = angular.module('main', ['ui.bootstrap', 'ngAnimate', 'pickies/template/carousel.html'])

	app.controller('CarouselCtrl', ['$scope', function($scope){
		$scope.slidesInterval = 4000;

		var colors = ['e8846c', '0082c8', 'a2c5bf', 'e54b4b', '16528e'];

		$scope.slides = [];

		angular.forEach(colors, function(value, key){
			$scope.slides.push({color: '#' + value, id: key});
		})
		console.log($scope.slides);
	}]);
})()