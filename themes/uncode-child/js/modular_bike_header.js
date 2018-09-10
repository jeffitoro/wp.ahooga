(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"modular_bike_header_atlas_", frames: [[1002,668,1000,539],[1002,0,1000,666],[0,967,1000,375],[0,0,1000,965]]}
];


// symbols:



(lib._20180831_Ahooga_Lafabrique22a_0015resized = function() {
	this.spriteSheet = ss["modular_bike_header_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._20180831_Ahooga_Lafabrique22a_0019resized = function() {
	this.spriteSheet = ss["modular_bike_header_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._20180831_Ahooga_Lafabrique22a_0021resized = function() {
	this.spriteSheet = ss["modular_bike_header_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AhoogaModular34Sleekresized = function() {
	this.spriteSheet = ss["modular_bike_header_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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
	this.instance = new lib._20180831_Ahooga_Lafabrique22a_0015resized();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.317,0.317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(0,0,316.9,170.8), null);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._20180831_Ahooga_Lafabrique22a_0021resized();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.269,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(0,0,269.1,100.9), null);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._20180831_Ahooga_Lafabrique22a_0019resized();
	this.instance.parent = this;
	this.instance.setTransform(-127.4,-84.9,0.255,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-84.9,255,169.8);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._20180831_Ahooga_Lafabrique22a_0019resized();
	this.instance.parent = this;
	this.instance.setTransform(-127.5,-84.9,0.255,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-84.9,255,169.8);


// stage content:
(lib.modular_bike_header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Symbole1();
	this.instance.parent = this;
	this.instance.setTransform(235.7,-39.9,0.871,0.871,0,0,0,134.5,50.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).to({regX:134.6,x:240.1,y:383.8},59,cjs.Ease.quintInOut).wait(88).to({x:238.2,y:-30},38,cjs.Ease.quintInOut).wait(1));

	// Calque_4
	this.instance_1 = new lib.Interpoler1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122.5,491.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpoler2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(225.4,491.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({_off:true,x:225.4},68,cjs.Ease.quintInOut).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},68,cjs.Ease.quintInOut).wait(108).to({startPosition:0},0).to({x:-120.5},38,cjs.Ease.quintInOut).to({_off:true},1).wait(39));

	// Calque_3
	this.instance_3 = new lib.Symbole2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1836.3,492.2,0.847,0.847,0,0,0,158.5,85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:158.3,x:816,y:492.5},63,cjs.Ease.quintInOut).wait(137).to({x:1839.9,y:492.2},38,cjs.Ease.quintInOut).to({_off:true},1).wait(78));

	// Calque_1
	this.instance_4 = new lib.AhoogaModular34Sleekresized();
	this.instance_4.parent = this;
	this.instance_4.setTransform(243,367,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1093,867,1727.4,596.9);
// library properties:
lib.properties = {
	id: '2676CBBE339A481A9D4E094290D9C045',
	width: 1700,
	height: 1000,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/modular_bike_header_atlas_.png", id:"modular_bike_header_atlas_"}
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
an.compositions['2676CBBE339A481A9D4E094290D9C045'] = {
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