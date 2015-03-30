var noiseApp = angular.module('noiseApp', ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.accentPalette('pink', {
				'default': '300'
			})
			.primaryPalette('brown', {
				'default': '500'
			})
			.warnPalette('grey', {
				'default': '200'
			});
});

noiseApp.controller('NoiseCtrl', function($scope) {
	$scope.startBrownNoise = function() {
		chrome.runtime.sendMessage({message: "brown"}, function(response) {
			console.log(response.farewell);
		});
	};

	$scope.startWhiteNoise = function() {
		chrome.runtime.sendMessage({message: "white"}, function(response) {
			console.log(response.farewell);
		});
	};

	$scope.startPinkNoise = function() {
		chrome.runtime.sendMessage({message: "pink"}, function(response) {
			console.log(response.farewell);
		});
	};

	$scope.stopNoise = function() {
		chrome.runtime.sendMessage({message: "stop"}, function(response) {
			console.log(response.farewell);
		});
	}
});

//noiseApp.config(function($mdThemingProvider) {
//	$mdThemingProvider.theme('default')
//		.primaryPalette('pink', {
//			'default': '400', // by default use shade 400 from the pink palette for primary intentions
//			'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
//			'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
//			'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
//		})
//		// If you specify less than all of the keys, it will inherit from the
//		// default shades
//		.accentPalette('brown', {
//			'default': '400' // use shade 200 for default, and keep all other shades the same
//		})
//		.warnPallette('white', {
//			'default': '300'
//		});
//});
