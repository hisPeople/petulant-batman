var noiseApp = angular.module('noiseApp', []);

noiseApp.controller('NoiseCtrl', function($scope) {
	console.log('loaded controller')
	$scope.startBrownNoise = function() {
		console.log('brownNoise');
		playBrownNoise();
	}
	
	console.log($scope);
});
