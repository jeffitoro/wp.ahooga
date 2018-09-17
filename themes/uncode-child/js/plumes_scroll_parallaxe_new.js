(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"plumes_scroll_parallaxe_new_atlas_", frames: [[1061,1602,512,512],[0,0,1600,1600],[0,3474,512,512],[0,1602,1000,1000],[514,3474,512,512],[0,2604,1059,868],[1028,3474,512,512]]}
];


// symbols:



(lib.feather196 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.feather1 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.feather1b96 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.feather2blurred_new3 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.feather2 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.feather2bblurred_new2 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.feather2b = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe_new_atlas_"];
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


(lib.Symbole13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather2blurred_new3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole13, new cjs.Rectangle(0,0,1000,1000), null);


(lib.Symbole12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.feather2bblurred_new2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole12, new cjs.Rectangle(0,0,1059,868), null);


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
	this.instance.setTransform(-60.3,104.6,0.206,0.206,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole8, new cjs.Rectangle(-60.3,-60.3,450.6,450.6), null);


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


(lib.plumes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169));

	// Calque_8
	this.instance = new lib.Symbole9();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,408.4,1,1,0,0,0,286.4,286.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.3,x:-7.8,y:411.2},0).wait(1).to({rotation:0.7,x:-9.2,y:414},0).wait(1).to({rotation:1,x:-10.6,y:416.7},0).wait(1).to({rotation:1.4,x:-12,y:419.5},0).wait(1).to({rotation:1.7,x:-13.5,y:422.3},0).wait(1).to({rotation:2,x:-14.9,y:425.1},0).wait(1).to({rotation:2.4,x:-16.3,y:427.9},0).wait(1).to({rotation:2.7,x:-17.7,y:430.8},0).wait(1).to({rotation:3.1,x:-19.1,y:433.6},0).wait(1).to({rotation:3.4,x:-20.5,y:436.4},0).wait(1).to({rotation:3.7,x:-21.9,y:439.2},0).wait(1).to({rotation:4.1,x:-23.4,y:442},0).wait(1).to({rotation:4.4,x:-24.8,y:444.8},0).wait(1).to({rotation:4.8,x:-26.2,y:447.6},0).wait(1).to({rotation:5.1,x:-27.6,y:450.4},0).wait(1).to({rotation:5.5,x:-29.1,y:453.3},0).wait(1).to({rotation:5.8,x:-30.5,y:456.1},0).wait(1).to({rotation:6.1,x:-32,y:458.9},0).wait(1).to({rotation:6.5,x:-33.4,y:461.7},0).wait(1).to({rotation:6.8,x:-34.8,y:464.5},0).wait(1).to({rotation:7.2,x:-36.2,y:467.3},0).wait(1).to({rotation:7.5,x:-37.7,y:470.2},0).wait(1).to({rotation:7.9,x:-39.1,y:473},0).wait(1).to({rotation:8.2,x:-40.5,y:475.8},0).wait(1).to({rotation:8.5,x:-42,y:478.6},0).wait(1).to({rotation:8.9,x:-43.4,y:481.5},0).wait(1).to({rotation:9.2,x:-44.8,y:484.3},0).wait(1).to({rotation:9.6,x:-46.3,y:487.1},0).wait(1).to({rotation:9.9,x:-47.7,y:490},0).wait(1).to({rotation:10.3,x:-49.1,y:492.8},0).wait(1).to({rotation:10.6,x:-50.6,y:495.7},0).wait(1).to({rotation:11,x:-52,y:498.5},0).wait(1).to({rotation:11.3,x:-53.4,y:501.3},0).wait(1).to({rotation:11.6,x:-54.9,y:504.2},0).wait(1).to({rotation:12,x:-56.3,y:507},0).wait(1).to({rotation:12.3,x:-57.8,y:509.9},0).wait(1).to({rotation:12.7,x:-59.2,y:512.7},0).wait(1).to({rotation:13,x:-60.6,y:515.6},0).wait(1).to({rotation:13.4,x:-62.1,y:518.4},0).wait(1).to({rotation:13.7,x:-63.5,y:521.2},0).wait(1).to({rotation:14.1,x:-65,y:524.1},0).wait(1).to({rotation:14.4,x:-66.4,y:527},0).wait(1).to({rotation:14.8,x:-67.8,y:529.8},0).wait(1).to({rotation:15.1,x:-69.3,y:532.7},0).wait(1).to({rotation:15.5,x:-70.7,y:535.5},0).wait(1).to({rotation:15.8,x:-72.2,y:538.4},0).wait(1).to({rotation:16.1,x:-73.6,y:541.2},0).wait(1).to({rotation:16.5,x:-75.1,y:544.1},0).wait(1).to({rotation:16.8,x:-76.6,y:547},0).wait(1).to({rotation:17.2,x:-78,y:549.8},0).wait(1).to({rotation:17.5,x:-79.4,y:552.7},0).wait(1).to({rotation:17.9,x:-80.9,y:555.5},0).wait(1).to({rotation:18.2,x:-82.4,y:558.4},0).wait(1).to({rotation:18.6,x:-83.8,y:561.3},0).wait(1).to({rotation:18.9,x:-85.3,y:564.2},0).wait(1).to({rotation:19.3,x:-86.7,y:567.1},0).wait(1).to({rotation:19.6,x:-88.2,y:569.9},0).wait(1).to({rotation:20,x:-89.6,y:572.8},0).wait(1).to({rotation:20.3,x:-91.1,y:575.6},0).wait(1).to({rotation:20.7,x:-92.5,y:578.5},0).wait(1).to({rotation:21,x:-94,y:581.4},0).wait(1).to({rotation:21.4,x:-95.4,y:584.3},0).wait(1).to({rotation:21.7,x:-96.9,y:587.2},0).wait(1).to({rotation:22.1,x:-98.4,y:590.1},0).wait(1).to({rotation:22.4,x:-99.8,y:593},0).wait(1).to({rotation:22.8,x:-101.3,y:595.8},0).wait(1).to({rotation:23.1,x:-102.8,y:598.7},0).wait(1).to({rotation:23.5,x:-104.3,y:601.6},0).wait(1).to({rotation:23.8,x:-105.7,y:604.5},0).wait(1).to({rotation:24.2,x:-107.2,y:607.4},0).wait(1).to({rotation:24.5,x:-108.6,y:610.3},0).wait(1).to({rotation:24.9,x:-110.1,y:613.2},0).wait(1).to({rotation:25.2,x:-111.6,y:616.1},0).wait(1).to({rotation:25.6,x:-113,y:618.9},0).wait(1).to({rotation:25.9,x:-114.5,y:621.9},0).wait(1).to({rotation:26.3,x:-116,y:624.8},0).wait(1).to({rotation:26.7,x:-117.4,y:627.6},0).wait(1).to({rotation:27,x:-118.9,y:630.6},0).wait(1).to({rotation:27.4,x:-120.4,y:633.4},0).wait(1).to({rotation:27.7,x:-121.8,y:636.3},0).wait(1).to({rotation:28.1,x:-123.3,y:639.3},0).wait(1).to({rotation:28.4,x:-124.8,y:642.2},0).wait(1).to({rotation:28.8,x:-126.3,y:645.1},0).wait(1).to({rotation:29.1,x:-127.7,y:648},0).wait(1).to({rotation:29.5,x:-129.2,y:650.9},0).wait(1).to({rotation:29.8,x:-130.7,y:653.8},0).wait(1).to({rotation:30.2,x:-132.2,y:656.7},0).wait(1).to({rotation:30.5,x:-133.7,y:659.7},0).wait(1).to({rotation:30.9,x:-135.1,y:662.6},0).wait(1).to({rotation:31.2,x:-136.6,y:665.5},0).wait(1).to({rotation:31.6,x:-138.1,y:668.4},0).wait(1).to({rotation:32,x:-139.5,y:671.4},0).wait(1).to({rotation:32.3,x:-141,y:674.3},0).wait(1).to({rotation:32.7,x:-142.5,y:677.2},0).wait(1).to({rotation:33,x:-144,y:680.1},0).wait(1).to({rotation:33.4,x:-145.5,y:683.1},0).wait(1).to({rotation:33.7,x:-147,y:685.9},0).wait(1).to({rotation:34.1,x:-148.4,y:688.9},0).wait(1).to({rotation:34.4,x:-149.9,y:691.8},0).wait(1).to({rotation:34.8,x:-151.4,y:694.7},0).wait(1).to({rotation:35.2,x:-152.9,y:697.7},0).wait(1).to({rotation:35.5,x:-154.4,y:700.6},0).wait(1).to({rotation:35.9,x:-155.9,y:703.6},0).wait(1).to({rotation:36.2,x:-157.4,y:706.5},0).wait(1).to({rotation:36.6,x:-158.8,y:709.4},0).wait(1).to({rotation:36.9,x:-160.3,y:712.4},0).wait(1).to({rotation:37.3,x:-161.8,y:715.3},0).wait(1).to({rotation:37.7,x:-163.3,y:718.3},0).wait(1).to({rotation:38,x:-164.8,y:721.2},0).wait(1).to({rotation:38.4,x:-166.3,y:724.1},0).wait(1).to({rotation:38.7,x:-167.8,y:727.1},0).wait(1).to({rotation:39.1,x:-169.3,y:730},0).wait(1).to({rotation:39.5,x:-170.8,y:733},0).wait(1).to({rotation:39.8,x:-172.2,y:735.9},0).wait(1).to({rotation:40.2,x:-173.8,y:738.9},0).wait(1).to({rotation:40.5,x:-175.2,y:741.9},0).wait(1).to({rotation:40.9,x:-176.8,y:744.8},0).wait(1).to({rotation:41.2,x:-178.3,y:747.8},0).wait(1).to({rotation:41.6,x:-179.8,y:750.8},0).wait(1).to({rotation:42,x:-181.2,y:753.7},0).wait(1).to({rotation:42.3,x:-182.7,y:756.7},0).wait(1).to({rotation:42.7,x:-184.3,y:759.6},0).wait(1).to({rotation:43,x:-185.7,y:762.6},0).wait(1).to({rotation:43.4,x:-187.3,y:765.5},0).wait(1).to({rotation:43.8,x:-188.8,y:768.5},0).wait(1).to({rotation:44.1,x:-190.3,y:771.5},0).wait(1).to({rotation:44.5,x:-191.8,y:774.5},0).wait(1).to({rotation:44.9,x:-193.3,y:777.5},0).wait(1).to({rotation:45.2,x:-194.8,y:780.4},0).wait(1).to({rotation:45.6,x:-196.3,y:783.4},0).wait(1).to({rotation:45.9,x:-197.8,y:786.3},0).wait(1).to({rotation:46.3,x:-199.3,y:789.3},0).wait(1).to({rotation:46.7,x:-200.8,y:792.3},0).wait(1).to({rotation:47,x:-202.3,y:795.3},0).wait(1).to({rotation:47.4,x:-203.8,y:798.3},0).wait(1).to({rotation:47.7,x:-205.4,y:801.3},0).wait(1).to({rotation:48.1,x:-206.9,y:804.3},0).wait(1).to({rotation:48.5,x:-208.4,y:807.2},0).wait(1).to({rotation:48.8,x:-209.9,y:810.2},0).wait(1).to({rotation:49.2,x:-211.4,y:813.2},0).wait(1).to({rotation:49.6,x:-212.9,y:816.2},0).wait(1).to({rotation:49.9,x:-214.4,y:819.2},0).wait(1).to({rotation:50.3,x:-215.9,y:822.2},0).wait(1).to({rotation:50.7,x:-217.5,y:825.2},0).wait(1).to({rotation:51,x:-219,y:828.2},0).wait(1).to({rotation:51.4,x:-220.5,y:831.2},0).wait(1).to({rotation:51.7,x:-222,y:834.1},0).wait(1).to({rotation:52.1,x:-223.5,y:837.2},0).wait(1).to({rotation:52.5,x:-225,y:840.2},0).wait(1).to({rotation:52.8,x:-226.6,y:843.2},0).wait(1).to({rotation:53.2,x:-228.1,y:846.2},0).wait(1).to({rotation:53.6,x:-229.6,y:849.2},0).wait(1).to({rotation:53.9,x:-231.1,y:852.2},0).wait(1).to({rotation:54.3,x:-232.7,y:855.2},0).wait(1).to({rotation:54.7,x:-234.2,y:858.2},0).wait(1).to({rotation:55,x:-235.7,y:861.2},0).wait(1).to({rotation:55.4,x:-237.2,y:864.2},0).wait(1).to({rotation:55.8,x:-238.8,y:867.2},0).wait(1).to({rotation:56.1,x:-240.3,y:870.2},0).wait(1).to({rotation:56.5,x:-241.8,y:873.3},0).wait(1).to({rotation:56.9,x:-243.3,y:876.3},0).wait(1).to({rotation:57.2,x:-244.9,y:879.3},0).wait(1).to({rotation:57.6,x:-246.4,y:882.3},0).wait(1).to({rotation:58,x:-247.9,y:885.3},0).wait(1).to({rotation:58.3,x:-249.4,y:888.4},0).wait(1).to({rotation:58.7,x:-251,y:891.4},0).wait(1).to({rotation:59.1,x:-252.5,y:894.4},0).wait(1).to({rotation:59.4,x:-254,y:897.5},0).wait(1));

	// Calque_7
	this.instance_1 = new lib.Symbole8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.7,335.2,0.734,0.734,0,0,0,165.1,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:164.9,scaleX:0.74,scaleY:0.74,x:270.6,y:334.7},0).wait(1).to({x:270.7,y:334.3},0).wait(1).to({x:270.8,y:333.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:270.9,y:333.3},0).wait(1).to({x:271,y:332.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:271.2,y:332.4},0).wait(1).to({x:271.3,y:331.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:331.5},0).wait(1).to({x:271.5,y:331},0).wait(1).to({x:271.6,y:330.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:271.7,y:330.1},0).wait(1).to({x:271.8,y:329.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:271.9,y:329.2},0).wait(1).to({x:272.1,y:328.7},0).wait(1).to({y:328.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:272.3,y:327.8},0).wait(1).to({x:272.4,y:327.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:272.5,y:326.9},0).wait(1).to({x:272.6,y:326.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:272.7,y:326},0).wait(1).to({x:272.8,y:325.5},0).wait(1).to({x:272.9,y:325},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:273,y:324.6},0).wait(1).to({x:273.1,y:324.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:273.3,y:323.7},0).wait(1).to({x:273.4,y:323.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:273.5,y:322.7},0).wait(1).to({x:273.6,y:322.3},0).wait(1).to({x:273.7,y:321.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:273.8,y:321.4},0).wait(1).to({x:273.9,y:320.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:274,y:320.4},0).wait(1).to({x:274.1,y:320},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:274.2,y:319.5},0).wait(1).to({x:274.3,y:319.1},0).wait(1).to({rotation:-0.1,x:274.5,y:318.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:274.6,y:318.2},0).wait(1).to({y:317.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:274.8,y:317.2},0).wait(1).to({x:274.9,y:316.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:275,y:316.3},0).wait(1).to({x:275.1,y:315.8},0).wait(1).to({x:275.3,y:315.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:275.4,y:314.8},0).wait(1).to({x:275.5,y:314.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:275.6,y:313.9},0).wait(1).to({x:275.7,y:313.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:275.8,y:313},0).wait(1).to({x:275.9,y:312.6},0).wait(1).to({x:276,y:312.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:276.1,y:311.6},0).wait(1).to({x:276.2,y:311.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:276.3,y:310.7},0).wait(1).to({x:276.4,y:310.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:276.6,y:309.7},0).wait(1).to({x:276.7,y:309.3},0).wait(1).to({x:276.8,y:308.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:276.9,y:308.3},0).wait(1).to({x:277,y:307.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:277.2,y:307.4},0).wait(1).to({y:306.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:277.4,y:306.4},0).wait(1).to({x:277.5,y:306},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:277.6,y:305.5},0).wait(1).to({x:277.7,y:305},0).wait(1).to({x:277.8,y:304.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:277.9,y:304.1},0).wait(1).to({x:278,y:303.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:278.1,y:303.2},0).wait(1).to({x:278.2,y:302.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:278.4,y:302.2},0).wait(1).to({x:278.5,y:301.7},0).wait(1).to({x:278.6,y:301.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:278.7,y:300.8},0).wait(1).to({x:278.8,y:300.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:279,y:299.8},0).wait(1).to({y:299.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:279.2,y:298.9},0).wait(1).to({x:279.3,y:298.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:279.4,y:298},0).wait(1).to({x:279.5,y:297.5},0).wait(1).to({x:279.6,y:297},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:279.7,y:296.5},0).wait(1).to({x:279.8,y:296.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:279.9,y:295.6},0).wait(1).to({x:280,y:295.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:280.2,y:294.6},0).wait(1).to({x:280.3,y:294.2},0).wait(1).to({x:280.4,y:293.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:280.5,y:293.2},0).wait(1).to({x:280.6,y:292.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:280.8,y:292.2},0).wait(1).to({y:291.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:281,y:291.3},0).wait(1).to({x:281.1,y:290.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:281.2,y:290.3},0).wait(1).to({x:281.3,y:289.9},0).wait(1).to({x:281.4,y:289.4},0).wait(1).to({rotation:-0.2,x:281.7,y:288.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.4,x:282.4,y:286.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.6,x:283.1,y:284},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.9,x:283.7,y:281.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.1,x:284.4,y:279.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.3,x:285,y:277.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.5,x:285.7,y:275.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-1.7,x:286.4,y:273.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-1.9,x:287.1,y:271},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.1,x:287.7,y:268.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.4,x:288.4,y:266.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.6,x:289,y:264.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.8,x:289.7,y:262.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3,x:290.4,y:260.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.2,x:291,y:258},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.4,x:291.7,y:255.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.7,x:292.4,y:253.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.9,x:293.1,y:251.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.1,x:293.8,y:249.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.3,x:294.4,y:247.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.5,x:295,y:244.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.7,x:295.8,y:242.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.9,x:296.4,y:240.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.2,x:297.1,y:238.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.4,x:297.8,y:236.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.6,x:298.4,y:234.1},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.8,x:299.1,y:231.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-6,x:299.7,y:229.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-6.2,x:300.5,y:227.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.5,x:301.1,y:225.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.7,x:301.8,y:223.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.9,x:302.5,y:220.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.1,x:303.2,y:218.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.3,x:303.8,y:216.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.5,x:304.5,y:214.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-7.8,x:305.2,y:212.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8,x:305.8,y:209.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.2,x:306.5,y:207.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.4,x:307.2,y:205.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.6,x:307.9,y:203.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.9,x:308.5,y:201.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.1,x:309.2,y:199},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.3,x:309.9,y:196.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.5,x:310.6,y:194.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.7,x:311.3,y:192.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.9,x:311.9,y:190.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.2,x:312.6,y:188},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.4,x:313.3,y:185.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.6,x:314,y:183.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.8,x:314.6,y:181.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-11,x:315.3,y:179.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-11.3,x:316,y:176.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.5,x:316.7,y:174.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.7,x:317.4,y:172.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.9,x:318.1,y:170.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-12.1,x:318.7,y:168.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-12.3,x:319.4,y:165.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-12.6,x:320.1,y:163.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-12.8,x:320.8,y:161.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13,x:321.5,y:159.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.2,x:322.1,y:157},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.4,x:322.8,y:154.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.7,x:323.5,y:152.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-13.9,x:324.2,y:150.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.1,x:324.9,y:148.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.3,x:325.5,y:145.9},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.5,x:326.2,y:143.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.8,x:326.9,y:141.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:327.6,y:139.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-15.2,x:328.3,y:137},0).wait(1));

	// Calque_6
	this.instance_2 = new lib.Symbole7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-378.9,812.3,1,1,0,0,0,198.1,198.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-0.2,x:-377.6,y:813.8},0).wait(1).to({rotation:-0.4,x:-376.4,y:815.3},0).wait(1).to({rotation:-0.7,x:-375.1,y:816.9},0).wait(1).to({rotation:-0.9,x:-373.9,y:818.4},0).wait(1).to({rotation:-1.1,x:-372.6,y:819.9},0).wait(1).to({rotation:-1.4,x:-371.4,y:821.5},0).wait(1).to({rotation:-1.6,x:-370.2,y:823},0).wait(1).to({rotation:-1.8,x:-368.9,y:824.6},0).wait(1).to({rotation:-2,x:-367.7,y:826.1},0).wait(1).to({rotation:-2.3,x:-366.4,y:827.7},0).wait(1).to({rotation:-2.5,x:-365.1,y:829.2},0).wait(1).to({rotation:-2.7,x:-363.9,y:830.8},0).wait(1).to({rotation:-2.9,x:-362.6,y:832.3},0).wait(1).to({rotation:-3.2,x:-361.4,y:833.9},0).wait(1).to({rotation:-3.4,x:-360.2,y:835.4},0).wait(1).to({rotation:-3.6,x:-358.9,y:837},0).wait(1).to({rotation:-3.8,x:-357.7,y:838.6},0).wait(1).to({rotation:-4.1,x:-356.4,y:840.1},0).wait(1).to({rotation:-4.3,x:-355.1,y:841.6},0).wait(1).to({rotation:-4.5,x:-353.9,y:843.2},0).wait(1).to({rotation:-4.7,x:-352.7,y:844.8},0).wait(1).to({rotation:-5,x:-351.4,y:846.3},0).wait(1).to({rotation:-5.2,x:-350.1,y:847.9},0).wait(1).to({rotation:-5.4,x:-348.9,y:849.4},0).wait(1).to({rotation:-5.7,x:-347.6,y:851},0).wait(1).to({rotation:-5.9,x:-346.4,y:852.6},0).wait(1).to({rotation:-6.1,x:-345.1,y:854.1},0).wait(1).to({rotation:-6.3,x:-343.8,y:855.7},0).wait(1).to({rotation:-6.6,x:-342.6,y:857.3},0).wait(1).to({rotation:-6.8,x:-341.3,y:858.8},0).wait(1).to({rotation:-7,x:-340.1,y:860.3},0).wait(1).to({rotation:-7.3,x:-338.8,y:861.9},0).wait(1).to({rotation:-7.5,x:-337.5,y:863.5},0).wait(1).to({rotation:-7.7,x:-336.3,y:865.1},0).wait(1).to({rotation:-7.9,x:-335,y:866.7},0).wait(1).to({rotation:-8.2,x:-333.7,y:868.2},0).wait(1).to({rotation:-8.4,x:-332.5,y:869.7},0).wait(1).to({rotation:-8.6,x:-331.2,y:871.4},0).wait(1).to({rotation:-8.9,x:-329.9,y:872.9},0).wait(1).to({rotation:-9.1,x:-328.7,y:874.5},0).wait(1).to({rotation:-9.3,x:-327.4,y:876.1},0).wait(1).to({rotation:-9.5,x:-326.2,y:877.6},0).wait(1).to({rotation:-9.8,x:-324.9,y:879.2},0).wait(1).to({rotation:-10,x:-323.6,y:880.8},0).wait(1).to({rotation:-10.2,x:-322.3,y:882.4},0).wait(1).to({rotation:-10.5,x:-321.1,y:883.9},0).wait(1).to({rotation:-10.7,x:-319.8,y:885.5},0).wait(1).to({rotation:-10.9,x:-318.5,y:887.1},0).wait(1).to({rotation:-11.2,x:-317.2,y:888.6},0).wait(1).to({rotation:-11.4,x:-316,y:890.2},0).wait(1).to({rotation:-11.6,x:-314.7,y:891.8},0).wait(1).to({rotation:-11.8,x:-313.4,y:893.4},0).wait(1).to({rotation:-12.1,x:-312.2,y:895},0).wait(1).to({rotation:-12.3,x:-310.9,y:896.5},0).wait(1).to({rotation:-12.5,x:-309.7,y:898.1},0).wait(1).to({rotation:-12.8,x:-308.3,y:899.7},0).wait(1).to({rotation:-13,x:-307.1,y:901.3},0).wait(1).to({rotation:-13.2,x:-305.8,y:902.9},0).wait(1).to({rotation:-13.5,x:-304.5,y:904.5},0).wait(1).to({rotation:-13.7,x:-303.3,y:906.1},0).wait(1).to({rotation:-13.9,x:-302,y:907.6},0).wait(1).to({rotation:-14.2,x:-300.7,y:909.3},0).wait(1).to({rotation:-14.4,x:-299.4,y:910.8},0).wait(1).to({rotation:-14.6,x:-298.1,y:912.5},0).wait(1).to({rotation:-14.9,x:-296.8,y:914},0).wait(1).to({rotation:-15.2,x:-294.4,y:915.2},0).wait(1).to({rotation:-15.6,x:-290.2,y:916},0).wait(1).to({rotation:-16,x:-286,y:916.7},0).wait(1).to({rotation:-16.5,x:-281.8,y:917.4},0).wait(1).to({rotation:-16.9,x:-277.6,y:918.1},0).wait(1).to({rotation:-17.3,x:-273.3,y:918.9},0).wait(1).to({rotation:-17.7,x:-269.1,y:919.6},0).wait(1).to({rotation:-18.2,x:-265,y:920.3},0).wait(1).to({rotation:-18.6,x:-260.8,y:921},0).wait(1).to({rotation:-19,x:-256.5,y:921.8},0).wait(1).to({rotation:-19.5,x:-252.3,y:922.5},0).wait(1).to({rotation:-19.9,x:-248.1,y:923.2},0).wait(1).to({rotation:-20.3,x:-243.9,y:923.9},0).wait(1).to({rotation:-20.7,x:-239.7,y:924.6},0).wait(1).to({rotation:-21.2,x:-235.4,y:925.4},0).wait(1).to({rotation:-21.6,x:-231.2,y:926.1},0).wait(1).to({rotation:-22,x:-227,y:926.8},0).wait(1).to({rotation:-22.5,x:-222.7,y:927.5},0).wait(1).to({rotation:-22.9,x:-218.5,y:928.3},0).wait(1).to({rotation:-23.3,x:-214.3,y:929},0).wait(1).to({rotation:-23.8,x:-210.1,y:929.7},0).wait(1).to({rotation:-24.2,x:-205.8,y:930.5},0).wait(1).to({rotation:-24.6,x:-201.6,y:931.2},0).wait(1).to({rotation:-25,x:-197.3,y:931.9},0).wait(1).to({rotation:-25.5,x:-193,y:932.6},0).wait(1).to({rotation:-25.9,x:-188.8,y:933.4},0).wait(1).to({rotation:-26.3,x:-184.6,y:934.1},0).wait(1).to({rotation:-26.8,x:-180.3,y:934.8},0).wait(1).to({rotation:-27.2,x:-176.1,y:935.5},0).wait(1).to({rotation:-27.6,x:-171.8,y:936.3},0).wait(1).to({rotation:-28.1,x:-167.5,y:937},0).wait(1).to({rotation:-28.5,x:-163.3,y:937.7},0).wait(1).to({rotation:-28.9,x:-159,y:938.5},0).wait(1).to({rotation:-29.4,x:-154.8,y:939.2},0).wait(1).to({rotation:-29.8,x:-150.5,y:940},0).wait(1).to({rotation:-30.2,x:-146.2,y:940.7},0).wait(1).to({rotation:-30.7,x:-142,y:941.4},0).wait(1).to({rotation:-31.1,x:-137.7,y:942.1},0).wait(1).to({rotation:-31.6,x:-133.5,y:942.9},0).wait(1).to({rotation:-32,x:-129.2,y:943.6},0).wait(1).to({rotation:-32.4,x:-124.9,y:944.3},0).wait(1).to({rotation:-32.9,x:-120.6,y:945.1},0).wait(1).to({rotation:-33.3,x:-116.3,y:945.8},0).wait(1).to({rotation:-33.7,x:-112.1,y:946.5},0).wait(1).to({rotation:-34.2,x:-107.8,y:947.3},0).wait(1).to({rotation:-34.6,x:-103.5,y:948},0).wait(1).to({rotation:-35,x:-99.2,y:948.7},0).wait(1).to({rotation:-35.5,x:-95,y:949.5},0).wait(1).to({rotation:-35.9,x:-90.6,y:950.2},0).wait(1).to({rotation:-36.3,x:-86.3,y:951},0).wait(1).to({rotation:-36.8,x:-82,y:951.7},0).wait(1).to({rotation:-37.2,x:-77.7,y:952.4},0).wait(1).to({rotation:-37.7,x:-73.4,y:953.2},0).wait(1).to({rotation:-38.1,x:-69.1,y:953.9},0).wait(1).to({rotation:-38.5,x:-64.9,y:954.7},0).wait(1).to({rotation:-39,x:-60.5,y:955.4},0).wait(1).to({rotation:-39.4,x:-56.2,y:956.1},0).wait(1).to({rotation:-39.9,x:-51.9,y:956.9},0).wait(1).to({rotation:-40.3,x:-47.6,y:957.6},0).wait(1).to({rotation:-40.7,x:-43.3,y:958.4},0).wait(1).to({rotation:-41.2,x:-39,y:959.1},0).wait(1).to({rotation:-41.6,x:-34.7,y:959.8},0).wait(1).to({rotation:-42.1,x:-30.3,y:960.6},0).wait(1).to({rotation:-42.5,x:-26,y:961.3},0).wait(1).to({rotation:-42.9,x:-21.6,y:962.1},0).wait(1).to({rotation:-43.4,x:-17.3,y:962.8},0).wait(1).to({rotation:-43.8,x:-13,y:963.6},0).wait(1).to({rotation:-44.3,x:-8.7,y:964.3},0).wait(1).to({rotation:-44.7,x:-4.4,y:965},0).wait(1).to({rotation:-45.1,x:0,y:965.8},0).wait(1).to({rotation:-45.6,x:4.3,y:966.5},0).wait(1).to({rotation:-46,x:8.6,y:967.3},0).wait(1).to({rotation:-46.5,x:13,y:968},0).wait(1).to({rotation:-46.9,x:17.3,y:968.8},0).wait(1).to({rotation:-47.3,x:21.7,y:969.5},0).wait(1).to({rotation:-47.8,x:26.1,y:970.2},0).wait(1).to({rotation:-48.2,x:30.4,y:971},0).wait(1).to({rotation:-48.7,x:34.7,y:971.8},0).wait(1).to({rotation:-49.1,x:39,y:972.5},0).wait(1).to({rotation:-49.6,x:43.4,y:973.3},0).wait(1).to({rotation:-50,x:47.8,y:974},0).wait(1).to({rotation:-50.4,x:52.2,y:974.7},0).wait(1).to({rotation:-50.9,x:56.5,y:975.5},0).wait(1).to({rotation:-51.3,x:60.9,y:976.2},0).wait(1).to({rotation:-51.8,x:65.2,y:977},0).wait(1).to({rotation:-52.2,x:69.6,y:977.7},0).wait(1).to({rotation:-52.7,x:74,y:978.5},0).wait(1).to({rotation:-53.1,x:78.3,y:979.2},0).wait(1).to({rotation:-53.6,x:82.7,y:980},0).wait(1).to({rotation:-54,x:87.1,y:980.7},0).wait(1).to({rotation:-54.5,x:91.5,y:981.6},0).wait(1).to({rotation:-54.9,x:95.8,y:982.3},0).wait(1).to({rotation:-55.3,x:100.2,y:983},0).wait(1).to({rotation:-55.8,x:104.6,y:983.8},0).wait(1).to({rotation:-56.2,x:109,y:984.5},0).wait(1).to({rotation:-56.7,x:113.4,y:985.2},0).wait(1).to({rotation:-57.1,x:117.8,y:986},0).wait(1).to({rotation:-57.6,x:122.1,y:986.8},0).wait(1).to({rotation:-58,x:126.6,y:987.5},0).wait(1).to({rotation:-58.5,x:131,y:988.3},0).wait(1).to({rotation:-58.9,x:135.3,y:989},0).wait(1).to({rotation:-59.4,x:139.8,y:989.8},0).wait(1).to({rotation:-59.8,x:144.2,y:990.5},0).wait(1));

	// Calque_5
	this.instance_3 = new lib.Symbole6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-664.3,491.7,0.999,0.999,-29.9,0,0,148.7,148.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:149,regY:149,scaleX:1,scaleY:1,x:-663.5,y:489.2},0).wait(1).to({rotation:-29.8,x:-663.2,y:486.6},0).wait(1).to({rotation:-29.7,x:-662.8,y:484.1},0).wait(1).to({x:-662.3,y:481.7},0).wait(1).to({rotation:-29.6,x:-661.9,y:479.1},0).wait(1).to({rotation:-29.5,x:-661.5,y:476.6},0).wait(1).to({rotation:-29.4,x:-661.1,y:474},0).wait(1).to({rotation:-29.3,x:-660.7,y:471.5},0).wait(1).to({rotation:-29.2,x:-660.3,y:469},0).wait(1).to({rotation:-29.1,x:-659.9,y:466.5},0).wait(1).to({x:-659.5,y:464},0).wait(1).to({rotation:-29,x:-659.1,y:461.5},0).wait(1).to({rotation:-28.9,x:-658.7,y:458.9},0).wait(1).to({rotation:-28.8,x:-658.3,y:456.4},0).wait(1).to({rotation:-28.7,x:-657.9,y:453.9},0).wait(1).to({rotation:-28.6,x:-657.4,y:451.3},0).wait(1).to({rotation:-28.5,x:-657,y:448.8},0).wait(1).to({rotation:-28.4,x:-656.6,y:446.2},0).wait(1).to({x:-656.2,y:443.7},0).wait(1).to({rotation:-28.3,x:-655.8,y:441.2},0).wait(1).to({rotation:-28.2,x:-655.4,y:438.7},0).wait(1).to({rotation:-28.1,x:-655,y:436.1},0).wait(1).to({rotation:-28,x:-654.6,y:433.6},0).wait(1).to({rotation:-27.9,x:-654.2,y:431},0).wait(1).to({rotation:-27.8,x:-653.8,y:428.5},0).wait(1).to({x:-653.4,y:426},0).wait(1).to({rotation:-27.7,x:-653,y:423.4},0).wait(1).to({rotation:-27.6,x:-652.6,y:420.9},0).wait(1).to({rotation:-27.5,x:-652.2,y:418.3},0).wait(1).to({rotation:-27.4,x:-651.8,y:415.8},0).wait(1).to({rotation:-27.3,x:-651.3,y:413.2},0).wait(1).to({rotation:-27.2,x:-650.9,y:410.7},0).wait(1).to({rotation:-27.1,x:-650.5,y:408.1},0).wait(1).to({x:-650.1,y:405.6},0).wait(1).to({rotation:-27,x:-649.7,y:403},0).wait(1).to({rotation:-26.9,x:-649.3,y:400.5},0).wait(1).to({rotation:-26.8,x:-648.9,y:397.9},0).wait(1).to({rotation:-26.7,x:-648.5,y:395.4},0).wait(1).to({rotation:-26.6,x:-648.1,y:392.8},0).wait(1).to({rotation:-26.5,x:-647.7,y:390.3},0).wait(1).to({rotation:-26.4,x:-647.3,y:387.7},0).wait(1).to({x:-646.8,y:385.1},0).wait(1).to({rotation:-26.3,x:-646.4,y:382.6},0).wait(1).to({rotation:-26.2,x:-646,y:380},0).wait(1).to({rotation:-26.1,x:-645.6,y:377.4},0).wait(1).to({rotation:-26,x:-645.2,y:374.8},0).wait(1).to({rotation:-25.9,x:-644.8,y:372.3},0).wait(1).to({rotation:-25.8,x:-644.4,y:369.7},0).wait(1).to({rotation:-25.7,x:-643.9,y:367.1},0).wait(1).to({x:-643.6,y:364.6},0).wait(1).to({rotation:-25.6,x:-643.1,y:362},0).wait(1).to({rotation:-25.5,x:-642.7,y:359.4},0).wait(1).to({rotation:-25.4,x:-642.3,y:356.8},0).wait(1).to({rotation:-25.3,x:-641.9,y:354.3},0).wait(1).to({rotation:-25.2,x:-641.5,y:351.7},0).wait(1).to({rotation:-25.1,x:-641,y:349.1},0).wait(1).to({rotation:-25,x:-640.7,y:346.6},0).wait(1).to({x:-640.2,y:344},0).wait(1).to({rotation:-24.9,x:-639.8,y:341.4},0).wait(1).to({rotation:-24.8,x:-639.4,y:338.8},0).wait(1).to({rotation:-24.7,x:-638.9,y:336.2},0).wait(1).to({rotation:-24.6,x:-638.6,y:333.6},0).wait(1).to({rotation:-24.5,x:-638.2,y:331},0).wait(1).to({rotation:-24.4,x:-637.8,y:328.4},0).wait(1).to({rotation:-24.3,x:-637.3,y:325.8},0).wait(1).to({rotation:-24.2,x:-636.9,y:323.2},0).wait(1).to({x:-636.5,y:320.6},0).wait(1).to({rotation:-24.1,x:-636.1,y:318.1},0).wait(1).to({rotation:-24,x:-635.7,y:315.5},0).wait(1).to({rotation:-23.9,x:-635.2,y:312.9},0).wait(1).to({rotation:-23.8,x:-634.8,y:310.2},0).wait(1).to({rotation:-23.7,x:-634.4,y:307.6},0).wait(1).to({rotation:-23.6,x:-634,y:305.1},0).wait(1).to({rotation:-23.5,x:-633.6,y:302.5},0).wait(1).to({x:-633.1,y:299.9},0).wait(1).to({rotation:-23.4,x:-632.7,y:297.2},0).wait(1).to({rotation:-23.3,x:-632.3,y:294.7},0).wait(1).to({rotation:-23.2,x:-631.9,y:292},0).wait(1).to({rotation:-23.1,x:-631.5,y:289.4},0).wait(1).to({rotation:-23,x:-631,y:286.8},0).wait(1).to({rotation:-22.9,x:-630.6,y:284.2},0).wait(1).to({rotation:-22.8,x:-630.2,y:281.6},0).wait(1).to({rotation:-22.7,x:-629.8,y:278.9},0).wait(1).to({rotation:-22.6,x:-629.4,y:276.3},0).wait(1).to({x:-629,y:273.8},0).wait(1).to({rotation:-22.5,x:-628.5,y:271.1},0).wait(1).to({rotation:-22.4,x:-628.1,y:268.5},0).wait(1).to({rotation:-22.3,x:-627.7,y:265.9},0).wait(1).to({rotation:-22.2,x:-627.3,y:263.3},0).wait(1).to({rotation:-22.1,x:-626.8,y:260.6},0).wait(1).to({rotation:-22,x:-626.4,y:258.1},0).wait(1).to({rotation:-21.9,x:-626,y:255.4},0).wait(1).to({rotation:-21.8,x:-625.6,y:252.8},0).wait(1).to({x:-625.2,y:250.2},0).wait(1).to({rotation:-21.7,x:-624.8,y:247.5},0).wait(1).to({rotation:-21.6,x:-624.3,y:244.9},0).wait(1).to({rotation:-21.5,x:-623.9,y:242.3},0).wait(1).to({rotation:-21.4,x:-623.5,y:239.6},0).wait(1).to({rotation:-21.3,x:-623.1,y:237},0).wait(1).to({rotation:-21.2,x:-622.7,y:234.4},0).wait(1).to({rotation:-21.1,x:-622.2,y:231.7},0).wait(1).to({rotation:-21,x:-621.8,y:229},0).wait(1).to({rotation:-20.9,x:-621.4,y:226.5},0).wait(1).to({x:-620.9,y:223.8},0).wait(1).to({rotation:-20.8,x:-620.6,y:221.2},0).wait(1).to({rotation:-20.7,x:-620.1,y:218.5},0).wait(1).to({rotation:-20.6,x:-619.6,y:215.9},0).wait(1).to({rotation:-20.5,x:-619.3,y:213.2},0).wait(1).to({rotation:-20.4,x:-618.8,y:210.6},0).wait(1).to({rotation:-20.3,x:-618.4,y:207.9},0).wait(1).to({rotation:-20.2,x:-618,y:205.3},0).wait(1).to({rotation:-20.1,x:-617.5,y:202.6},0).wait(1).to({rotation:-20,x:-617.1,y:200},0).wait(1).to({x:-616.7,y:197.3},0).wait(1).to({rotation:-19.9,x:-616.3,y:194.7},0).wait(1).to({rotation:-19.8,x:-615.9,y:192},0).wait(1).to({rotation:-19.7,x:-615.4,y:189.4},0).wait(1).to({rotation:-19.6,x:-615,y:186.7},0).wait(1).to({rotation:-19.5,x:-614.6,y:184},0).wait(1).to({rotation:-19.4,x:-614.1,y:181.4},0).wait(1).to({rotation:-19.3,x:-613.7,y:178.7},0).wait(1).to({rotation:-19.2,x:-613.3,y:176.1},0).wait(1).to({rotation:-19.1,x:-612.9,y:173.4},0).wait(1).to({rotation:-19,x:-612.4,y:170.8},0).wait(1).to({x:-612,y:168},0).wait(1).to({rotation:-18.9,x:-611.6,y:165.4},0).wait(1).to({rotation:-18.8,x:-611.2,y:162.7},0).wait(1).to({rotation:-18.7,x:-610.7,y:160.1},0).wait(1).to({rotation:-18.6,x:-610.3,y:157.4},0).wait(1).to({rotation:-18.5,x:-609.9,y:154.8},0).wait(1).to({rotation:-18.4,x:-609.4,y:152.1},0).wait(1).to({rotation:-18.3,x:-609,y:149.4},0).wait(1).to({rotation:-18.2,x:-608.5,y:146.7},0).wait(1).to({rotation:-18.1,x:-608.2,y:144},0).wait(1).to({rotation:-18,x:-607.7,y:141.3},0).wait(1).to({rotation:-17.9,x:-607.3,y:138.7},0).wait(1).to({x:-606.9,y:135.9},0).wait(1).to({rotation:-17.8,x:-606.4,y:133.4},0).wait(1).to({rotation:-17.7,x:-606,y:130.6},0).wait(1).to({rotation:-17.6,x:-605.6,y:128},0).wait(1).to({rotation:-17.5,x:-605.1,y:125.2},0).wait(1).to({rotation:-17.4,x:-604.7,y:122.6},0).wait(1).to({rotation:-17.3,x:-604.2,y:119.9},0).wait(1).to({rotation:-17.2,x:-603.9,y:117.2},0).wait(1).to({rotation:-17.1,x:-603.4,y:114.5},0).wait(1).to({rotation:-17,x:-603,y:111.8},0).wait(1).to({rotation:-16.9,x:-602.5,y:109.1},0).wait(1).to({rotation:-16.8,x:-602.1,y:106.4},0).wait(1).to({x:-601.7,y:103.7},0).wait(1).to({rotation:-16.7,x:-601.3,y:101.1},0).wait(1).to({rotation:-16.6,x:-600.8,y:98.4},0).wait(1).to({rotation:-16.5,x:-600.4,y:95.7},0).wait(1).to({rotation:-16.4,x:-599.9,y:93},0).wait(1).to({rotation:-16.3,x:-599.5,y:90.3},0).wait(1).to({rotation:-16.2,x:-599.1,y:87.6},0).wait(1).to({rotation:-16.1,x:-598.6,y:84.9},0).wait(1).to({rotation:-16,x:-598.2,y:82.2},0).wait(1).to({rotation:-15.9,x:-597.7,y:79.5},0).wait(1).to({rotation:-15.8,x:-597.3,y:76.8},0).wait(1).to({rotation:-15.7,x:-596.9,y:74},0).wait(1).to({rotation:-15.6,x:-596.4,y:71.3},0).wait(1).to({x:-596,y:68.6},0).wait(1).to({rotation:-15.5,x:-595.6,y:65.9},0).wait(1).to({rotation:-15.4,x:-595.2,y:63.2},0).wait(1).to({rotation:-15.3,x:-594.7,y:60.5},0).wait(1).to({rotation:-15.2,x:-594.3,y:57.7},0).wait(1).to({rotation:-15.1,x:-593.9,y:55},0).wait(1).to({rotation:-15,x:-593.5,y:52.3},0).wait(1));

	// Calque_4
	this.instance_4 = new lib.Symbole5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,20.3,0.788,0.788,-29.8,0,0,214.6,212.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:216.7,regY:216.7,scaleX:0.79,scaleY:0.79,rotation:-29.6,x:-42.3,y:24.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-29.4,x:-43.3,y:26.6},0).wait(1).to({rotation:-29.1,x:-44.3,y:28.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-28.9,x:-45.3,y:31},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-28.7,x:-46.3,y:33.3},0).wait(1).to({rotation:-28.4,x:-47.2,y:35.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-28.2,x:-48.2,y:37.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-28,x:-49.2,y:39.9},0).wait(1).to({rotation:-27.7,x:-50.2,y:42.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-27.5,x:-51.2,y:44.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-27.3,x:-52.2,y:46.6},0).wait(1).to({rotation:-27.1,x:-53.2,y:48.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-26.8,x:-54.2,y:51},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-26.6,x:-55.2,y:53.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-26.4,x:-56.2,y:55.5},0).wait(1).to({rotation:-26.1,x:-57.2,y:57.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25.9,x:-58.2,y:59.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25.7,x:-59.2,y:62.2},0).wait(1).to({rotation:-25.4,x:-60.2,y:64.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25.2,x:-61.2,y:66.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25,x:-62.2,y:68.9},0).wait(1).to({rotation:-24.7,x:-63.2,y:71.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-24.5,x:-64.3,y:73.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-24.3,x:-65.2,y:75.6},0).wait(1).to({rotation:-24,x:-66.2,y:77.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-23.8,x:-67.2,y:80.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-23.6,x:-68.3,y:82.3},0).wait(1).to({rotation:-23.3,x:-69.2,y:84.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-23.1,x:-70.3,y:86.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-22.9,x:-71.3,y:89},0).wait(1).to({rotation:-22.6,x:-72.3,y:91.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-22.4,x:-73.3,y:93.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-22.2,x:-74.3,y:95.8},0).wait(1).to({rotation:-21.9,x:-75.3,y:98},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-21.7,x:-76.3,y:100.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-21.5,x:-77.3,y:102.5},0).wait(1).to({rotation:-21.2,x:-78.3,y:104.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-21,x:-79.3,y:107},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-20.8,x:-80.3,y:109.3},0).wait(1).to({rotation:-20.5,x:-81.3,y:111.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-20.3,x:-82.3,y:113.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-20.1,x:-83.3,y:116.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.8,x:-84.4,y:118.3},0).wait(1).to({rotation:-19.6,x:-85.4,y:120.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.3,x:-86.4,y:122.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.1,x:-87.4,y:125.1},0).wait(1).to({rotation:-18.9,x:-88.4,y:127.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-18.6,x:-89.4,y:129.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-18.4,x:-90.4,y:131.9},0).wait(1).to({rotation:-18.2,x:-91.5,y:134.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-17.9,x:-92.5,y:136.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-17.7,x:-93.5,y:138.7},0).wait(1).to({rotation:-17.5,x:-94.6,y:141},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-17.2,x:-95.6,y:143.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-17,x:-96.5,y:145.5},0).wait(1).to({rotation:-16.8,x:-97.6,y:147.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-16.5,x:-98.6,y:150.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-16.3,x:-99.6,y:152.3},0).wait(1).to({rotation:-16,x:-100.7,y:154.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-15.8,x:-101.7,y:156.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-15.6,x:-102.7,y:159.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-15.3,x:-103.7,y:161.4},0).wait(1).to({rotation:-15.1,x:-104.8,y:163.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-14.9,x:-105.8,y:166},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-14.6,x:-106.8,y:168.3},0).wait(1).to({rotation:-14.4,x:-107.8,y:170.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-14.1,x:-108.9,y:172.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-13.9,x:-109.9,y:175.2},0).wait(1).to({rotation:-13.7,x:-110.9,y:177.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-13.4,x:-111.9,y:179.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-13.2,x:-112.9,y:182},0).wait(1).to({rotation:-13,x:-114,y:184.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-12.7,x:-115,y:186.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-12.5,x:-116.1,y:188.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-12.2,x:-117.1,y:191.2},0).wait(1).to({rotation:-12,x:-118.1,y:193.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-11.8,x:-119.1,y:195.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-11.5,x:-120.2,y:198},0).wait(1).to({rotation:-11.3,x:-121.2,y:200.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-11,x:-122.2,y:202.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-10.8,x:-123.3,y:204.9},0).wait(1).to({rotation:-10.6,x:-124.3,y:207.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-10.3,x:-125.3,y:209.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-10.1,x:-126.4,y:211.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.8,x:-127.4,y:214.1},0).wait(1).to({rotation:-9.6,x:-128.5,y:216.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.4,x:-129.5,y:218.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.1,x:-130.5,y:221.1},0).wait(1).to({rotation:-8.9,x:-131.6,y:223.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8.6,x:-132.6,y:225.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8.4,x:-133.6,y:228},0).wait(1).to({rotation:-8.2,x:-134.7,y:230.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-7.9,x:-135.7,y:232.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-7.7,x:-136.8,y:234.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-7.4,x:-137.8,y:237.2},0).wait(1).to({rotation:-7.2,x:-138.9,y:239.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-7,x:-139.9,y:241.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-6.7,x:-140.9,y:244.2},0).wait(1).to({rotation:-6.5,x:-142,y:246.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-6.1,x:-143,y:248.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-5.6,x:-144.1,y:251.2},0).wait(1).to({rotation:-5.1,x:-145.2,y:253.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-4.6,x:-146.2,y:255.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-4,x:-147.3,y:258.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-3.5,x:-148.3,y:260.5},0).wait(1).to({rotation:-3,x:-149.4,y:262.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-2.5,x:-150.5,y:265.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-1.9,x:-151.6,y:267.5},0).wait(1).to({rotation:-1.4,x:-152.6,y:269.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-0.9,x:-153.7,y:272.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-0.4,x:-154.7,y:274.5},0).wait(1).to({rotation:0.2,x:-155.8,y:276.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:0.7,x:-156.9,y:279.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.2,x:-158,y:281.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.7,x:-159,y:283.9},0).wait(1).to({rotation:2.3,x:-160.1,y:286.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:2.8,x:-161.2,y:288.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:3.3,x:-162.3,y:290.9},0).wait(1).to({rotation:3.9,x:-163.3,y:293.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:4.4,x:-164.4,y:295.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:4.9,x:-165.5,y:298},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:5.4,x:-166.6,y:300.3},0).wait(1).to({rotation:6,x:-167.7,y:302.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:6.5,x:-168.7,y:305},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:7,x:-169.8,y:307.4},0).wait(1).to({rotation:7.6,x:-170.9,y:309.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:8.1,x:-171.9,y:312},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:8.6,x:-173,y:314.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:9.1,x:-174.1,y:316.8},0).wait(1).to({rotation:9.7,x:-175.2,y:319.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:10.2,x:-176.3,y:321.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:10.7,x:-177.4,y:323.9},0).wait(1).to({rotation:11.3,x:-178.4,y:326.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:11.8,x:-179.5,y:328.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:12.3,x:-180.6,y:331},0).wait(1).to({rotation:12.9,x:-181.7,y:333.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:13.4,x:-182.8,y:335.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:13.9,x:-183.8,y:338},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:14.5,x:-184.9,y:340.4},0).wait(1).to({rotation:15,x:-186,y:342.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:15.5,x:-187.1,y:345},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:16.1,x:-188.2,y:347.5},0).wait(1).to({rotation:16.6,x:-189.3,y:349.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:17.1,x:-190.4,y:352.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:17.7,x:-191.5,y:354.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:18.2,x:-192.6,y:356.9},0).wait(1).to({rotation:18.7,x:-193.7,y:359.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:19.3,x:-194.8,y:361.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:19.8,x:-195.8,y:364},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:20.3,x:-197,y:366.4},0).wait(1).to({rotation:20.9,x:-198,y:368.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:21.4,x:-199.2,y:371.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:21.9,x:-200.2,y:373.5},0).wait(1).to({rotation:22.5,x:-201.3,y:375.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:23,x:-202.4,y:378.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:23.5,x:-203.5,y:380.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:24.1,x:-204.7,y:383},0).wait(1).to({rotation:24.6,x:-205.7,y:385.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:25.2,x:-206.8,y:387.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:25.7,x:-207.9,y:390.2},0).wait(1).to({rotation:26.2,x:-209,y:392.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:26.8,x:-210.1,y:394.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:27.3,x:-211.2,y:397.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:27.8,x:-212.3,y:399.7},0).wait(1).to({rotation:28.4,x:-213.4,y:402},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:28.9,x:-214.6,y:404.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:29.5,x:-215.7,y:406.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:30,x:-216.7,y:409.2},0).wait(1));

	// Calque_11
	this.instance_5 = new lib.Symbole12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1028.9,358.5,0.999,0.999,-29.9,0,0,529.5,433.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:434,scaleX:1,scaleY:1,rotation:-29.3,x:1019.6,y:363.2},0).wait(1).to({rotation:-28.5,x:1010.3,y:367.9},0).wait(1).to({rotation:-27.8,x:1001,y:372.5},0).wait(1).to({rotation:-27.1,x:991.7,y:377.2},0).wait(1).to({rotation:-26.4,x:982.4,y:381.8},0).wait(1).to({rotation:-25.6,x:973.1,y:386.4},0).wait(1).to({rotation:-24.9,x:963.8,y:391},0).wait(1).to({rotation:-24.2,x:954.5,y:395.7},0).wait(1).to({rotation:-23.5,x:945.2,y:400.4},0).wait(1).to({rotation:-22.7,x:935.9,y:405},0).wait(1).to({rotation:-22,x:926.6,y:409.6},0).wait(1).to({rotation:-21.3,x:917.3,y:414.2},0).wait(1).to({rotation:-20.5,x:908,y:418.9},0).wait(1).to({rotation:-19.8,x:898.6,y:423.6},0).wait(1).to({rotation:-19.1,x:889.3,y:428.2},0).wait(1).to({rotation:-18.4,x:880,y:432.9},0).wait(1).to({rotation:-17.6,x:870.8,y:437.5},0).wait(1).to({rotation:-16.9,x:861.4,y:442.1},0).wait(1).to({rotation:-16.2,x:852.1,y:446.8},0).wait(1).to({rotation:-15.5,x:842.8,y:451.4},0).wait(1).to({rotation:-14.7,x:833.5,y:456},0).wait(1).to({rotation:-14,x:824.2,y:460.7},0).wait(1).to({rotation:-13.3,x:814.9,y:465.3},0).wait(1).to({rotation:-12.6,x:805.6,y:469.9},0).wait(1).to({rotation:-11.8,x:796.3,y:474.6},0).wait(1).to({rotation:-11.1,x:787,y:479.2},0).wait(1).to({rotation:-10.4,x:777.7,y:483.9},0).wait(1).to({rotation:-9.6,x:768.4,y:488.5},0).wait(1).to({rotation:-8.9,x:759.1,y:493.2},0).wait(1).to({rotation:-8.2,x:749.8,y:497.8},0).wait(1).to({rotation:-7.5,x:740.5,y:502.4},0).wait(1).to({rotation:-6.7,x:731.2,y:507.1},0).wait(1).to({rotation:-6,x:721.9,y:511.7},0).wait(1).to({rotation:-5.3,x:712.6,y:516.3},0).wait(1).to({rotation:-4.6,x:703.2,y:521},0).wait(1).to({rotation:-3.8,x:693.9,y:525.7},0).wait(1).to({rotation:-3.1,x:684.6,y:530.3},0).wait(1).to({rotation:-2.4,x:675.3,y:534.9},0).wait(1).to({rotation:-1.7,x:666,y:539.6},0).wait(1).to({rotation:-0.9,x:656.7,y:544.2},0).wait(1).to({rotation:-0.2,x:647.4,y:548.9},0).wait(1).to({rotation:0.5,x:638.1,y:553.5},0).wait(1).to({rotation:1.3,x:628.8,y:558.1},0).wait(1).to({rotation:2,x:619.5,y:562.8},0).wait(1).to({rotation:2.7,x:610.2,y:567.4},0).wait(1).to({rotation:3.4,x:600.9,y:572},0).wait(1).to({rotation:4.2,x:591.6,y:576.7},0).wait(1).to({rotation:4.9,x:582.2,y:581.3},0).wait(1).to({rotation:5.6,x:572.9,y:585.9},0).wait(1).to({rotation:6.3,x:563.7,y:590.6},0).wait(1).to({rotation:7.1,x:554.4,y:595.3},0).wait(1).to({rotation:7.8,x:545,y:599.9},0).wait(1).to({rotation:8.5,x:535.7,y:604.5},0).wait(1).to({rotation:9.3,x:526.4,y:609.2},0).wait(1).to({rotation:10,x:517.1,y:613.8},0).wait(1).to({rotation:10.7,x:507.9,y:618.4},0).wait(1).to({rotation:11.4,x:498.5,y:623.1},0).wait(1).to({rotation:12.2,x:489.2,y:627.7},0).wait(1).to({rotation:12.9,x:479.9,y:632.4},0).wait(1).to({rotation:13.6,x:470.6,y:637},0).wait(1).to({rotation:14.3,x:461.3,y:641.7},0).wait(1).to({rotation:15.1,x:452,y:646.3},0).wait(1).to({rotation:15.8,x:442.7,y:650.9},0).wait(1).to({rotation:16.5,x:433.4,y:655.6},0).wait(1).to({rotation:17.2,x:424.1,y:660.2},0).wait(1).to({rotation:18,x:414.8,y:664.8},0).wait(1).to({rotation:18.7,x:405.5,y:669.5},0).wait(1).to({rotation:19.4,x:396.2,y:674.1},0).wait(1).to({rotation:20.2,x:386.8,y:678.7},0).wait(1).to({rotation:20.9,x:377.5,y:683.4},0).wait(1).to({rotation:21.6,x:368.3,y:688},0).wait(1).to({rotation:22.3,x:358.9,y:692.7},0).wait(1).to({rotation:23.1,x:349.7,y:697.3},0).wait(1).to({rotation:23.8,x:340.3,y:702},0).wait(1).to({rotation:24.5,x:331,y:706.6},0).wait(1).to({rotation:25.2,x:321.7,y:711.2},0).wait(1).to({rotation:26,x:312.4,y:715.8},0).wait(1).to({rotation:26.7,x:303.1,y:720.5},0).wait(1).to({rotation:27.4,x:293.8,y:725.2},0).wait(1).to({rotation:28.2,x:284.5,y:729.8},0).wait(1).to({rotation:28.9,x:275.2,y:734.4},0).wait(1).to({rotation:29.6,x:265.9,y:739.1},0).wait(1).to({rotation:30.3,x:256.6,y:743.7},0).wait(1).to({rotation:31.1,x:247.3,y:748.3},0).wait(1).to({rotation:31.8,x:238,y:753},0).wait(1).to({rotation:32.5,x:228.7,y:757.7},0).wait(1).to({rotation:33.2,x:219.3,y:762.2},0).wait(1).to({rotation:34,x:210.1,y:766.9},0).wait(1).to({rotation:34.7,x:200.7,y:771.5},0).wait(1).to({rotation:35.4,x:191.5,y:776.2},0).wait(1).to({rotation:36.1,x:182.1,y:780.8},0).wait(1).to({rotation:36.9,x:172.9,y:785.5},0).wait(1).to({rotation:37.6,x:163.5,y:790.1},0).wait(1).to({rotation:38.3,x:154.2,y:794.7},0).wait(1).to({rotation:39.1,x:144.9,y:799.4},0).wait(1).to({rotation:39.8,x:135.6,y:804},0).wait(1).to({rotation:40.5,x:126.3,y:808.7},0).wait(1).to({rotation:41.2,x:117,y:813.3},0).wait(1).to({rotation:42,x:107.7,y:817.9},0).wait(1).to({rotation:42.7,x:98.4,y:822.6},0).wait(1).to({rotation:43.4,x:89.1,y:827.2},0).wait(1).to({rotation:44.1,x:79.8,y:831.8},0).wait(1).to({rotation:44.9,x:70.4,y:836.5},0).wait(1).to({rotation:45.6,x:61.2,y:841.2},0).wait(1).to({rotation:46.3,x:51.8,y:845.8},0).wait(1).to({rotation:47,x:42.6,y:850.4},0).wait(1).to({rotation:47.8,x:33.3,y:855},0).wait(1).to({rotation:48.5,x:24,y:859.7},0).wait(1).to({rotation:49.2,x:14.7,y:864.3},0).wait(1).to({rotation:50,x:5.4,y:868.9},0).wait(1).to({rotation:50.7,x:-3.9,y:873.6},0).wait(1).to({rotation:51.4,x:-13.2,y:878.2},0).wait(1).to({rotation:52.1,x:-22.5,y:882.9},0).wait(1).to({rotation:52.9,x:-31.9,y:887.5},0).wait(1).to({rotation:53.6,x:-41.1,y:892.2},0).wait(1).to({rotation:54.3,x:-50.4,y:896.8},0).wait(1).to({rotation:55,x:-59.8,y:901.5},0).wait(1).to({rotation:55.8,x:-69,y:906.1},0).wait(1).to({rotation:56.5,x:-78.4,y:910.7},0).wait(1).to({rotation:57.2,x:-87.6,y:915.4},0).wait(1).to({rotation:58,x:-97,y:920},0).wait(1).to({rotation:58.7,x:-106.3,y:924.6},0).wait(1).to({rotation:59.4,x:-115.6,y:929.3},0).wait(1).to({rotation:60.1,x:-124.9,y:933.9},0).wait(1).to({rotation:60.9,x:-134.2,y:938.5},0).wait(1).to({rotation:61.6,x:-143.5,y:943.2},0).wait(1).to({rotation:62.3,x:-152.8,y:947.8},0).wait(1).to({rotation:63,x:-162.1,y:952.4},0).wait(1).to({rotation:63.8,x:-171.4,y:957.1},0).wait(1).to({rotation:64.5,x:-180.7,y:961.8},0).wait(1).to({rotation:65.2,x:-190,y:966.4},0).wait(1).to({rotation:65.9,x:-199.3,y:971},0).wait(1).to({rotation:66.7,x:-208.6,y:975.6},0).wait(1).to({rotation:67.4,x:-218,y:980.3},0).wait(1).to({rotation:68.1,x:-227.2,y:985},0).wait(1).to({rotation:68.9,x:-236.6,y:989.6},0).wait(1).to({rotation:69.6,x:-245.9,y:994.2},0).wait(1).to({rotation:70.3,x:-255.1,y:998.9},0).wait(1).to({rotation:71,x:-264.5,y:1003.5},0).wait(1).to({rotation:71.8,x:-273.8,y:1008.1},0).wait(1).to({rotation:72.5,x:-283.1,y:1012.8},0).wait(1).to({rotation:73.2,x:-292.3,y:1017.4},0).wait(1).to({rotation:73.9,x:-301.6,y:1022.1},0).wait(1).to({rotation:74.7,x:-310.9,y:1026.7},0).wait(1).to({rotation:75.4,x:-320.2,y:1031.3},0).wait(1).to({rotation:76.1,x:-329.6,y:1036},0).wait(1).to({rotation:76.9,x:-338.9,y:1040.6},0).wait(1).to({rotation:77.6,x:-348.2,y:1045.2},0).wait(1).to({rotation:78.3,x:-357.5,y:1049.9},0).wait(1).to({rotation:79,x:-366.8,y:1054.5},0).wait(1).to({rotation:79.8,x:-376.1,y:1059.1},0).wait(1).to({rotation:80.5,x:-385.4,y:1063.8},0).wait(1).to({rotation:81.2,x:-394.7,y:1068.4},0).wait(1).to({rotation:81.9,x:-404,y:1073},0).wait(1).to({rotation:82.7,x:-413.3,y:1077.7},0).wait(1).to({rotation:83.4,x:-422.6,y:1082.4},0).wait(1).to({rotation:84.1,x:-431.9,y:1086.9},0).wait(1).to({rotation:84.8,x:-441.2,y:1091.6},0).wait(1).to({rotation:85.6,x:-450.5,y:1096.2},0).wait(1).to({rotation:86.3,x:-459.8,y:1100.9},0).wait(1).to({rotation:87,x:-469.1,y:1105.5},0).wait(1).to({rotation:87.8,x:-478.4,y:1110.2},0).wait(1).to({rotation:88.5,x:-487.7,y:1114.8},0).wait(1).to({rotation:89.2,x:-497.1,y:1119.4},0).wait(1).to({rotation:89.9,x:-506.3,y:1124.1},0).wait(1).to({rotation:90.7,x:-515.6,y:1128.7},0).wait(1).to({rotation:91.4,x:-524.9,y:1133.4},0).wait(1).to({rotation:92.1,x:-534.3,y:1138},0).wait(1));

	// Calque_12
	this.instance_6 = new lib.Symbole13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1133,885,1,1,0,0,0,500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:-0.4,x:-1121.7,y:886.7},0).wait(1).to({rotation:-0.8,x:-1110.5,y:888.4},0).wait(1).to({rotation:-1.2,x:-1099.3,y:890},0).wait(1).to({rotation:-1.6,x:-1088,y:891.7},0).wait(1).to({rotation:-1.9,x:-1076.8,y:893.4},0).wait(1).to({rotation:-2.3,x:-1065.6,y:895.1},0).wait(1).to({rotation:-2.7,x:-1054.3,y:896.8},0).wait(1).to({rotation:-3.1,x:-1043.1,y:898.4},0).wait(1).to({rotation:-3.5,x:-1031.9,y:900.1},0).wait(1).to({rotation:-3.9,x:-1020.7,y:901.8},0).wait(1).to({rotation:-4.3,x:-1009.4,y:903.5},0).wait(1).to({rotation:-4.7,x:-998.2,y:905.2},0).wait(1).to({rotation:-5.1,x:-987,y:906.9},0).wait(1).to({rotation:-5.5,x:-975.7,y:908.5},0).wait(1).to({rotation:-5.8,x:-964.5,y:910.2},0).wait(1).to({rotation:-6.2,x:-953.3,y:911.9},0).wait(1).to({rotation:-6.6,x:-942,y:913.6},0).wait(1).to({rotation:-7,x:-930.8,y:915.3},0).wait(1).to({rotation:-7.4,x:-919.5,y:916.9},0).wait(1).to({rotation:-7.8,x:-908.3,y:918.6},0).wait(1).to({rotation:-8.2,x:-897.2,y:920.3},0).wait(1).to({rotation:-8.6,x:-885.9,y:922},0).wait(1).to({rotation:-9,x:-874.7,y:923.7},0).wait(1).to({rotation:-9.4,x:-863.4,y:925.3},0).wait(1).to({rotation:-9.7,x:-852.2,y:927},0).wait(1).to({rotation:-10.1,x:-841,y:928.7},0).wait(1).to({rotation:-10.5,x:-829.7,y:930.4},0).wait(1).to({rotation:-10.9,x:-818.5,y:932.1},0).wait(1).to({rotation:-11.3,x:-807.3,y:933.7},0).wait(1).to({rotation:-11.7,x:-796.1,y:935.4},0).wait(1).to({rotation:-12.1,x:-784.8,y:937.1},0).wait(1).to({rotation:-12.5,x:-773.6,y:938.8},0).wait(1).to({rotation:-12.9,x:-762.4,y:940.5},0).wait(1).to({rotation:-13.2,x:-751.1,y:942.2},0).wait(1).to({rotation:-13.6,x:-739.9,y:943.8},0).wait(1).to({rotation:-14,x:-728.7,y:945.5},0).wait(1).to({rotation:-14.4,x:-717.5,y:947.2},0).wait(1).to({rotation:-14.8,x:-706.2,y:948.9},0).wait(1).to({rotation:-15.2,x:-695,y:950.6},0).wait(1).to({rotation:-15.6,x:-683.8,y:952.2},0).wait(1).to({rotation:-16,x:-672.5,y:954},0).wait(1).to({rotation:-16.4,x:-661.3,y:955.6},0).wait(1).to({rotation:-16.8,x:-650.1,y:957.3},0).wait(1).to({rotation:-17.1,x:-638.8,y:959},0).wait(1).to({rotation:-17.5,x:-627.6,y:960.6},0).wait(1).to({rotation:-17.9,x:-616.4,y:962.3},0).wait(1).to({rotation:-18.3,x:-605.2,y:964},0).wait(1).to({rotation:-18.7,x:-593.9,y:965.7},0).wait(1).to({rotation:-19.1,x:-582.7,y:967.4},0).wait(1).to({rotation:-19.5,x:-571.5,y:969.1},0).wait(1).to({rotation:-19.9,x:-560.2,y:970.7},0).wait(1).to({rotation:-20.3,x:-549,y:972.4},0).wait(1).to({rotation:-20.7,x:-537.8,y:974.1},0).wait(1).to({rotation:-21,x:-526.5,y:975.8},0).wait(1).to({rotation:-21.4,x:-515.3,y:977.4},0).wait(1).to({rotation:-21.8,x:-504.1,y:979.1},0).wait(1).to({rotation:-22.2,x:-492.9,y:980.9},0).wait(1).to({rotation:-22.6,x:-481.6,y:982.5},0).wait(1).to({rotation:-23,x:-470.4,y:984.2},0).wait(1).to({rotation:-23.4,x:-459.2,y:985.9},0).wait(1).to({rotation:-23.8,x:-447.9,y:987.6},0).wait(1).to({rotation:-24.2,x:-436.7,y:989.2},0).wait(1).to({rotation:-24.6,x:-425.5,y:990.9},0).wait(1).to({rotation:-24.9,x:-414.3,y:992.6},0).wait(1).to({rotation:-25.3,x:-403,y:994.3},0).wait(1).to({rotation:-25.7,x:-391.8,y:995.9},0).wait(1).to({rotation:-26.1,x:-380.6,y:997.6},0).wait(1).to({rotation:-26.5,x:-369.3,y:999.3},0).wait(1).to({rotation:-26.9,x:-358.1,y:1001},0).wait(1).to({rotation:-27.3,x:-346.9,y:1002.7},0).wait(1).to({rotation:-27.7,x:-335.6,y:1004.4},0).wait(1).to({rotation:-28.1,x:-324.4,y:1006},0).wait(1).to({rotation:-28.4,x:-313.2,y:1007.8},0).wait(1).to({rotation:-28.8,x:-302,y:1009.4},0).wait(1).to({rotation:-29.2,x:-290.7,y:1011.1},0).wait(1).to({rotation:-29.6,x:-279.5,y:1012.8},0).wait(1).to({rotation:-30,x:-268.2,y:1014.5},0).wait(1).to({rotation:-30.4,x:-257,y:1016.1},0).wait(1).to({rotation:-30.8,x:-245.8,y:1017.8},0).wait(1).to({rotation:-31.2,x:-234.6,y:1019.5},0).wait(1).to({rotation:-31.6,x:-223.3,y:1021.2},0).wait(1).to({rotation:-32,x:-212.1,y:1022.9},0).wait(1).to({rotation:-32.3,x:-200.9,y:1024.5},0).wait(1).to({rotation:-32.7,x:-189.7,y:1026.2},0).wait(1).to({rotation:-33.1,x:-178.4,y:1027.9},0).wait(1).to({rotation:-33.5,x:-167.2,y:1029.6},0).wait(1).to({rotation:-33.9,x:-155.9,y:1031.3},0).wait(1).to({rotation:-34.3,x:-144.7,y:1033},0).wait(1).to({rotation:-34.7,x:-133.5,y:1034.6},0).wait(1).to({rotation:-35.1,x:-122.3,y:1036.3},0).wait(1).to({rotation:-35.5,x:-111.1,y:1038},0).wait(1).to({rotation:-35.9,x:-99.8,y:1039.6},0).wait(1).to({rotation:-36.2,x:-88.6,y:1041.3},0).wait(1).to({rotation:-36.6,x:-77.4,y:1043.1},0).wait(1).to({rotation:-37,x:-66.1,y:1044.7},0).wait(1).to({rotation:-37.4,x:-54.9,y:1046.4},0).wait(1).to({rotation:-37.8,x:-43.7,y:1048},0).wait(1).to({rotation:-38.2,x:-32.4,y:1049.8},0).wait(1).to({rotation:-38.6,x:-21.2,y:1051.4},0).wait(1).to({rotation:-39,x:-10,y:1053.1},0).wait(1).to({rotation:-39.4,x:1.3,y:1054.8},0).wait(1).to({rotation:-39.7,x:12.5,y:1056.5},0).wait(1).to({rotation:-40.1,x:23.7,y:1058.2},0).wait(1).to({rotation:-40.5,x:34.9,y:1059.9},0).wait(1).to({rotation:-40.9,x:46.2,y:1061.5},0).wait(1).to({rotation:-41.3,x:57.4,y:1063.2},0).wait(1).to({rotation:-41.7,x:68.7,y:1064.9},0).wait(1).to({rotation:-42.1,x:79.8,y:1066.6},0).wait(1).to({rotation:-42.5,x:91.1,y:1068.2},0).wait(1).to({rotation:-42.9,x:102.3,y:1069.9},0).wait(1).to({rotation:-43.3,x:113.5,y:1071.6},0).wait(1).to({rotation:-43.6,x:124.8,y:1073.3},0).wait(1).to({rotation:-44,x:136,y:1075},0).wait(1).to({rotation:-44.4,x:147.3,y:1076.7},0).wait(1).to({rotation:-44.8,x:158.5,y:1078.3},0).wait(1).to({rotation:-45.2,x:169.7,y:1080},0).wait(1).to({rotation:-45.6,x:180.9,y:1081.7},0).wait(1).to({rotation:-46,x:192.1,y:1083.4},0).wait(1).to({rotation:-46.4,x:203.4,y:1085.1},0).wait(1).to({rotation:-46.8,x:214.6,y:1086.7},0).wait(1).to({rotation:-47.2,x:225.9,y:1088.4},0).wait(1).to({rotation:-47.5,x:237.1,y:1090.1},0).wait(1).to({rotation:-47.9,x:248.3,y:1091.8},0).wait(1).to({rotation:-48.3,x:259.5,y:1093.4},0).wait(1).to({rotation:-48.7,x:270.8,y:1095.2},0).wait(1).to({rotation:-49.1,x:282,y:1096.8},0).wait(1).to({rotation:-49.5,x:293.2,y:1098.5},0).wait(1).to({rotation:-49.9,x:304.5,y:1100.2},0).wait(1).to({rotation:-50.3,x:315.7,y:1101.9},0).wait(1).to({rotation:-50.7,x:326.9,y:1103.5},0).wait(1).to({rotation:-51,x:338.1,y:1105.2},0).wait(1).to({rotation:-51.4,x:349.4,y:1107},0).wait(1).to({rotation:-51.8,x:360.6,y:1108.6},0).wait(1).to({rotation:-52.2,x:371.8,y:1110.3},0).wait(1).to({rotation:-52.6,x:383.1,y:1112},0).wait(1).to({rotation:-53,x:394.3,y:1113.7},0).wait(1).to({rotation:-53.4,x:405.5,y:1115.3},0).wait(1).to({rotation:-53.8,x:416.7,y:1117},0).wait(1).to({rotation:-54.2,x:428,y:1118.7},0).wait(1).to({rotation:-54.6,x:439.2,y:1120.4},0).wait(1).to({rotation:-54.9,x:450.4,y:1122},0).wait(1).to({rotation:-55.3,x:461.7,y:1123.7},0).wait(1).to({rotation:-55.7,x:472.9,y:1125.5},0).wait(1).to({rotation:-56.1,x:484.1,y:1127.1},0).wait(1).to({rotation:-56.5,x:495.4,y:1128.8},0).wait(1).to({rotation:-56.9,x:506.6,y:1130.4},0).wait(1).to({rotation:-57.3,x:517.9,y:1132.1},0).wait(1).to({rotation:-57.7,x:529,y:1133.8},0).wait(1).to({rotation:-58.1,x:540.3,y:1135.5},0).wait(1).to({rotation:-58.5,x:551.5,y:1137.2},0).wait(1).to({rotation:-58.8,x:562.7,y:1138.9},0).wait(1).to({rotation:-59.2,x:574,y:1140.6},0).wait(1).to({rotation:-59.6,x:585.2,y:1142.2},0).wait(1).to({rotation:-60,x:596.4,y:1143.9},0).wait(1).to({rotation:-60.4,x:607.6,y:1145.6},0).wait(1).to({rotation:-60.8,x:618.9,y:1147.3},0).wait(1).to({rotation:-61.2,x:630.1,y:1149},0).wait(1).to({rotation:-61.6,x:641.4,y:1150.6},0).wait(1).to({rotation:-62,x:652.6,y:1152.3},0).wait(1).to({rotation:-62.3,x:663.8,y:1154},0).wait(1).to({rotation:-62.7,x:675,y:1155.7},0).wait(1).to({rotation:-63.1,x:686.2,y:1157.4},0).wait(1).to({rotation:-63.5,x:697.5,y:1159},0).wait(1).to({rotation:-63.9,x:708.7,y:1160.7},0).wait(1).to({rotation:-64.3,x:719.9,y:1162.4},0).wait(1).to({rotation:-64.7,x:731.2,y:1164.1},0).wait(1).to({rotation:-65.1,x:742.4,y:1165.8},0).wait(1).to({rotation:-65.5,x:753.6,y:1167.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1633,-280.5,3336.3,1665.6);


// stage content:
(lib.plumes_scroll_parallaxe_new = function(mode,startPosition,loop) {
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
			}else if(isChrome==true){
						scrollT = window.scrollY*1;
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
	this.plume1.setTransform(732.7,252.8,0.648,0.648,0,0,0,250.3,249.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,153,209,0.259)").ss(4).p("Eh4ghQVMDxBAAAMAAACgrMjxBAAAg");
	this.shape.setTransform(695.9,469.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.plume1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.9,349.7,2160.8,1078.7);
// library properties:
lib.properties = {
	id: '2F382BF1E0F843D59E9923DD3014446A',
	width: 1100,
	height: 880,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/plumes_scroll_parallaxe_new_atlas_.png", id:"plumes_scroll_parallaxe_new_atlas_"}
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