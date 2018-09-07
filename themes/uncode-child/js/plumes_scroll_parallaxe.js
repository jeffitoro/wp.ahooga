(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"plumes_scroll_parallaxe_atlas_", frames: [[1002,3144,512,512],[0,0,1600,1600],[1002,1602,512,512],[0,1602,1000,1000],[1002,2116,512,512],[0,2604,1000,1000],[1002,2630,512,512]]}
];


// symbols:



(lib.feather196 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.feather1 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.feather1b96 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.feather2blurred = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.feather2 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.feather2bblurred = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.feather2b = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_atlas_"];
	this.gotoAndStop(6);
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


(lib.Symbole9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather196();
	this.instance.parent = this;
	this.instance.setTransform(0,65,1,1,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole9, new cjs.Rectangle(0,0,572.8,572.8), null);


(lib.Symbole8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.206,0.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole8, new cjs.Rectangle(0,0,329.9,329.9), null);


(lib.Symbole7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather2b();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.774,0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole7, new cjs.Rectangle(0,0,396.2,396.2), null);


(lib.Symbole6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather1b96();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.582,0.582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole6, new cjs.Rectangle(0,0,298,298), null);


(lib.Symbole5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole5, new cjs.Rectangle(0,0,433.4,433.4), null);


(lib.Symbole4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather2blurred();
	this.instance.parent = this;
	this.instance.setTransform(659.2,0,1,1,41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole4, new cjs.Rectangle(0,0,1411.2,1411.2), null);


(lib.Symbole3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather2bblurred();
	this.instance.parent = this;
	this.instance.setTransform(0,707.1,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole3, new cjs.Rectangle(0,0,1414.2,1414.2), null);


(lib.plumes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// Calque_8
	this.instance = new lib.Symbole9();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,408.4,1,1,0,0,0,286.4,286.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.8,x:-9.9,y:415.2},0).wait(1).to({rotation:1.7,x:-13.3,y:422.1},0).wait(1).to({rotation:2.5,x:-16.8,y:429},0).wait(1).to({rotation:3.3,x:-20.3,y:435.9},0).wait(1).to({rotation:4.2,x:-23.8,y:442.8},0).wait(1).to({rotation:5,x:-27.3,y:449.7},0).wait(1).to({rotation:5.9,x:-30.8,y:456.6},0).wait(1).to({rotation:6.7,x:-34.3,y:463.5},0).wait(1).to({rotation:7.5,x:-37.7,y:470.4},0).wait(1).to({rotation:8.4,x:-41.2,y:477.2},0).wait(1).to({rotation:9.2,x:-44.8,y:484.1},0).wait(1).to({rotation:10,x:-48.2,y:491},0).wait(1).to({rotation:10.9,x:-51.7,y:497.9},0).wait(1).to({rotation:11.7,x:-55.1,y:504.8},0).wait(1).to({rotation:12.6,x:-58.7,y:511.7},0).wait(1).to({rotation:13.4,x:-62.2,y:518.6},0).wait(1).to({rotation:14.2,x:-65.7,y:525.4},0).wait(1).to({rotation:15.1,x:-69.1,y:532.3},0).wait(1).to({rotation:15.9,x:-72.6,y:539.3},0).wait(1).to({rotation:16.7,x:-76.1,y:546.1},0).wait(1).to({rotation:17.6,x:-79.6,y:553},0).wait(1).to({rotation:18.4,x:-83.1,y:559.9},0).wait(1).to({rotation:19.3,x:-86.6,y:566.8},0).wait(1).to({rotation:20.1,x:-90.1,y:573.7},0).wait(1).to({rotation:20.9,x:-93.6,y:580.6},0).wait(1).to({rotation:21.8,x:-97,y:587.5},0).wait(1).to({rotation:22.6,x:-100.5,y:594.3},0).wait(1).to({rotation:23.4,x:-104,y:601.2},0).wait(1).to({rotation:24.3,x:-107.5,y:608.1},0).wait(1).to({rotation:25.1,x:-111,y:615},0).wait(1).to({rotation:26,x:-114.5,y:621.9},0).wait(1).to({rotation:26.8,x:-118,y:628.8},0).wait(1).to({rotation:27.6,x:-121.5,y:635.7},0).wait(1).to({rotation:28.5,x:-125,y:642.6},0).wait(1).to({rotation:29.3,x:-128.5,y:649.4},0).wait(1).to({rotation:30.1,x:-131.9,y:656.4},0).wait(1).to({rotation:31,x:-135.4,y:663.2},0).wait(1).to({rotation:31.8,x:-138.9,y:670.1},0).wait(1).to({rotation:32.6,x:-142.4,y:677},0).wait(1).to({rotation:33.5,x:-145.9,y:683.9},0).wait(1).to({rotation:34.3,x:-149.4,y:690.8},0).wait(1).to({rotation:35.2,x:-152.8,y:697.7},0).wait(1).to({rotation:36,x:-156.4,y:704.5},0).wait(1).to({rotation:36.8,x:-159.8,y:711.5},0).wait(1).to({rotation:37.7,x:-163.3,y:718.3},0).wait(1).to({rotation:38.5,x:-166.8,y:725.2},0).wait(1).to({rotation:39.3,x:-170.3,y:732.1},0).wait(1).to({rotation:40.2,x:-173.8,y:739},0).wait(1).to({rotation:41,x:-177.3,y:745.9},0).wait(1).to({rotation:41.9,x:-180.8,y:752.8},0).wait(1).to({rotation:42.7,x:-184.3,y:759.7},0).wait(1).to({rotation:43.5,x:-187.7,y:766.6},0).wait(1).to({rotation:44.4,x:-191.2,y:773.4},0).wait(1).to({rotation:45.2,x:-194.7,y:780.4},0).wait(1).to({rotation:46,x:-198.2,y:787.2},0).wait(1).to({rotation:46.9,x:-201.7,y:794.1},0).wait(1).to({rotation:47.7,x:-205.2,y:801},0).wait(1).to({rotation:48.6,x:-208.7,y:807.9},0).wait(1).to({rotation:49.4,x:-212.2,y:814.7},0).wait(1).to({rotation:50.2,x:-215.7,y:821.6},0).wait(1).to({rotation:51.1,x:-219.2,y:828.6},0).wait(1).to({rotation:51.9,x:-222.7,y:835.5},0).wait(1).to({rotation:52.7,x:-226.1,y:842.3},0).wait(1).to({rotation:53.6,x:-229.6,y:849.2},0).wait(1).to({rotation:54.4,x:-233.1,y:856.1},0).wait(1).to({rotation:55.3,x:-236.6,y:863},0).wait(1).to({rotation:56.1,x:-240.1,y:869.9},0).wait(1).to({rotation:56.9,x:-243.6,y:876.8},0).wait(1).to({rotation:57.8,x:-247.1,y:883.6},0).wait(1).to({rotation:58.6,x:-250.6,y:890.5},0).wait(1).to({rotation:59.4,x:-254,y:897.5},0).wait(1));

	// Calque_7
	this.instance_1 = new lib.Symbole8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(198.2,335.2,0.734,0.734,0,0,0,165.1,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:164.9,regY:164.9,scaleX:0.74,scaleY:0.74,x:200.1,y:334},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:202.1,y:332.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:204.1,y:331.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:206.2,y:330.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:208.2,y:329.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:210.2,y:328.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:212.3,y:327.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:214.3,y:326.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:216.3,y:325},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:218.3,y:323.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:220.4,y:322.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:222.4,y:321.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:224.5,y:320.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:226.5,y:319.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-0.1,x:228.6,y:318.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:230.6,y:317.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:232.6,y:315.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:234.7,y:314.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:236.7,y:313.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:238.8,y:312.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:240.8,y:311.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:242.8,y:310.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:244.8,y:309.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:246.9,y:308.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:248.9,y:307},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:250.9,y:305.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:253,y:304.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:255,y:303.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:257,y:302.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:259.1,y:301.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:261.1,y:300.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:263.2,y:299.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:265.2,y:298},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:267.3,y:296.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:269.3,y:295.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:271.3,y:294.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:273.4,y:293.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:275.4,y:292.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:277.4,y:291.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:279.5,y:290.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:281.5,y:289},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.6,x:283.1,y:283.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.1,x:284.7,y:278.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-1.6,x:286.1,y:273.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.2,x:287.7,y:268.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.7,x:289.3,y:263.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.2,x:290.8,y:258.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.7,x:292.4,y:253.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.2,x:294,y:248.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.7,x:295.5,y:243.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.2,x:297.1,y:238.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.7,x:298.6,y:233.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-6.2,x:300.2,y:228.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.7,x:301.8,y:223.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.2,x:303.3,y:218},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-7.7,x:304.9,y:213},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.2,x:306.4,y:207.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.7,x:308,y:202.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.2,x:309.5,y:197.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.7,x:311.1,y:192.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.2,x:312.7,y:187.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.7,x:314.2,y:182.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-11.2,x:315.8,y:177.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.7,x:317.4,y:172.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-12.2,x:318.9,y:167.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-12.7,x:320.5,y:162.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.2,x:322.1,y:157.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-13.7,x:323.6,y:152.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.2,x:325.1,y:147.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.7,x:326.7,y:142},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-15.2,x:328.3,y:136.9},0).wait(1));

	// Calque_6
	this.instance_2 = new lib.Symbole7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-378.9,812.3,1,1,0,0,0,198.1,198.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-0.6,x:-375.8,y:816.1},0).wait(1).to({rotation:-1.1,x:-372.7,y:819.8},0).wait(1).to({rotation:-1.7,x:-369.7,y:823.7},0).wait(1).to({rotation:-2.2,x:-366.6,y:827.4},0).wait(1).to({rotation:-2.8,x:-363.5,y:831.3},0).wait(1).to({rotation:-3.3,x:-360.5,y:835.1},0).wait(1).to({rotation:-3.9,x:-357.4,y:838.9},0).wait(1).to({rotation:-4.4,x:-354.3,y:842.7},0).wait(1).to({rotation:-5,x:-351.3,y:846.5},0).wait(1).to({rotation:-5.6,x:-348.2,y:850.2},0).wait(1).to({rotation:-6.1,x:-345.1,y:854.1},0).wait(1).to({rotation:-6.7,x:-342.1,y:857.9},0).wait(1).to({rotation:-7.2,x:-339,y:861.7},0).wait(1).to({rotation:-7.8,x:-335.9,y:865.5},0).wait(1).to({rotation:-8.3,x:-332.9,y:869.3},0).wait(1).to({rotation:-8.9,x:-329.8,y:873.1},0).wait(1).to({rotation:-9.4,x:-326.7,y:876.9},0).wait(1).to({rotation:-10,x:-323.6,y:880.7},0).wait(1).to({rotation:-10.6,x:-320.6,y:884.5},0).wait(1).to({rotation:-11.1,x:-317.5,y:888.4},0).wait(1).to({rotation:-11.7,x:-314.5,y:892.1},0).wait(1).to({rotation:-12.2,x:-311.4,y:895.9},0).wait(1).to({rotation:-12.8,x:-308.3,y:899.8},0).wait(1).to({rotation:-13.3,x:-305.2,y:903.5},0).wait(1).to({rotation:-13.9,x:-302.2,y:907.3},0).wait(1).to({rotation:-14.4,x:-299.1,y:911.2},0).wait(1).to({rotation:-15,x:-296.1,y:915},0).wait(1).to({rotation:-16,x:-286.1,y:916.7},0).wait(1).to({rotation:-17,x:-276,y:918.4},0).wait(1).to({rotation:-18.1,x:-266,y:920.1},0).wait(1).to({rotation:-19.1,x:-256,y:921.8},0).wait(1).to({rotation:-20.1,x:-246,y:923.5},0).wait(1).to({rotation:-21.1,x:-236,y:925.2},0).wait(1).to({rotation:-22.1,x:-226.1,y:927},0).wait(1).to({rotation:-23.1,x:-216,y:928.7},0).wait(1).to({rotation:-24.2,x:-206,y:930.4},0).wait(1).to({rotation:-25.2,x:-196,y:932.1},0).wait(1).to({rotation:-26.2,x:-186,y:933.9},0).wait(1).to({rotation:-27.2,x:-176,y:935.6},0).wait(1).to({rotation:-28.2,x:-166,y:937.2},0).wait(1).to({rotation:-29.3,x:-156,y:939},0).wait(1).to({rotation:-30.3,x:-145.9,y:940.7},0).wait(1).to({rotation:-31.3,x:-136,y:942.4},0).wait(1).to({rotation:-32.3,x:-126,y:944.1},0).wait(1).to({rotation:-33.3,x:-116,y:945.9},0).wait(1).to({rotation:-34.4,x:-105.9,y:947.6},0).wait(1).to({rotation:-35.4,x:-96,y:949.3},0).wait(1).to({rotation:-36.4,x:-86,y:951},0).wait(1).to({rotation:-37.4,x:-75.9,y:952.7},0).wait(1).to({rotation:-38.4,x:-66,y:954.5},0).wait(1).to({rotation:-39.4,x:-55.9,y:956.2},0).wait(1).to({rotation:-40.5,x:-46,y:957.9},0).wait(1).to({rotation:-41.5,x:-36,y:959.6},0).wait(1).to({rotation:-42.5,x:-25.9,y:961.3},0).wait(1).to({rotation:-43.5,x:-15.9,y:963.1},0).wait(1).to({rotation:-44.5,x:-5.9,y:964.8},0).wait(1).to({rotation:-45.6,x:4.1,y:966.5},0).wait(1).to({rotation:-46.6,x:14.1,y:968.3},0).wait(1).to({rotation:-47.6,x:24.1,y:969.9},0).wait(1).to({rotation:-48.6,x:34.1,y:971.7},0).wait(1).to({rotation:-49.6,x:44.1,y:973.4},0).wait(1).to({rotation:-50.6,x:54.1,y:975.1},0).wait(1).to({rotation:-51.7,x:64.1,y:976.8},0).wait(1).to({rotation:-52.7,x:74.1,y:978.5},0).wait(1).to({rotation:-53.7,x:84.1,y:980.2},0).wait(1).to({rotation:-54.7,x:94.1,y:982},0).wait(1).to({rotation:-55.7,x:104.1,y:983.6},0).wait(1).to({rotation:-56.8,x:114.2,y:985.4},0).wait(1).to({rotation:-57.8,x:124.2,y:987.1},0).wait(1).to({rotation:-58.8,x:134.2,y:988.8},0).wait(1).to({rotation:-59.8,x:144.2,y:990.5},0).wait(1));

	// Calque_5
	this.instance_3 = new lib.Symbole6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-464.9,491.7,0.999,0.999,-29.9,0,0,148.9,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:149,scaleX:1,scaleY:1,rotation:-29.8,x:-466.6,y:485.4},0).wait(1).to({rotation:-29.6,x:-468.4,y:479.2},0).wait(1).to({rotation:-29.4,x:-470.3,y:473.1},0).wait(1).to({rotation:-29.2,x:-472.1,y:466.8},0).wait(1).to({rotation:-28.9,x:-473.9,y:460.7},0).wait(1).to({rotation:-28.7,x:-475.7,y:454.5},0).wait(1).to({rotation:-28.5,x:-477.5,y:448.3},0).wait(1).to({rotation:-28.3,x:-479.3,y:442.1},0).wait(1).to({rotation:-28.1,x:-481.1,y:435.9},0).wait(1).to({rotation:-27.9,x:-482.9,y:429.7},0).wait(1).to({rotation:-27.7,x:-484.8,y:423.5},0).wait(1).to({rotation:-27.5,x:-486.6,y:417.4},0).wait(1).to({rotation:-27.3,x:-488.4,y:411.1},0).wait(1).to({rotation:-27,x:-490.2,y:404.9},0).wait(1).to({rotation:-26.8,x:-492,y:398.8},0).wait(1).to({rotation:-26.6,x:-493.8,y:392.6},0).wait(1).to({rotation:-26.4,x:-495.7,y:386.4},0).wait(1).to({rotation:-26.2,x:-497.5,y:380.2},0).wait(1).to({rotation:-26,x:-499.2,y:374},0).wait(1).to({rotation:-25.8,x:-501,y:367.8},0).wait(1).to({rotation:-25.6,x:-502.9,y:361.6},0).wait(1).to({rotation:-25.4,x:-504.7,y:355.4},0).wait(1).to({rotation:-25.1,x:-506.5,y:349.3},0).wait(1).to({rotation:-24.9,x:-508.4,y:343},0).wait(1).to({rotation:-24.7,x:-510.2,y:336.9},0).wait(1).to({rotation:-24.5,x:-512,y:330.7},0).wait(1).to({rotation:-24.3,x:-513.8,y:324.5},0).wait(1).to({rotation:-24.1,x:-515.6,y:318.3},0).wait(1).to({rotation:-23.9,x:-517.4,y:312.1},0).wait(1).to({rotation:-23.7,x:-519.3,y:305.9},0).wait(1).to({rotation:-23.4,x:-521,y:299.7},0).wait(1).to({rotation:-23.2,x:-522.9,y:293.5},0).wait(1).to({rotation:-23,x:-524.6,y:287.4},0).wait(1).to({rotation:-22.8,x:-526.5,y:281.2},0).wait(1).to({rotation:-22.6,x:-528.3,y:275},0).wait(1).to({rotation:-22.4,x:-530.1,y:268.8},0).wait(1).to({rotation:-22.2,x:-532,y:262.6},0).wait(1).to({rotation:-22,x:-533.7,y:256.4},0).wait(1).to({rotation:-21.8,x:-535.5,y:250.2},0).wait(1).to({rotation:-21.5,x:-537.4,y:244.1},0).wait(1).to({rotation:-21.3,x:-539.2,y:237.9},0).wait(1).to({rotation:-21.1,x:-541,y:231.7},0).wait(1).to({rotation:-20.9,x:-542.8,y:225.5},0).wait(1).to({rotation:-20.7,x:-544.6,y:219.3},0).wait(1).to({rotation:-20.5,x:-546.5,y:213.1},0).wait(1).to({rotation:-20.3,x:-548.3,y:206.9},0).wait(1).to({rotation:-20.1,x:-550.1,y:200.7},0).wait(1).to({rotation:-19.9,x:-551.9,y:194.5},0).wait(1).to({rotation:-19.6,x:-553.7,y:188.3},0).wait(1).to({rotation:-19.4,x:-555.5,y:182.1},0).wait(1).to({rotation:-19.2,x:-557.3,y:176},0).wait(1).to({rotation:-19,x:-559.2,y:169.7},0).wait(1).to({rotation:-18.8,x:-561,y:163.6},0).wait(1).to({rotation:-18.6,x:-562.8,y:157.3},0).wait(1).to({rotation:-18.4,x:-564.6,y:151.2},0).wait(1).to({rotation:-18.2,x:-566.4,y:145},0).wait(1).to({rotation:-18,x:-568.2,y:138.8},0).wait(1).to({rotation:-17.7,x:-570.1,y:132.6},0).wait(1).to({rotation:-17.5,x:-571.8,y:126.4},0).wait(1).to({rotation:-17.3,x:-573.7,y:120.3},0).wait(1).to({rotation:-17.1,x:-575.5,y:114},0).wait(1).to({rotation:-16.9,x:-577.3,y:107.9},0).wait(1).to({rotation:-16.7,x:-579.1,y:101.6},0).wait(1).to({rotation:-16.5,x:-580.9,y:95.6},0).wait(1).to({rotation:-16.3,x:-582.7,y:89.3},0).wait(1).to({rotation:-16.1,x:-584.6,y:83.2},0).wait(1).to({rotation:-15.8,x:-586.3,y:76.9},0).wait(1).to({rotation:-15.6,x:-588.2,y:70.8},0).wait(1).to({rotation:-15.4,x:-590,y:64.6},0).wait(1).to({rotation:-15.2,x:-591.8,y:58.4},0).wait(1).to({rotation:-15,x:-593.7,y:52.2},0).wait(1));

	// Calque_4
	this.instance_4 = new lib.Symbole5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,20.3,0.789,0.789,0,0,0,215.9,215.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:216.7,regY:216.7,scaleX:0.79,scaleY:0.79,rotation:-0.5,x:-44.8,y:23.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-0.9,x:-46,y:25.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-1.4,x:-47.1,y:27.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-1.8,x:-48.3,y:30.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-2.3,x:-49.4,y:32.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-2.8,x:-50.6,y:34.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-3.2,x:-51.7,y:37},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-3.7,x:-52.9,y:39.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-4.2,x:-54,y:41.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-4.6,x:-55.1,y:43.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-5.1,x:-56.3,y:46},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-5.5,x:-57.5,y:48.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-6,x:-58.6,y:50.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-6.5,x:-59.7,y:52.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-6.9,x:-60.9,y:55},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-7.4,x:-62,y:57.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-7.8,x:-63.1,y:59.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8.3,x:-64.3,y:61.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8.8,x:-65.5,y:64},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.2,x:-66.6,y:66.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-9.7,x:-67.7,y:68.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-10.2,x:-68.9,y:70.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-10.6,x:-70,y:73},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-11.1,x:-71.2,y:75.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-11.5,x:-72.4,y:77.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-12,x:-73.5,y:79.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-12.5,x:-74.6,y:82.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-12.9,x:-75.8,y:84.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-13.4,x:-76.9,y:86.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-13.8,x:-78.1,y:88.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-14.3,x:-79.2,y:91.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-14.8,x:-80.3,y:93.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-15.2,x:-81.6,y:95.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-15.7,x:-82.7,y:97.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-16.2,x:-83.8,y:100.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-16.6,x:-84.9,y:102.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-17.1,x:-86.1,y:104.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-17.5,x:-87.2,y:106.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-18,x:-88.4,y:109.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-18.5,x:-89.6,y:111.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-18.9,x:-90.7,y:113.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-19.4,x:-91.8,y:115.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-19.8,x:-93,y:118.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-20.3,x:-94.1,y:120.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-20.8,x:-95.3,y:122.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-21.2,x:-96.4,y:124.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-21.7,x:-97.6,y:127.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-22.2,x:-98.7,y:129.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-22.6,x:-99.9,y:131.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-23.1,x:-101,y:133.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-23.5,x:-102.2,y:136.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-24,x:-103.3,y:138.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-24.5,x:-104.4,y:140.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-24.9,x:-105.6,y:142.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-25.4,x:-106.7,y:145.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-25.8,x:-107.9,y:147.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-26.3,x:-109.1,y:149.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-26.8,x:-110.2,y:151.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-27.2,x:-111.3,y:154.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-27.7,x:-112.5,y:156.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-28.2,x:-113.6,y:158.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-28.6,x:-114.8,y:160.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-29.1,x:-115.9,y:163.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-29.5,x:-117.1,y:165.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30,x:-118.2,y:167.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-32.5,x:-114.7,y:207.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-35,x:-111.3,y:246.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-37.4,x:-107.8,y:286.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-39.9,x:-104.3,y:326.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-42.4,x:-100.8,y:365.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-44.9,x:-97.4,y:405.3},0).wait(1));

	// Calque_3
	this.instance_5 = new lib.Symbole4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1072.1,999.1,1,1,0,0,0,668.3,785.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:705.6,regY:705.6,rotation:-0.7,x:-747.8,y:930.5},0).wait(1).to({rotation:-1.3,x:-460.7,y:941.4},0).wait(1).to({rotation:-2,x:-173.7,y:952.2},0).wait(1).to({rotation:-2.7,x:-162.7,y:952.6},0).wait(1).to({rotation:-3.3,x:-151.7,y:952.8},0).wait(1).to({rotation:-4,x:-140.7,y:953.1},0).wait(1).to({rotation:-4.6,x:-129.8,y:953.4},0).wait(1).to({rotation:-5.3,x:-118.8,y:953.7},0).wait(1).to({rotation:-6,x:-107.8,y:954},0).wait(1).to({rotation:-6.6,x:-96.8,y:954.3},0).wait(1).to({rotation:-7.3,x:-85.8,y:954.6},0).wait(1).to({rotation:-8,x:-74.8,y:955},0).wait(1).to({rotation:-8.6,x:-63.9,y:955.3},0).wait(1).to({rotation:-9.3,x:-52.9,y:955.7},0).wait(1).to({rotation:-10,x:-42,y:956},0).wait(1).to({rotation:-10.6,x:-31,y:956.4},0).wait(1).to({rotation:-11.3,x:-20.1,y:956.9},0).wait(1).to({rotation:-12,x:-9.1,y:957.3},0).wait(1).to({rotation:-12.6,x:1.8,y:957.7},0).wait(1).to({rotation:-13.3,x:12.8,y:958.1},0).wait(1).to({rotation:-13.9,x:23.7,y:958.5},0).wait(1).to({rotation:-14.6,x:34.7,y:959},0).wait(1).to({rotation:-15.3,x:45.6,y:959.5},0).wait(1).to({rotation:-15.9,x:56.6,y:960},0).wait(1).to({rotation:-16.6,x:67.5,y:960.4},0).wait(1).to({rotation:-17.3,x:78.4,y:960.9},0).wait(1).to({rotation:-17.9,x:89.3,y:961.5},0).wait(1).to({rotation:-18.6,x:100.3,y:961.9},0).wait(1).to({rotation:-19.3,x:111.2,y:962.5},0).wait(1).to({rotation:-19.9,x:122.1,y:963.1},0).wait(1).to({rotation:-20.6,x:133,y:963.6},0).wait(1).to({rotation:-21.2,x:143.9,y:964.1},0).wait(1).to({rotation:-21.9,x:154.9,y:964.7},0).wait(1).to({rotation:-22.6,x:165.8,y:965.4},0).wait(1).to({rotation:-23.2,x:176.7,y:966},0).wait(1).to({rotation:-23.9,x:187.6,y:966.6},0).wait(1).to({rotation:-24.6,x:198.6,y:967.2},0).wait(1).to({rotation:-25.2,x:209.5,y:967.9},0).wait(1).to({rotation:-25.7,x:220.7,y:968.5},0).wait(1).to({rotation:-26.1,x:232,y:969.2},0).wait(1).to({rotation:-26.6,x:243.2,y:969.9},0).wait(1).to({rotation:-27,x:254.5,y:970.5},0).wait(1).to({rotation:-27.5,x:265.7,y:971.2},0).wait(1).to({rotation:-27.9,x:277,y:971.9},0).wait(1).to({rotation:-28.4,x:288.2,y:972.5},0).wait(1).to({rotation:-28.8,x:299.5,y:973.2},0).wait(1).to({rotation:-29.3,x:310.7,y:973.9},0).wait(1).to({rotation:-29.7,x:322,y:974.7},0).wait(1).to({rotation:-30.2,x:333.2,y:975.3},0).wait(1).to({rotation:-30.6,x:344.4,y:976},0).wait(1).to({rotation:-31.1,x:355.7,y:976.8},0).wait(1).to({rotation:-31.5,x:367,y:977.5},0).wait(1).to({rotation:-32,x:378.2,y:978.2},0).wait(1).to({rotation:-32.4,x:389.5,y:978.9},0).wait(1).to({rotation:-32.9,x:400.7,y:979.6},0).wait(1).to({rotation:-33.3,x:412,y:980.4},0).wait(1).to({rotation:-33.8,x:423.2,y:981.1},0).wait(1).to({rotation:-34.2,x:434.5,y:981.9},0).wait(1).to({rotation:-34.7,x:445.8,y:982.7},0).wait(1).to({rotation:-35.1,x:457,y:983.4},0).wait(1).to({rotation:-35.6,x:468.3,y:984.2},0).wait(1).to({rotation:-36,x:479.5,y:985},0).wait(1).to({rotation:-36.5,x:490.8,y:985.8},0).wait(1).to({rotation:-36.9,x:502,y:986.5},0).wait(1).to({rotation:-37.4,x:513.3,y:987.3},0).wait(1).to({rotation:-37.8,x:524.6,y:988.2},0).wait(1).to({rotation:-38.3,x:535.8,y:988.9},0).wait(1).to({rotation:-38.7,x:547.1,y:989.7},0).wait(1).to({rotation:-39.2,x:558.3,y:990.5},0).wait(1).to({rotation:-39.6,x:569.6,y:991.4},0).wait(1).to({rotation:-40.1,x:580.9,y:992.2},0).wait(1));

	// Calque_2
	this.instance_6 = new lib.Symbole3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(686.7,440.9,1,1,0,0,0,707.1,707.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:-0.6,x:668,y:457.8},0).wait(1).to({rotation:-1.3,x:649.4,y:474.8},0).wait(1).to({rotation:-1.9,x:630.6,y:491.8},0).wait(1).to({rotation:-2.5,x:611.9,y:508.7},0).wait(1).to({rotation:-3.1,x:593.3,y:525.7},0).wait(1).to({rotation:-3.8,x:574.6,y:542.6},0).wait(1).to({rotation:-4.4,x:555.9,y:559.5},0).wait(1).to({rotation:-5,x:537.3,y:576.6},0).wait(1).to({rotation:-5.6,x:518.6,y:593.5},0).wait(1).to({rotation:-6.3,x:499.9,y:610.5},0).wait(1).to({rotation:-6.9,x:481.2,y:627.3},0).wait(1).to({rotation:-7.5,x:462.5,y:644.3},0).wait(1).to({rotation:-8.2,x:443.9,y:661.2},0).wait(1).to({rotation:-8.8,x:425.2,y:678.2},0).wait(1).to({rotation:-9.4,x:406.5,y:695.1},0).wait(1).to({rotation:-10,x:387.8,y:712.1},0).wait(1).to({rotation:-10.7,x:369.2,y:729.1},0).wait(1).to({rotation:-11.3,x:350.5,y:746},0).wait(1).to({rotation:-11.9,x:331.8,y:763},0).wait(1).to({rotation:-12.5,x:313.1,y:779.9},0).wait(1).to({rotation:-13.2,x:294.5,y:796.9},0).wait(1).to({rotation:-13.8,x:269.4,y:802.1},0).wait(1).to({rotation:-14.4,x:244.5,y:807.3},0).wait(1).to({rotation:-15,x:219.5,y:812.5},0).wait(1).to({rotation:-15.6,x:194.5,y:817.7},0).wait(1).to({rotation:-16.2,x:169.5,y:822.8},0).wait(1).to({rotation:-16.8,x:144.5,y:828.1},0).wait(1).to({rotation:-17.4,x:119.6,y:833.2},0).wait(1).to({rotation:-18,x:94.6,y:838.4},0).wait(1).to({rotation:-18.6,x:69.6,y:843.6},0).wait(1).to({rotation:-19.2,x:44.6,y:848.8},0).wait(1).to({rotation:-19.8,x:19.7,y:854},0).wait(1).to({rotation:-20.4,x:-5.3,y:859.2},0).wait(1).to({rotation:-21,x:-30.3,y:864.4},0).wait(1).to({rotation:-21.6,x:-55.3,y:869.6},0).wait(1).to({rotation:-22.2,x:-80.3,y:874.8},0).wait(1).to({rotation:-22.8,x:-105.2,y:879.9},0).wait(1).to({rotation:-23.4,x:-130.2,y:885.2},0).wait(1).to({rotation:-24,x:-155.2,y:890.3},0).wait(1).to({rotation:-24.6,x:-180.2,y:895.5},0).wait(1).to({rotation:-25.2,x:-205.2,y:900.7},0).wait(1).to({rotation:-25.8,x:-230.2,y:905.9},0).wait(1).to({rotation:-26.4,x:-255.1,y:911.1},0).wait(1).to({rotation:-27,x:-280.1,y:916.3},0).wait(1).to({rotation:-27.6,x:-305.1,y:921.5},0).wait(1).to({rotation:-28.2,x:-330.1,y:926.7},0).wait(1).to({rotation:-28.8,x:-355.1,y:931.9},0).wait(1).to({rotation:-29.4,x:-380,y:937.1},0).wait(1).to({rotation:-30,x:-405,y:942.3},0).wait(1).to({rotation:-30.6,x:-430,y:947.4},0).wait(1).to({rotation:-31.2,x:-455,y:952.6},0).wait(1).to({rotation:-31.9,x:-480,y:957.8},0).wait(1).to({rotation:-32.5,x:-504.9,y:963},0).wait(1).to({rotation:-33.1,x:-529.9,y:968.2},0).wait(1).to({rotation:-33.7,x:-554.9,y:973.4},0).wait(1).to({rotation:-34.3,x:-579.9,y:978.6},0).wait(1).to({rotation:-34.9,x:-604.8,y:983.8},0).wait(1).to({rotation:-35.5,x:-629.8,y:989},0).wait(1).to({rotation:-36.1,x:-654.8,y:994.2},0).wait(1).to({rotation:-36.7,x:-679.8,y:999.3},0).wait(1).to({rotation:-37.3,x:-704.8,y:1004.6},0).wait(1).to({rotation:-37.9,x:-729.8,y:1009.8},0).wait(1).to({rotation:-38.5,x:-754.7,y:1014.9},0).wait(1).to({rotation:-39.1,x:-779.7,y:1020.1},0).wait(1).to({rotation:-39.7,x:-804.7,y:1025.3},0).wait(1).to({rotation:-40.3,x:-829.7,y:1030.5},0).wait(1).to({rotation:-40.9,x:-854.7,y:1035.7},0).wait(1).to({rotation:-41.5,x:-879.6,y:1040.9},0).wait(1).to({rotation:-42.1,x:-904.7,y:1046.1},0).wait(1).to({rotation:-42.7,x:-929.6,y:1051.3},0).wait(1).to({rotation:-43.3,x:-954.6,y:1056.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1740.4,-266.2,3134.2,1891.4);


// stage content:
(lib.plumes_scroll_parallaxe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//variable global pour referencer le scenario principal
		_this = this;
		
		/***********************
		* Filtrage navigateur
		***********************/
		    // Opera 8.0+
		var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		    // Firefox 1.0+
		var isFirefox = typeof InstallTrigger !== 'undefined';
		    // At least Safari 3+: "[object HTMLElementConstructor]"
		var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
		    // Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		    // Edge 20+
		var isEdge = !isIE && !!window.StyleMedia;
		    // Chrome 1+
		var isChrome = !!window.chrome && !!window.chrome.webstore;
		    // Blink engine detection
		var isBlink = (isChrome || isOpera) && !!window.CSS;
		    // IOS
		var iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);
		
		//scroll automatique
		// animation de la valeur de scroll top (une propriete de la page qui correspond a la valeur du scroll)
		
		function anchor (ancre, vitesse) {
			var lebody = null;
			//firefox et ie
			if (isFirefox == true || isIE == true) {
				lebody = document.body.parentNode;
				//syntaxte pour cibler la hauteur du body
			}else{
				//pour tous les autres navigateurs
				lebody = document.body;
			}
			
			createjs.Tween.get(lebody).to({scrollTop:ancre}, vitesse, createjs.is.quadInOut).call(fin);
			
		}
		
		// check la fin du mouvement Tween
		
		function fin() {
			console.log('fin du tween');
			
		}
		
		
		// recup du scroll pour lire le scenario des clips
		
		document.onscroll = scrolling;
		
		function scrolling(){
			scrollT = null;
			//pour firefox ou ie
			if (isFirefox == true || isIE == true) {
				scrollT = document.body.parentNode.scrollTop;
				//syntaxte pour cibler la hauteur du body
			}else{
				//pour tous les autres navigateurs
				scrollT = document.body.scrollTop;
				
			}
			
			_this.plume1.gotoAndStop((scrollT/ 100)* (window.innerHeight/100));
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_6
	this.plume1 = new lib.plumes();
	this.plume1.name = "plume1";
	this.plume1.parent = this;
	this.plume1.setTransform(999.2,344.8,0.883,0.883,0,0,0,250.3,249.3);

	this.timeline.addTween(cjs.Tween.get(this.plume1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,419.5,2768.1,1670.5);
// library properties:
lib.properties = {
	id: '2F382BF1E0F843D59E9923DD3014446A',
	width: 1500,
	height: 1060,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/plumes_scroll_parallaxe_atlas_.png", id:"plumes_scroll_parallaxe_atlas_"}
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
an.compositions['2F382BF1E0F843D59E9923DD3014446A'] = {
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