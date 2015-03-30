
var audioContext = new AudioContext();

var initialVolume = 0.3;

var whiteNoise = audioContext.createWhiteNoise();
var whiteGain = audioContext.createGain();
whiteGain.gain.value = 0;
whiteNoise.connect(whiteGain);
whiteGain.connect(audioContext.destination);

var pinkNoise = audioContext.createPinkNoise();
var pinkGain = audioContext.createGain();
pinkGain.gain.value = 0;
pinkNoise.connect(pinkGain);
pinkGain.connect(audioContext.destination);

var brownNoise = audioContext.createBrownNoise();
var brownGain = audioContext.createGain();
brownGain.gain.value = 0;
brownNoise.connect(brownGain);
brownGain.connect(audioContext.destination);

var isBrownPlaying = false;
var isWhitePlaying = false;
var isPinkPlaying = false;

playBrownNoise = function() {
	stop();
	setVolume(brownGain, initialVolume);
};

stopBrownNoise = function() {
	setVolume(brownGain, 0);
};

playWhiteNoise = function() {
	stop();
	setVolume(whiteGain, initialVolume);
};

stopWhiteNoise = function() {
	setVolume(whiteGain, 0);
};

playPinkNoise = function() {
	stop();
	setVolume(pinkGain, initialVolume);
};

stopPinkNoise = function() {
	setVolume(pinkGain, 0);
};

stop = function() {
	stopBrownNoise();
	stopWhiteNoise();
	stopPinkNoise();
};

setVolume = function(g, val) {
	g.gain.value = val;
};

toggleBrown = function() {
	if (isBrownPlaying) {
		stopBrownNoise();
	} else {
		playBrownNoise();
	}
	isBrownPlaying = !isBrownPlaying;
};

togglePink = function() {
	if (isPinkPlaying) {
		stopPinkNoise();
	} else {
		playPinkNoise();
	}
	isPinkPlaying = !isPinkPlaying;
};

toggleWhite = function() {
	if (isWhitePlaying) {
		stopWhiteNoise();
	} else {
		playWhiteNoise();
	}
	isWhitePlaying = !isWhitePlaying;
};

toggle = function(color) {
	if (color == "brown") {
		toggleBrown();
	} else if (color == "white") {
		toggleWhite();
	} else if (color == "pink") {
		togglePink();
	}
};

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		toggle(request.message);
		//if (request.message == "stop") {
		//	stop();
		//} else if (request.message == "brown") {
		//	playBrownNoise();
		//} else if (request.message == "white") {
		//	playWhiteNoise();
		//} else if (request.message == "pink") {
		//	playPinkNoise();
		//}


		//playBrownNoise();
		//console.log(sender);
		//console.log('says ' + request.greeting);
		//console.log(sender.tab ?
		//"from a content script:" + sender.tab.url :
		//	"from the extension");
		//if (request.greeting == "hello") {
		//	console.log('hello from listener');
		//	sendResponse({farewell: "goodbye"});
		//}
	});