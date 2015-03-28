playBrownNoise = function() {
	console.log('playing brown noise...');
	context = new webkitAudioContext();
	brownNoise = context.createBrownNoise();
	brownGain = context.createGain();
	brownGain.gain.value = 0.2;
	brownNoise.connect(brownGain);
	brownGain.connect(context.destination);
}