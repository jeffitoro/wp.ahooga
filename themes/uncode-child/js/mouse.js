(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.mouse_1 = function() {
	this.initialize(img.mouse_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,255);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkBkQgqgpAAg7QAAg6AqgqQAqgqA6AAQA7AAApAqQArAqAAA6QAAA7grApQgpArg7AAQg6AAgqgrg");
	this.shape.setTransform(14.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(0,0,28.5,28.5), null);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Symbole2();
	this.instance.parent = this;
	this.instance.setTransform(132.3,2.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7,alpha:0.963},0).wait(1).to({y:15,alpha:0.925},0).wait(1).to({y:21.4,alpha:0.888},0).wait(1).to({y:27.8,alpha:0.85},0).wait(1).to({y:34.2,alpha:0.813},0).wait(1).to({y:40.6,alpha:0.776},0).wait(1).to({y:47,alpha:0.738},0).wait(1).to({y:53.4,alpha:0.701},0).wait(1).to({y:59.8,alpha:0.663},0).wait(1).to({y:66.2,alpha:0.626},0).wait(1).to({y:72.6,alpha:0.589},0).wait(1).to({y:78.9,alpha:0.551},0).wait(1).to({y:85.3,alpha:0.514},0).wait(1).to({y:91.7,alpha:0.477},0).wait(1).to({y:98.1,alpha:0.439},0).wait(1).to({y:104.5,alpha:0.402},0).wait(1).to({y:110.9,alpha:0.364},0).wait(1).to({y:117.3,alpha:0.327},0).wait(1).to({y:123.7,alpha:0.29},0).wait(1).to({y:130.1,alpha:0.252},0).wait(1).to({y:136.5,alpha:0.215},0).wait(1).to({y:142.9,alpha:0.177},0).wait(1).to({y:149.3,alpha:0.14},0).wait(1));

	// Calque_1
	this.instance_1 = new lib.mouse_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,-50,160,255);


// stage content:
(lib.mouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Symbole1();
	this.instance.parent = this;
	this.instance.setTransform(41.1,34.1,0.252,0.252,0,0,0,195,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,37.5,40.4,64.3);
// library properties:
lib.properties = {
	id: '39C91F63552E4CBD9E3808EC57328F78',
	width: 50,
	height: 70,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mouse_1.png", id:"mouse_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['39C91F63552E4CBD9E3808EC57328F78'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;