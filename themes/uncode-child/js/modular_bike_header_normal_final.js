(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"modular_bike_header_normal_final_atlas_", frames: [[1002,0,1004,594],[1002,596,1000,539],[0,967,1000,375],[0,0,1000,965]]}
];


// symbols:



(lib._2 = function() {
	this.spriteSheet = ss["modular_bike_header_normal_final_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._20180831_Ahooga_Lafabrique22a_0015resized = function() {
	this.spriteSheet = ss["modular_bike_header_normal_final_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._20180831_Ahooga_Lafabrique22a_0021resized = function() {
	this.spriteSheet = ss["modular_bike_header_normal_final_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AhoogaModular34Sleekresized = function() {
	this.spriteSheet = ss["modular_bike_header_normal_final_atlas_"];
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


(lib.Interpoler6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-124.8,-73.8,0.249,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,-73.8,249.6,147.6);


(lib.Interpoler5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-124.8,-73.8,0.249,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,-73.8,249.6,147.6);


(lib.Interpoler4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-124.8,-73.8,0.249,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,-73.8,249.6,147.6);


(lib.Interpoler3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-124.8,-73.8,0.249,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,-73.8,249.6,147.6);


// stage content:
(lib.modular_bike_header_normal_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.instance = new lib.Symbole1();
	this.instance.parent = this;
	this.instance.setTransform(185.7,-32.8,0.871,0.871,0,0,0,134.6,50.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({_off:false},0).to({regY:50.3,x:190.1,y:233.8},50,cjs.Ease.quintOut).wait(75).to({x:188.2,y:-180},62,cjs.Ease.quintInOut).to({_off:true},1).wait(49));

	// Calque_4
	this.instance_1 = new lib.Interpoler3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-232.2,340.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpoler4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.8,341.8);

	this.instance_3 = new lib.Interpoler5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(187.8,341.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Interpoler6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-131.2,341.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},63).to({state:[{t:this.instance_2}]},63).to({state:[{t:this.instance_3}]},177).to({state:[{t:this.instance_4}]},54).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({_off:true,x:187.8,y:341.8},63,cjs.Ease.quintOut).wait(232));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(303).to({_off:false},0).to({_off:true,x:-131.2},54,cjs.Ease.quintOut).wait(1));

	// Calque_1
	this.instance_5 = new lib.AhoogaModular34Sleekresized();
	this.instance_5.parent = this;
	this.instance_5.setTransform(193,217,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(358));

	// Calque_3
	this.instance_6 = new lib.Symbole2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1826.3,342.2,0.847,0.847,0,0,0,158.5,85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:158.3,x:766,y:342.5},63,cjs.Ease.quintInOut).wait(137).to({x:1825.9,y:342.2},57,cjs.Ease.quintInOut).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1043,642,1767.4,596.9);
// library properties:
lib.properties = {
	id: '2676CBBE339A481A9D4E094290D9C045',
	width: 1700,
	height: 850,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/modular_bike_header_normal_final_atlas_.png", id:"modular_bike_header_normal_final_atlas_"}
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