(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"display_woman_atlas_", frames: [[0,1282,270,450],[0,0,1920,1280]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["display_woman_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fillebike_big1 = function() {
	this.spriteSheet = ss["display_woman_atlas_"];
	this.gotoAndStop(1);
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


(lib.Symbole4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole4, new cjs.Rectangle(0,0,206.3,343.8), null);


// stage content:
(lib.display_woman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// compteur
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AhcCDIAAgiIAiAAIAAAigAhcBdIAAgiIAiAAIAAAigAhcA3IAAgiIAiAAIAAAigAAVARIAAghIAiAAIAAAhgAgRARIAAghIAiAAIAAAhgAg3ARIAAghIAjAAIAAAhgAhcARIAAghIAiAAIAAAhgAhcgUIAAgiIAiAAIAAAigAhcg6IAAgiIAiAAIAAAigAA7hgIAAgiIAiAAIAAAigAAVhgIAAgiIAiAAIAAAigAgRhgIAAgiIAiAAIAAAigAg3hgIAAgiIAjAAIAAAigAhchgIAAgiIAiAAIAAAig");
	this.shape.setTransform(909.3,199.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhcCDIAAgiIAiAAIAAAigAhcBdIAAgiIAiAAIAAAigAhcA3IAAgiIAiAAIAAAigAAVARIAAghIAiAAIAAAhgAgQARIAAghIAhAAIAAAhgAg3ARIAAghIAjAAIAAAhgAhcARIAAghIAiAAIAAAhgAhcgUIAAgiIAiAAIAAAigAhcg6IAAgiIAiAAIAAAigAA6hgIAAgiIAjAAIAAAigAAVhgIAAgiIAiAAIAAAigAgQhgIAAgiIAhAAIAAAigAg3hgIAAgiIAjAAIAAAigAhchgIAAgiIAiAAIAAAig");
	this.shape_1.setTransform(887.1,199.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAUCDIAAgiIAjAAIAAAigAgRCDIAAgiIAiAAIAAAigAg2CDIAAgiIAiAAIAAAigAA6BdIAAgiIAjAAIAAAigAhcBdIAAgiIAiAAIAAAigAA6A3IAAgiIAjAAIAAAigAhcA3IAAgiIAiAAIAAAigAA6ARIAAghIAjAAIAAAhgAhcARIAAghIAiAAIAAAhgAA6gUIAAgiIAjAAIAAAigAhcgUIAAgiIAiAAIAAAigAA6g6IAAgiIAjAAIAAAigAhcg6IAAgiIAiAAIAAAigAAUhgIAAgiIAjAAIAAAigAgRhgIAAgiIAiAAIAAAigAg2hgIAAgiIAiAAIAAAig");
	this.shape_2.setTransform(864.9,199.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("Ag5ATIAAglIBzAAIAAAlg");
	this.shape_3.setTransform(887.1,198.1,10.02,11.689);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AAdC2IAAgvIAwAAIAAAvgAgXC2IAAgvIAvAAIAAAvgAhMC2IAAgvIAwAAIAAAvgAgXCBIAAgvIAvAAIAAAvgAgXBMIAAgvIAvAAIAAAvgAgXAYIAAgvIAvAAIAAAvgAgXgcIAAgwIAvAAIAAAwgAgXhRIAAgvIAvAAIAAAvgAhMhRIAAgvIAwAAIAAAvgAgXiGIAAgvIAvAAIAAAvg");
	this.shape_4.setTransform(820.2,194.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_5.setTransform(818.2,197.1,1.705,1.705);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("ABSC2IAAgvIAvAAIAAAvgAAdC2IAAgvIAvAAIAAAvgAgXC2IAAgvIAvAAIAAAvgAhMC2IAAgvIAwAAIAAAvgAiBC2IAAgvIAwAAIAAAvgAhMCBIAAgvIAwAAIAAAvgAgXBMIAAgvIAvAAIAAAvgAAdAYIAAgvIAvAAIAAAvgABSgcIAAgwIAvAAIAAAwgABShRIAAgvIAvAAIAAAvgAiBhRIAAgvIAwAAIAAAvgAAdiGIAAgvIAvAAIAAAvgAgXiGIAAgvIAvAAIAAAvgAhMiGIAAgvIAwAAIAAAvg");
	this.shape_6.setTransform(852.6,194.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_7.setTransform(818.2,197.1,1.705,1.705);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AAdC2IAAgvIAvAAIAAAvgAgXC2IAAgvIAvAAIAAAvgAhMC2IAAgvIAwAAIAAAvgABSCBIAAgvIAvAAIAAAvgAiBCBIAAgvIAwAAIAAAvgABSBMIAAgvIAvAAIAAAvgAAdAYIAAgvIAvAAIAAAvgAgXAYIAAgvIAvAAIAAAvgAhMAYIAAgvIAwAAIAAAvgAgXgcIAAgwIAvAAIAAAwgAAdhRIAAgvIAvAAIAAAvgABSiGIAAgvIAvAAIAAAvgAAdiGIAAgvIAvAAIAAAvgAgXiGIAAgvIAvAAIAAAvgAhMiGIAAgvIAwAAIAAAvgAiBiGIAAgvIAwAAIAAAvg");
	this.shape_8.setTransform(890.2,194.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_9.setTransform(818.2,197.1,1.705,1.705);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AAdC2IAAgvIAwAAIAAAvgAAdCBIAAgvIAwAAIAAAvgABSBMIAAgvIAwAAIAAAvgAAdBMIAAgvIAwAAIAAAvgAgXBMIAAgvIAvAAIAAAvgAhMBMIAAgvIAwAAIAAAvgAiABMIAAgvIAvAAIAAAvgAAdAYIAAgvIAwAAIAAAvgAiAAYIAAgvIAvAAIAAAvgAAdgcIAAgwIAwAAIAAAwgAhMgcIAAgwIAwAAIAAAwgAAdhRIAAgvIAwAAIAAAvgAgXhRIAAgvIAvAAIAAAvgAAdiGIAAgvIAwAAIAAAvg");
	this.shape_10.setTransform(925.5,194.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_11.setTransform(818.2,197.1,1.705,1.705);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AAdC2IAAgvIAwAAIAAAvgAgXC2IAAgvIAvAAIAAAvgAhMC2IAAgvIAwAAIAAAvgABSCBIAAgvIAwAAIAAAvgAiBCBIAAgvIAwAAIAAAvgABSBMIAAgvIAwAAIAAAvgABSAYIAAgvIAwAAIAAAvgAAdgcIAAgwIAwAAIAAAwgAgXgcIAAgwIAvAAIAAAwgAhMgcIAAgwIAwAAIAAAwgAiBgcIAAgwIAwAAIAAAwgAiBhRIAAgvIAwAAIAAAvgABSiGIAAgvIAwAAIAAAvgAAdiGIAAgvIAwAAIAAAvgAgXiGIAAgvIAvAAIAAAvgAhMiGIAAgvIAwAAIAAAvgAiBiGIAAgvIAwAAIAAAvg");
	this.shape_12.setTransform(960.3,194.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_13.setTransform(818.2,197.1,1.705,1.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{x:818.2}},{t:this.shape_4}]},41).to({state:[{t:this.shape_7,p:{x:818.2}},{t:this.shape_4},{t:this.shape_5,p:{x:853.9}},{t:this.shape_6}]},57).to({state:[{t:this.shape_9,p:{x:818.2}},{t:this.shape_4},{t:this.shape_7,p:{x:853.9}},{t:this.shape_6},{t:this.shape_5,p:{x:889.7}},{t:this.shape_8}]},18).to({state:[{t:this.shape_11,p:{x:818.2}},{t:this.shape_4},{t:this.shape_9,p:{x:853.9}},{t:this.shape_6},{t:this.shape_7,p:{x:889.7}},{t:this.shape_8},{t:this.shape_5,p:{x:925}},{t:this.shape_10}]},13).to({state:[{t:this.shape_13},{t:this.shape_4},{t:this.shape_11,p:{x:853.9}},{t:this.shape_6},{t:this.shape_9,p:{x:889.7}},{t:this.shape_8},{t:this.shape_7,p:{x:925}},{t:this.shape_10},{t:this.shape_5,p:{x:959.9}},{t:this.shape_12}]},10).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},23).wait(57));

	// Batterie
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_14.setTransform(888.1,516.7,9.677,9.677);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.5).p("AArATIhVAAIAAglIBVAAg");
	this.shape_15.setTransform(841.7,516.7,9.677,9.677);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_16.setTransform(869,516.2,9.677,9.677);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_17.setTransform(854.7,516.2,9.677,9.677);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAKAAIAAAVg");
	this.shape_18.setTransform(840.5,516.2,9.677,9.677);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_19.setTransform(826.4,516.2,9.677,9.677);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_20.setTransform(812.4,516.2,9.677,9.677);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19,p:{x:826.4}},{t:this.shape_18},{t:this.shape_17,p:{x:854.7}},{t:this.shape_16,p:{x:869}},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_19,p:{x:812.4}},{t:this.shape_17,p:{x:826.4}},{t:this.shape_18},{t:this.shape_16,p:{x:854.7}},{t:this.shape_15},{t:this.shape_14}]},126).wait(93));

	// km/h
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtBkIAAgaIAaAAIAAAagAhGBkIAAgaIAaAAIAAAagAAtBHIAAgaIAaAAIAAAagAhGBHIAAgaIAaAAIAAAagAAtAqIAAgaIAaAAIAAAagAhGAqIAAgaIAaAAIAAAagAAtANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhGANIAAgZIAaAAIAAAZgAAtgPIAAgaIAaAAIAAAagAgMgPIAAgaIAZAAIAAAagAhGgPIAAgaIAaAAIAAAagAAtgsIAAgaIAaAAIAAAagAAQgsIAAgaIAaAAIAAAagAgpgsIAAgaIAaAAIAAAagAhGgsIAAgaIAaAAIAAAagAAthJIAAgaIAaAAIAAAagAhGhJIAAgaIAaAAIAAAag");
	this.shape_21.setTransform(956.4,449.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAtBkIAAgaIAaAAIAAAagAhGBkIAAgaIAaAAIAAAagAAQBHIAAgaIAaAAIAAAagAhGBHIAAgaIAaAAIAAAagAgMAqIAAgaIAZAAIAAAagAhGAqIAAgaIAaAAIAAAagAgpANIAAgZIAaAAIAAAZgAhGANIAAgZIAaAAIAAAZgAgMgPIAAgaIAZAAIAAAagAhGgPIAAgaIAaAAIAAAagAAQgsIAAgaIAaAAIAAAagAhGgsIAAgaIAaAAIAAAagAAthJIAAgaIAaAAIAAAagAhGhJIAAgaIAaAAIAAAag");
	this.shape_22.setTransform(939.4,449.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAtBkIAAgaIAaAAIAAAagAhGBkIAAgaIAaAAIAAAagAAtBHIAAgaIAaAAIAAAagAhGBHIAAgaIAaAAIAAAagAAtAqIAAgaIAaAAIAAAagAhGAqIAAgaIAaAAIAAAagAAtANIAAgZIAaAAIAAAZgAAQANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAgpANIAAgZIAaAAIAAAZgAhGANIAAgZIAaAAIAAAZgAAtgPIAAgaIAaAAIAAAagAhGgPIAAgaIAaAAIAAAagAAtgsIAAgaIAaAAIAAAagAhGgsIAAgaIAaAAIAAAagAAthJIAAgaIAaAAIAAAagAhGhJIAAgaIAaAAIAAAag");
	this.shape_23.setTransform(957.3,385.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpBkIAAgaIAaAAIAAAagAgpBHIAAgaIAaAAIAAAagAgMAqIAAgaIAZAAIAAAagAgMANIAAgZIAZAAIAAAZgAgMgPIAAgaIAZAAIAAAagAAQgsIAAgaIAaAAIAAAagAAQhJIAAgaIAaAAIAAAag");
	this.shape_24.setTransform(943.2,385.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAtBkIAAgaIAaAAIAAAagAhGBkIAAgaIAaAAIAAAagAAtBHIAAgaIAaAAIAAAagAhGBHIAAgaIAaAAIAAAagAAtAqIAAgaIAaAAIAAAagAhGAqIAAgaIAaAAIAAAagAAtANIAAgZIAaAAIAAAZgAgMANIAAgZIAZAAIAAAZgAhGANIAAgZIAaAAIAAAZgAAtgPIAAgaIAaAAIAAAagAgMgPIAAgaIAZAAIAAAagAhGgPIAAgaIAaAAIAAAagAAtgsIAAgaIAaAAIAAAagAAQgsIAAgaIAaAAIAAAagAgpgsIAAgaIAaAAIAAAagAhGgsIAAgaIAaAAIAAAagAAthJIAAgaIAaAAIAAAagAhGhJIAAgaIAaAAIAAAag");
	this.shape_25.setTransform(929.2,385.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAtBkIAAgaIAaAAIAAAagAhGBkIAAgaIAaAAIAAAagAAQBHIAAgaIAaAAIAAAagAhGBHIAAgaIAaAAIAAAagAgMAqIAAgaIAZAAIAAAagAhGAqIAAgaIAaAAIAAAagAgpANIAAgZIAaAAIAAAZgAhGANIAAgZIAaAAIAAAZgAgMgPIAAgaIAZAAIAAAagAhGgPIAAgaIAaAAIAAAagAAQgsIAAgaIAaAAIAAAagAhGgsIAAgaIAaAAIAAAagAAthJIAAgaIAaAAIAAAagAhGhJIAAgaIAaAAIAAAag");
	this.shape_26.setTransform(912.3,385.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgeDqIAAg9IA8AAIAAA9gAhhDqIAAg9IA9AAIAAA9gAgeCmIAAg9IA8AAIAAA9gAgeBiIAAg9IA8AAIAAA9gAgeAfIAAg9IA8AAIAAA9gAgegkIAAg9IA8AAIAAA9gAgehoIAAg9IA8AAIAAA9gAhhhoIAAg9IA9AAIAAA9gAgeisIAAg9IA8AAIAAA9g");
	this.shape_27.setTransform(899.2,436.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA7AAIAAA9gAhiDqIAAg9IA+AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gAAlAfIAAg9IA9AAIAAA9gAgdAfIAAg9IA7AAIAAA9gAhiAfIAAg9IA+AAIAAA9gAgdgkIAAg9IA7AAIAAA9gAAlhoIAAg9IA9AAIAAA9gABpisIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA7AAIAAA9gAhiisIAAg9IA+AAIAAA9gAilisIAAg9IA9AAIAAA9g");
	this.shape_28.setTransform(865.9,436.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgABWGCIAAiNICOAAIAACNgAD0DkIAAiNICOAAIAACNgABWDkIAAiNICOAAIAACNgAhGDkIAAiNICNAAIAACNgAjkDkIAAiNICOAAIAACNgAmBDkIAAiNICNAAIAACNgABWBHIAAiNICOAAIAACNgAmBBHIAAiNICNAAIAACNgABWhWIAAiOICOAAIAACOgAjkhWIAAiOICOAAIAACOgABWjzIAAiOICOAAIAACOgAhGjzIAAiOICNAAIAACOgABWmRIAAiOICOAAIAACOg");
	this.shape_29.setTransform(934.4,306.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AD0IgIAAiNICOAAIAACNgABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAmBIgIAAiNICNAAIAACNgAjkGCIAAiNICOAAIAACNgAhGDkIAAiNICNAAIAACNgABWBHIAAiNICOAAIAACNgAD0hWIAAiOICOAAIAACOgAD0jzIAAiOICOAAIAACOgAmBjzIAAiOICNAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOg");
	this.shape_30.setTransform(840,306.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA8AAIAAA9gAhiDqIAAg9IA9AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gAilBiIAAg9IA9AAIAAA9gAAlAfIAAg9IA9AAIAAA9gAgdAfIAAg9IA8AAIAAA9gAhiAfIAAg9IA9AAIAAA9gABpgkIAAg9IA9AAIAAA9gAilgkIAAg9IA9AAIAAA9gABphoIAAg9IA9AAIAAA9gAilhoIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA8AAIAAA9gAhiisIAAg9IA9AAIAAA9g");
	this.shape_31.setTransform(906,436.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAD0GCIAAiNICOAAIAACNgAmBGCIAAiNICNAAIAACNgAD0DkIAAiNICOAAIAACNgAD0BHIAAiNICOAAIAACNgABWhWIAAiOICOAAIAACOgAhGhWIAAiOICNAAIAACOgAjkhWIAAiOICOAAIAACOgAmBhWIAAiOICNAAIAACOgAmBjzIAAiOICNAAIAACOgAD0mRIAAiOICOAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOgAmBmRIAAiOICNAAIAACOg");
	this.shape_32.setTransform(934.4,306.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABpDqIAAg9IA9AAIAAA9gAAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA8AAIAAA9gAhiDqIAAg9IA9AAIAAA9gAilDqIAAg9IA9AAIAAA9gAhiCmIAAg9IA9AAIAAA9gAgdBiIAAg9IA8AAIAAA9gAAlAfIAAg9IA9AAIAAA9gABpgkIAAg9IA9AAIAAA9gABphoIAAg9IA9AAIAAA9gAilhoIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA8AAIAAA9gAhiisIAAg9IA9AAIAAA9g");
	this.shape_33.setTransform(906,436.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAAlCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gAAlBiIAAg9IA9AAIAAA9gAgdBiIAAg9IA7AAIAAA9gAhiBiIAAg9IA+AAIAAA9gAilBiIAAg9IA9AAIAAA9gAAlAfIAAg9IA9AAIAAA9gAilAfIAAg9IA9AAIAAA9gAAlgkIAAg9IA9AAIAAA9gAhigkIAAg9IA+AAIAAA9gAAlhoIAAg9IA9AAIAAA9gAgdhoIAAg9IA7AAIAAA9gAAlisIAAg9IA9AAIAAA9g");
	this.shape_34.setTransform(865.9,436.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA8AAIAAA9gAhiDqIAAg9IA9AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gAilBiIAAg9IA9AAIAAA9gAAlAfIAAg9IA9AAIAAA9gAgdAfIAAg9IA8AAIAAA9gAhiAfIAAg9IA9AAIAAA9gAilAfIAAg9IA9AAIAAA9gAilgkIAAg9IA9AAIAAA9gAhihoIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA8AAIAAA9g");
	this.shape_35.setTransform(906,436.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA7AAIAAA9gAhiDqIAAg9IA+AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gABpAfIAAg9IA9AAIAAA9gAAlgkIAAg9IA9AAIAAA9gAgdgkIAAg9IA7AAIAAA9gAhigkIAAg9IA+AAIAAA9gAilgkIAAg9IA9AAIAAA9gAilhoIAAg9IA9AAIAAA9gABpisIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA7AAIAAA9gAhiisIAAg9IA+AAIAAA9gAilisIAAg9IA9AAIAAA9g");
	this.shape_36.setTransform(865.9,436.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAD0GCIAAiNICOAAIAACNgAmBGCIAAiNICNAAIAACNgAD0DkIAAiNICOAAIAACNgAmBDkIAAiNICNAAIAACNgABWBHIAAiNICOAAIAACNgAhGBHIAAiNICNAAIAACNgAjkBHIAAiNICOAAIAACNgAmBBHIAAiNICNAAIAACNgAmBhWIAAiOICNAAIAACOgAjkjzIAAiOICOAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOg");
	this.shape_37.setTransform(934.4,306.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhGIgIAAiNICNAAIAACNgAhGGCIAAiNICNAAIAACNgAhGDkIAAiNICNAAIAACNgAhGBHIAAiNICNAAIAACNgABWhWIAAiOICOAAIAACOgAD0jzIAAiOICOAAIAACOgAD0mRIAAiOICOAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOgAmBmRIAAiOICNAAIAACOg");
	this.shape_38.setTransform(934.4,306.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA8AAIAAA9gAhiDqIAAg9IA9AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gABpAfIAAg9IA9AAIAAA9gAAlAfIAAg9IA9AAIAAA9gAgdAfIAAg9IA8AAIAAA9gAhiAfIAAg9IA9AAIAAA9gABpgkIAAg9IA9AAIAAA9gAilgkIAAg9IA9AAIAAA9gABphoIAAg9IA9AAIAAA9gAilhoIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA8AAIAAA9gAhiisIAAg9IA9AAIAAA9g");
	this.shape_39.setTransform(906,436.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAD0GCIAAiNICOAAIAACNgAmBGCIAAiNICNAAIAACNgAD0DkIAAiNICOAAIAACNgAmBDkIAAiNICNAAIAACNgABWBHIAAiNICOAAIAACNgAhGBHIAAiNICNAAIAACNgAjkBHIAAiNICOAAIAACNgAD0hWIAAiOICOAAIAACOgAmBhWIAAiOICNAAIAACOgAD0jzIAAiOICOAAIAACOgAmBjzIAAiOICNAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOg");
	this.shape_40.setTransform(934.4,306.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAD0GCIAAiNICOAAIAACNgAmBGCIAAiNICNAAIAACNgAD0DkIAAiNICOAAIAACNgAD0BHIAAiNICOAAIAACNgABWBHIAAiNICOAAIAACNgAhGBHIAAiNICNAAIAACNgAjkBHIAAiNICOAAIAACNgAD0hWIAAiOICOAAIAACOgAmBhWIAAiOICNAAIAACOgAD0jzIAAiOICOAAIAACOgAmBjzIAAiOICNAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOg");
	this.shape_41.setTransform(934.4,306.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA8AAIAAA9gAhiDqIAAg9IA9AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gAhiBiIAAg9IA9AAIAAA9gAilBiIAAg9IA9AAIAAA9gABpAfIAAg9IA9AAIAAA9gAgdAfIAAg9IA8AAIAAA9gAilAfIAAg9IA9AAIAAA9gABpgkIAAg9IA9AAIAAA9gAAlgkIAAg9IA9AAIAAA9gAilgkIAAg9IA9AAIAAA9gABphoIAAg9IA9AAIAAA9gAilhoIAAg9IA9AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA8AAIAAA9gAhiisIAAg9IA9AAIAAA9g");
	this.shape_42.setTransform(906,436.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAlDqIAAg9IA9AAIAAA9gAgdDqIAAg9IA7AAIAAA9gAhiDqIAAg9IA+AAIAAA9gABpCmIAAg9IA9AAIAAA9gAilCmIAAg9IA9AAIAAA9gABpBiIAAg9IA9AAIAAA9gAilBiIAAg9IA9AAIAAA9gAAlAfIAAg9IA9AAIAAA9gAgdAfIAAg9IA7AAIAAA9gAhiAfIAAg9IA+AAIAAA9gAilAfIAAg9IA9AAIAAA9gAilgkIAAg9IA9AAIAAA9gAhihoIAAg9IA+AAIAAA9gAAlisIAAg9IA9AAIAAA9gAgdisIAAg9IA7AAIAAA9g");
	this.shape_43.setTransform(865.9,436.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAD0GCIAAiNICOAAIAACNgAmBGCIAAiNICNAAIAACNgAD0DkIAAiNICOAAIAACNgAjkDkIAAiNICOAAIAACNgAmBDkIAAiNICNAAIAACNgAD0BHIAAiNICOAAIAACNgAhGBHIAAiNICNAAIAACNgAmBBHIAAiNICNAAIAACNgAD0hWIAAiOICOAAIAACOgABWhWIAAiOICOAAIAACOgAmBhWIAAiOICNAAIAACOgAD0jzIAAiOICOAAIAACOgAmBjzIAAiOICNAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOg");
	this.shape_44.setTransform(934.4,306.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ABWIgIAAiNICOAAIAACNgAhGIgIAAiNICNAAIAACNgAjkIgIAAiNICOAAIAACNgAD0GCIAAiNICOAAIAACNgAmBGCIAAiNICNAAIAACNgAD0DkIAAiNICOAAIAACNgABWBHIAAiNICOAAIAACNgAhGBHIAAiNICNAAIAACNgAjkBHIAAiNICOAAIAACNgAhGhWIAAiOICNAAIAACOgABWjzIAAiOICOAAIAACOgAD0mRIAAiOICOAAIAACOgABWmRIAAiOICOAAIAACOgAhGmRIAAiOICNAAIAACOgAjkmRIAAiOICOAAIAACOgAmBmRIAAiOICNAAIAACOg");
	this.shape_45.setTransform(840,306.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[{t:this.shape_30},{t:this.shape_32},{t:this.shape_28},{t:this.shape_31},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},30).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_34},{t:this.shape_33},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},29).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_34},{t:this.shape_35},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},39).to({state:[{t:this.shape_30},{t:this.shape_32},{t:this.shape_36},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},22).to({state:[{t:this.shape_30},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},41).to({state:[{t:this.shape_30},{t:this.shape_38},{t:this.shape_36},{t:this.shape_31},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},9).to({state:[{t:this.shape_30},{t:this.shape_40},{t:this.shape_36},{t:this.shape_39},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},20).to({state:[{t:this.shape_30},{t:this.shape_41},{t:this.shape_36},{t:this.shape_39},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},5).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},8).wait(16));

	// cadre
	this.instance = new lib.Symbole4();
	this.instance.parent = this;
	this.instance.setTransform(888.2,366.8,1.705,1.705,0,0,0,103.4,172.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",11,11,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219));

	// fond noir
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F6F6F6").s().p("AHXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAGjAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAFuAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAE6APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAEHAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgADSAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgACdAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgABoAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAA0APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAAAAPQgFAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAFAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAgzAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAhoAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAicAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAjRAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAkFAPQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAk4APQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAltAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAmiAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAnXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAg");
	this.shape_46.setTransform(887.3,239.6,1.705,1.705);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F6F6F6").s().p("AHXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAGjAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAFuAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAE6APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAEHAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgADSAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgACdAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgABoAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAA0APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAAAAPQgFAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAFAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAgzAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAhoAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAicAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAjRAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAkFAPQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAk4APQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAltAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAmiAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAnXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAg");
	this.shape_47.setTransform(880.8,473.2,1.705,1.705);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0E0F0F").s().p("AqaVaMAAAgqzIU1AAMAAAAqzg");
	this.shape_48.setTransform(884.9,367.6,1.705,1.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).wait(219));

	// Calque_2
	this.instance_1 = new lib.fillebike_big1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108,-40,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(492,360,1379,919.4);
// library properties:
lib.properties = {
	id: '8674D928C4A34C019F299DAE84B456CD',
	width: 1200,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/display_woman_atlas_.png", id:"display_woman_atlas_"}
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
an.compositions['8674D928C4A34C019F299DAE84B456CD'] = {
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