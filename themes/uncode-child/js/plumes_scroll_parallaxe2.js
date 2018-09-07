(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"plumes_scroll_parallaxe2_atlas_", frames: [[1002,1602,512,512],[0,0,1600,1600],[1002,2116,512,512],[0,1602,1000,1000],[1002,2630,512,512],[0,2604,1000,1000],[1002,3144,512,512]]}
];


// symbols:



(lib.feather196 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.feather1 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.feather1b96 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.feather2blurred = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.feather2 = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.feather2bblurred = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.feather2b = function() {
	this.spriteSheet = ss["plumes_scroll_parallaxe2_atlas_"];
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169));

	// Calque_8
	this.instance = new lib.Symbole9();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,408.4,1,1,0,0,0,286.4,286.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.3,x:-7.8,y:411.2},0).wait(1).to({rotation:0.7,x:-9.2,y:414},0).wait(1).to({rotation:1,x:-10.6,y:416.7},0).wait(1).to({rotation:1.4,x:-12,y:419.5},0).wait(1).to({rotation:1.7,x:-13.5,y:422.3},0).wait(1).to({rotation:2,x:-14.9,y:425.1},0).wait(1).to({rotation:2.4,x:-16.3,y:427.9},0).wait(1).to({rotation:2.7,x:-17.7,y:430.8},0).wait(1).to({rotation:3.1,x:-19.1,y:433.6},0).wait(1).to({rotation:3.4,x:-20.5,y:436.4},0).wait(1).to({rotation:3.7,x:-21.9,y:439.2},0).wait(1).to({rotation:4.1,x:-23.4,y:442},0).wait(1).to({rotation:4.4,x:-24.8,y:444.8},0).wait(1).to({rotation:4.8,x:-26.2,y:447.6},0).wait(1).to({rotation:5.1,x:-27.6,y:450.4},0).wait(1).to({rotation:5.5,x:-29.1,y:453.3},0).wait(1).to({rotation:5.8,x:-30.5,y:456.1},0).wait(1).to({rotation:6.1,x:-32,y:458.9},0).wait(1).to({rotation:6.5,x:-33.4,y:461.7},0).wait(1).to({rotation:6.8,x:-34.8,y:464.5},0).wait(1).to({rotation:7.2,x:-36.2,y:467.3},0).wait(1).to({rotation:7.5,x:-37.7,y:470.2},0).wait(1).to({rotation:7.9,x:-39.1,y:473},0).wait(1).to({rotation:8.2,x:-40.5,y:475.8},0).wait(1).to({rotation:8.5,x:-42,y:478.6},0).wait(1).to({rotation:8.9,x:-43.4,y:481.5},0).wait(1).to({rotation:9.2,x:-44.8,y:484.3},0).wait(1).to({rotation:9.6,x:-46.3,y:487.1},0).wait(1).to({rotation:9.9,x:-47.7,y:490},0).wait(1).to({rotation:10.3,x:-49.1,y:492.8},0).wait(1).to({rotation:10.6,x:-50.6,y:495.7},0).wait(1).to({rotation:11,x:-52,y:498.5},0).wait(1).to({rotation:11.3,x:-53.4,y:501.3},0).wait(1).to({rotation:11.6,x:-54.9,y:504.2},0).wait(1).to({rotation:12,x:-56.3,y:507},0).wait(1).to({rotation:12.3,x:-57.8,y:509.9},0).wait(1).to({rotation:12.7,x:-59.2,y:512.7},0).wait(1).to({rotation:13,x:-60.6,y:515.6},0).wait(1).to({rotation:13.4,x:-62.1,y:518.4},0).wait(1).to({rotation:13.7,x:-63.5,y:521.2},0).wait(1).to({rotation:14.1,x:-65,y:524.1},0).wait(1).to({rotation:14.4,x:-66.4,y:527},0).wait(1).to({rotation:14.8,x:-67.8,y:529.8},0).wait(1).to({rotation:15.1,x:-69.3,y:532.7},0).wait(1).to({rotation:15.5,x:-70.7,y:535.5},0).wait(1).to({rotation:15.8,x:-72.2,y:538.4},0).wait(1).to({rotation:16.1,x:-73.6,y:541.2},0).wait(1).to({rotation:16.5,x:-75.1,y:544.1},0).wait(1).to({rotation:16.8,x:-76.6,y:547},0).wait(1).to({rotation:17.2,x:-78,y:549.8},0).wait(1).to({rotation:17.5,x:-79.4,y:552.7},0).wait(1).to({rotation:17.9,x:-80.9,y:555.5},0).wait(1).to({rotation:18.2,x:-82.4,y:558.4},0).wait(1).to({rotation:18.6,x:-83.8,y:561.3},0).wait(1).to({rotation:18.9,x:-85.3,y:564.2},0).wait(1).to({rotation:19.3,x:-86.7,y:567.1},0).wait(1).to({rotation:19.6,x:-88.2,y:569.9},0).wait(1).to({rotation:20,x:-89.6,y:572.8},0).wait(1).to({rotation:20.3,x:-91.1,y:575.6},0).wait(1).to({rotation:20.7,x:-92.5,y:578.5},0).wait(1).to({rotation:21,x:-94,y:581.4},0).wait(1).to({rotation:21.4,x:-95.4,y:584.3},0).wait(1).to({rotation:21.7,x:-96.9,y:587.2},0).wait(1).to({rotation:22.1,x:-98.4,y:590.1},0).wait(1).to({rotation:22.4,x:-99.8,y:593},0).wait(1).to({rotation:22.8,x:-101.3,y:595.8},0).wait(1).to({rotation:23.1,x:-102.8,y:598.7},0).wait(1).to({rotation:23.5,x:-104.3,y:601.6},0).wait(1).to({rotation:23.8,x:-105.7,y:604.5},0).wait(1).to({rotation:24.2,x:-107.2,y:607.4},0).wait(1).to({rotation:24.5,x:-108.6,y:610.3},0).wait(1).to({rotation:24.9,x:-110.1,y:613.2},0).wait(1).to({rotation:25.2,x:-111.6,y:616.1},0).wait(1).to({rotation:25.6,x:-113,y:618.9},0).wait(1).to({rotation:25.9,x:-114.5,y:621.9},0).wait(1).to({rotation:26.3,x:-116,y:624.8},0).wait(1).to({rotation:26.7,x:-117.4,y:627.6},0).wait(1).to({rotation:27,x:-118.9,y:630.6},0).wait(1).to({rotation:27.4,x:-120.4,y:633.4},0).wait(1).to({rotation:27.7,x:-121.8,y:636.3},0).wait(1).to({rotation:28.1,x:-123.3,y:639.3},0).wait(1).to({rotation:28.4,x:-124.8,y:642.2},0).wait(1).to({rotation:28.8,x:-126.3,y:645.1},0).wait(1).to({rotation:29.1,x:-127.7,y:648},0).wait(1).to({rotation:29.5,x:-129.2,y:650.9},0).wait(1).to({rotation:29.8,x:-130.7,y:653.8},0).wait(1).to({rotation:30.2,x:-132.2,y:656.7},0).wait(1).to({rotation:30.5,x:-133.7,y:659.7},0).wait(1).to({rotation:30.9,x:-135.1,y:662.6},0).wait(1).to({rotation:31.2,x:-136.6,y:665.5},0).wait(1).to({rotation:31.6,x:-138.1,y:668.4},0).wait(1).to({rotation:32,x:-139.5,y:671.4},0).wait(1).to({rotation:32.3,x:-141,y:674.3},0).wait(1).to({rotation:32.7,x:-142.5,y:677.2},0).wait(1).to({rotation:33,x:-144,y:680.1},0).wait(1).to({rotation:33.4,x:-145.5,y:683.1},0).wait(1).to({rotation:33.7,x:-147,y:685.9},0).wait(1).to({rotation:34.1,x:-148.4,y:688.9},0).wait(1).to({rotation:34.4,x:-149.9,y:691.8},0).wait(1).to({rotation:34.8,x:-151.4,y:694.7},0).wait(1).to({rotation:35.2,x:-152.9,y:697.7},0).wait(1).to({rotation:35.5,x:-154.4,y:700.6},0).wait(1).to({rotation:35.9,x:-155.9,y:703.6},0).wait(1).to({rotation:36.2,x:-157.4,y:706.5},0).wait(1).to({rotation:36.6,x:-158.8,y:709.4},0).wait(1).to({rotation:36.9,x:-160.3,y:712.4},0).wait(1).to({rotation:37.3,x:-161.8,y:715.3},0).wait(1).to({rotation:37.7,x:-163.3,y:718.3},0).wait(1).to({rotation:38,x:-164.8,y:721.2},0).wait(1).to({rotation:38.4,x:-166.3,y:724.1},0).wait(1).to({rotation:38.7,x:-167.8,y:727.1},0).wait(1).to({rotation:39.1,x:-169.3,y:730},0).wait(1).to({rotation:39.5,x:-170.8,y:733},0).wait(1).to({rotation:39.8,x:-172.2,y:735.9},0).wait(1).to({rotation:40.2,x:-173.8,y:738.9},0).wait(1).to({rotation:40.5,x:-175.2,y:741.9},0).wait(1).to({rotation:40.9,x:-176.8,y:744.8},0).wait(1).to({rotation:41.2,x:-178.3,y:747.8},0).wait(1).to({rotation:41.6,x:-179.8,y:750.8},0).wait(1).to({rotation:42,x:-181.2,y:753.7},0).wait(1).to({rotation:42.3,x:-182.7,y:756.7},0).wait(1).to({rotation:42.7,x:-184.3,y:759.6},0).wait(1).to({rotation:43,x:-185.7,y:762.6},0).wait(1).to({rotation:43.4,x:-187.3,y:765.5},0).wait(1).to({rotation:43.8,x:-188.8,y:768.5},0).wait(1).to({rotation:44.1,x:-190.3,y:771.5},0).wait(1).to({rotation:44.5,x:-191.8,y:774.5},0).wait(1).to({rotation:44.9,x:-193.3,y:777.5},0).wait(1).to({rotation:45.2,x:-194.8,y:780.4},0).wait(1).to({rotation:45.6,x:-196.3,y:783.4},0).wait(1).to({rotation:45.9,x:-197.8,y:786.3},0).wait(1).to({rotation:46.3,x:-199.3,y:789.3},0).wait(1).to({rotation:46.7,x:-200.8,y:792.3},0).wait(1).to({rotation:47,x:-202.3,y:795.3},0).wait(1).to({rotation:47.4,x:-203.8,y:798.3},0).wait(1).to({rotation:47.7,x:-205.4,y:801.3},0).wait(1).to({rotation:48.1,x:-206.9,y:804.3},0).wait(1).to({rotation:48.5,x:-208.4,y:807.2},0).wait(1).to({rotation:48.8,x:-209.9,y:810.2},0).wait(1).to({rotation:49.2,x:-211.4,y:813.2},0).wait(1).to({rotation:49.6,x:-212.9,y:816.2},0).wait(1).to({rotation:49.9,x:-214.4,y:819.2},0).wait(1).to({rotation:50.3,x:-215.9,y:822.2},0).wait(1).to({rotation:50.7,x:-217.5,y:825.2},0).wait(1).to({rotation:51,x:-219,y:828.2},0).wait(1).to({rotation:51.4,x:-220.5,y:831.2},0).wait(1).to({rotation:51.7,x:-222,y:834.1},0).wait(1).to({rotation:52.1,x:-223.5,y:837.2},0).wait(1).to({rotation:52.5,x:-225,y:840.2},0).wait(1).to({rotation:52.8,x:-226.6,y:843.2},0).wait(1).to({rotation:53.2,x:-228.1,y:846.2},0).wait(1).to({rotation:53.6,x:-229.6,y:849.2},0).wait(1).to({rotation:53.9,x:-231.1,y:852.2},0).wait(1).to({rotation:54.3,x:-232.7,y:855.2},0).wait(1).to({rotation:54.7,x:-234.2,y:858.2},0).wait(1).to({rotation:55,x:-235.7,y:861.2},0).wait(1).to({rotation:55.4,x:-237.2,y:864.2},0).wait(1).to({rotation:55.8,x:-238.8,y:867.2},0).wait(1).to({rotation:56.1,x:-240.3,y:870.2},0).wait(1).to({rotation:56.5,x:-241.8,y:873.3},0).wait(1).to({rotation:56.9,x:-243.3,y:876.3},0).wait(1).to({rotation:57.2,x:-244.9,y:879.3},0).wait(1).to({rotation:57.6,x:-246.4,y:882.3},0).wait(1).to({rotation:58,x:-247.9,y:885.3},0).wait(1).to({rotation:58.3,x:-249.4,y:888.4},0).wait(1).to({rotation:58.7,x:-251,y:891.4},0).wait(1).to({rotation:59.1,x:-252.5,y:894.4},0).wait(1).to({rotation:59.4,x:-254,y:897.5},0).wait(1));

	// Calque_7
	this.instance_1 = new lib.Symbole8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(198.2,335.2,0.734,0.734,0,0,0,165.1,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:164.9,regY:164.9,scaleX:0.74,scaleY:0.74,x:198.9,y:334.6},0).wait(1).to({x:199.7,y:334.2},0).wait(1).to({x:200.5,y:333.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:201.3,y:333.3},0).wait(1).to({x:202.1,y:332.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:203,y:332.4},0).wait(1).to({x:203.8,y:331.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:204.6,y:331.4},0).wait(1).to({x:205.5,y:330.9},0).wait(1).to({x:206.3,y:330.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:207.2,y:330},0).wait(1).to({x:208,y:329.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:208.8,y:329.1},0).wait(1).to({x:209.6,y:328.7},0).wait(1).to({x:210.4,y:328.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:211.3,y:327.8},0).wait(1).to({x:212.1,y:327.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:212.9,y:326.8},0).wait(1).to({x:213.8,y:326.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:214.6,y:325.9},0).wait(1).to({x:215.5,y:325.5},0).wait(1).to({x:216.3,y:325},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:217.1,y:324.5},0).wait(1).to({x:217.9,y:324.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:218.8,y:323.6},0).wait(1).to({x:219.7,y:323.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:220.5,y:322.7},0).wait(1).to({x:221.3,y:322.2},0).wait(1).to({x:222.2,y:321.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:223,y:321.3},0).wait(1).to({x:223.8,y:320.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:224.7,y:320.4},0).wait(1).to({x:225.5,y:319.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:226.3,y:319.4},0).wait(1).to({x:227.2,y:319},0).wait(1).to({rotation:-0.1,x:228,y:318.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:228.8,y:318.1},0).wait(1).to({x:229.7,y:317.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:230.5,y:317.1},0).wait(1).to({x:231.4,y:316.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:232.2,y:316.2},0).wait(1).to({x:233.1,y:315.7},0).wait(1).to({x:234,y:315.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:234.8,y:314.8},0).wait(1).to({x:235.6,y:314.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:236.5,y:313.9},0).wait(1).to({x:237.3,y:313.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:238.2,y:312.9},0).wait(1).to({x:239,y:312.5},0).wait(1).to({x:239.9,y:312},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:240.7,y:311.5},0).wait(1).to({x:241.5,y:311},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:242.4,y:310.6},0).wait(1).to({x:243.2,y:310.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:244.1,y:309.7},0).wait(1).to({x:244.9,y:309.2},0).wait(1).to({x:245.8,y:308.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:246.6,y:308.2},0).wait(1).to({x:247.5,y:307.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:248.4,y:307.3},0).wait(1).to({x:249.2,y:306.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:250.1,y:306.4},0).wait(1).to({x:250.9,y:305.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:251.7,y:305.4},0).wait(1).to({x:252.6,y:305},0).wait(1).to({x:253.4,y:304.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:254.3,y:304},0).wait(1).to({x:255.1,y:303.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:256,y:303.1},0).wait(1).to({x:256.8,y:302.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:257.7,y:302.2},0).wait(1).to({x:258.5,y:301.7},0).wait(1).to({x:259.4,y:301.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:260.3,y:300.7},0).wait(1).to({x:261.1,y:300.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:262,y:299.8},0).wait(1).to({x:262.8,y:299.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:263.7,y:298.8},0).wait(1).to({x:264.6,y:298.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:265.4,y:297.9},0).wait(1).to({x:266.3,y:297.4},0).wait(1).to({x:267.1,y:296.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:268,y:296.5},0).wait(1).to({x:268.8,y:296},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:269.7,y:295.5},0).wait(1).to({x:270.6,y:295},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:271.4,y:294.6},0).wait(1).to({x:272.3,y:294.1},0).wait(1).to({x:273.2,y:293.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:274.1,y:293.1},0).wait(1).to({x:274.9,y:292.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:275.8,y:292.2},0).wait(1).to({x:276.6,y:291.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:277.5,y:291.2},0).wait(1).to({x:278.3,y:290.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:279.2,y:290.3},0).wait(1).to({x:280.1,y:289.8},0).wait(1).to({x:281,y:289.3},0).wait(1).to({rotation:-0.2,x:281.7,y:288.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.4,x:282.4,y:286},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.6,x:283.1,y:283.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-0.9,x:283.7,y:281.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.1,x:284.4,y:279.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.3,x:285,y:277.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-1.5,x:285.7,y:275.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-1.7,x:286.4,y:273},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-1.9,x:287.1,y:270.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.1,x:287.7,y:268.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.4,x:288.4,y:266.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.6,x:289,y:264.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-2.8,x:289.7,y:262.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3,x:290.4,y:260.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.2,x:291,y:257.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.4,x:291.7,y:255.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.7,x:292.4,y:253.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-3.9,x:293.1,y:251.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.1,x:293.8,y:249.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.3,x:294.4,y:247},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.5,x:295,y:244.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.7,x:295.8,y:242.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-4.9,x:296.4,y:240.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.2,x:297.1,y:238.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.4,x:297.8,y:236.1},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.6,x:298.4,y:234},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.8,x:299.1,y:231.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-6,x:299.7,y:229.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-6.2,x:300.5,y:227.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.5,x:301.1,y:225.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.7,x:301.8,y:223},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-6.9,x:302.4,y:220.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.1,x:303.2,y:218.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.3,x:303.8,y:216.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.5,x:304.5,y:214.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-7.8,x:305.2,y:212.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8,x:305.8,y:209.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.2,x:306.5,y:207.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.4,x:307.2,y:205.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.6,x:307.9,y:203.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-8.9,x:308.5,y:201.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.1,x:309.2,y:198.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.3,x:309.9,y:196.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.5,x:310.6,y:194.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.7,x:311.2,y:192.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-9.9,x:311.9,y:190.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.2,x:312.6,y:187.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.4,x:313.3,y:185.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.6,x:314,y:183.4},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-10.8,x:314.6,y:181.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-11,x:315.3,y:179.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-11.3,x:316,y:176.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.5,x:316.7,y:174.6},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.7,x:317.4,y:172.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-11.9,x:318,y:170.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-12.1,x:318.7,y:168},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-12.3,x:319.4,y:165.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-12.6,x:320.1,y:163.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-12.8,x:320.8,y:161.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13,x:321.4,y:159.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.2,x:322.1,y:156.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.4,x:322.8,y:154.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-13.7,x:323.5,y:152.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-13.9,x:324.2,y:150.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.1,x:324.8,y:148.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.3,x:325.5,y:145.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.5,x:326.2,y:143.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-14.8,x:326.9,y:141.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:327.6,y:139.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-15.2,x:328.3,y:136.9},0).wait(1));

	// Calque_6
	this.instance_2 = new lib.Symbole7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-378.9,812.3,1,1,0,0,0,198.1,198.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-0.2,x:-377.6,y:813.8},0).wait(1).to({rotation:-0.4,x:-376.4,y:815.3},0).wait(1).to({rotation:-0.7,x:-375.1,y:816.9},0).wait(1).to({rotation:-0.9,x:-373.9,y:818.4},0).wait(1).to({rotation:-1.1,x:-372.6,y:819.9},0).wait(1).to({rotation:-1.4,x:-371.4,y:821.5},0).wait(1).to({rotation:-1.6,x:-370.2,y:823},0).wait(1).to({rotation:-1.8,x:-368.9,y:824.6},0).wait(1).to({rotation:-2,x:-367.7,y:826.1},0).wait(1).to({rotation:-2.3,x:-366.4,y:827.7},0).wait(1).to({rotation:-2.5,x:-365.1,y:829.2},0).wait(1).to({rotation:-2.7,x:-363.9,y:830.8},0).wait(1).to({rotation:-2.9,x:-362.6,y:832.3},0).wait(1).to({rotation:-3.2,x:-361.4,y:833.9},0).wait(1).to({rotation:-3.4,x:-360.2,y:835.4},0).wait(1).to({rotation:-3.6,x:-358.9,y:837},0).wait(1).to({rotation:-3.8,x:-357.7,y:838.6},0).wait(1).to({rotation:-4.1,x:-356.4,y:840.1},0).wait(1).to({rotation:-4.3,x:-355.1,y:841.6},0).wait(1).to({rotation:-4.5,x:-353.9,y:843.2},0).wait(1).to({rotation:-4.7,x:-352.7,y:844.8},0).wait(1).to({rotation:-5,x:-351.4,y:846.3},0).wait(1).to({rotation:-5.2,x:-350.1,y:847.9},0).wait(1).to({rotation:-5.4,x:-348.9,y:849.4},0).wait(1).to({rotation:-5.7,x:-347.6,y:851},0).wait(1).to({rotation:-5.9,x:-346.4,y:852.6},0).wait(1).to({rotation:-6.1,x:-345.1,y:854.1},0).wait(1).to({rotation:-6.3,x:-343.8,y:855.7},0).wait(1).to({rotation:-6.6,x:-342.6,y:857.3},0).wait(1).to({rotation:-6.8,x:-341.3,y:858.8},0).wait(1).to({rotation:-7,x:-340.1,y:860.3},0).wait(1).to({rotation:-7.3,x:-338.8,y:861.9},0).wait(1).to({rotation:-7.5,x:-337.5,y:863.5},0).wait(1).to({rotation:-7.7,x:-336.3,y:865.1},0).wait(1).to({rotation:-7.9,x:-335,y:866.7},0).wait(1).to({rotation:-8.2,x:-333.7,y:868.2},0).wait(1).to({rotation:-8.4,x:-332.5,y:869.7},0).wait(1).to({rotation:-8.6,x:-331.2,y:871.4},0).wait(1).to({rotation:-8.9,x:-329.9,y:872.9},0).wait(1).to({rotation:-9.1,x:-328.7,y:874.5},0).wait(1).to({rotation:-9.3,x:-327.4,y:876.1},0).wait(1).to({rotation:-9.5,x:-326.2,y:877.6},0).wait(1).to({rotation:-9.8,x:-324.9,y:879.2},0).wait(1).to({rotation:-10,x:-323.6,y:880.8},0).wait(1).to({rotation:-10.2,x:-322.3,y:882.4},0).wait(1).to({rotation:-10.5,x:-321.1,y:883.9},0).wait(1).to({rotation:-10.7,x:-319.8,y:885.5},0).wait(1).to({rotation:-10.9,x:-318.5,y:887.1},0).wait(1).to({rotation:-11.2,x:-317.2,y:888.6},0).wait(1).to({rotation:-11.4,x:-316,y:890.2},0).wait(1).to({rotation:-11.6,x:-314.7,y:891.8},0).wait(1).to({rotation:-11.8,x:-313.4,y:893.4},0).wait(1).to({rotation:-12.1,x:-312.2,y:895},0).wait(1).to({rotation:-12.3,x:-310.9,y:896.5},0).wait(1).to({rotation:-12.5,x:-309.7,y:898.1},0).wait(1).to({rotation:-12.8,x:-308.3,y:899.7},0).wait(1).to({rotation:-13,x:-307.1,y:901.3},0).wait(1).to({rotation:-13.2,x:-305.8,y:902.9},0).wait(1).to({rotation:-13.5,x:-304.5,y:904.5},0).wait(1).to({rotation:-13.7,x:-303.3,y:906.1},0).wait(1).to({rotation:-13.9,x:-302,y:907.6},0).wait(1).to({rotation:-14.2,x:-300.7,y:909.3},0).wait(1).to({rotation:-14.4,x:-299.4,y:910.8},0).wait(1).to({rotation:-14.6,x:-298.1,y:912.5},0).wait(1).to({rotation:-14.9,x:-296.8,y:914},0).wait(1).to({rotation:-15.2,x:-294.4,y:915.2},0).wait(1).to({rotation:-15.6,x:-290.2,y:916},0).wait(1).to({rotation:-16,x:-286,y:916.7},0).wait(1).to({rotation:-16.5,x:-281.8,y:917.4},0).wait(1).to({rotation:-16.9,x:-277.6,y:918.1},0).wait(1).to({rotation:-17.3,x:-273.3,y:918.9},0).wait(1).to({rotation:-17.7,x:-269.1,y:919.6},0).wait(1).to({rotation:-18.2,x:-265,y:920.3},0).wait(1).to({rotation:-18.6,x:-260.8,y:921},0).wait(1).to({rotation:-19,x:-256.5,y:921.8},0).wait(1).to({rotation:-19.5,x:-252.3,y:922.5},0).wait(1).to({rotation:-19.9,x:-248.1,y:923.2},0).wait(1).to({rotation:-20.3,x:-243.9,y:923.9},0).wait(1).to({rotation:-20.7,x:-239.7,y:924.6},0).wait(1).to({rotation:-21.2,x:-235.4,y:925.4},0).wait(1).to({rotation:-21.6,x:-231.2,y:926.1},0).wait(1).to({rotation:-22,x:-227,y:926.8},0).wait(1).to({rotation:-22.5,x:-222.7,y:927.5},0).wait(1).to({rotation:-22.9,x:-218.5,y:928.3},0).wait(1).to({rotation:-23.3,x:-214.3,y:929},0).wait(1).to({rotation:-23.8,x:-210.1,y:929.7},0).wait(1).to({rotation:-24.2,x:-205.8,y:930.5},0).wait(1).to({rotation:-24.6,x:-201.6,y:931.2},0).wait(1).to({rotation:-25,x:-197.3,y:931.9},0).wait(1).to({rotation:-25.5,x:-193,y:932.6},0).wait(1).to({rotation:-25.9,x:-188.8,y:933.4},0).wait(1).to({rotation:-26.3,x:-184.6,y:934.1},0).wait(1).to({rotation:-26.8,x:-180.3,y:934.8},0).wait(1).to({rotation:-27.2,x:-176.1,y:935.5},0).wait(1).to({rotation:-27.6,x:-171.8,y:936.3},0).wait(1).to({rotation:-28.1,x:-167.5,y:937},0).wait(1).to({rotation:-28.5,x:-163.3,y:937.7},0).wait(1).to({rotation:-28.9,x:-159,y:938.5},0).wait(1).to({rotation:-29.4,x:-154.8,y:939.2},0).wait(1).to({rotation:-29.8,x:-150.5,y:940},0).wait(1).to({rotation:-30.2,x:-146.2,y:940.7},0).wait(1).to({rotation:-30.7,x:-142,y:941.4},0).wait(1).to({rotation:-31.1,x:-137.7,y:942.1},0).wait(1).to({rotation:-31.6,x:-133.5,y:942.9},0).wait(1).to({rotation:-32,x:-129.2,y:943.6},0).wait(1).to({rotation:-32.4,x:-124.9,y:944.3},0).wait(1).to({rotation:-32.9,x:-120.6,y:945.1},0).wait(1).to({rotation:-33.3,x:-116.3,y:945.8},0).wait(1).to({rotation:-33.7,x:-112.1,y:946.5},0).wait(1).to({rotation:-34.2,x:-107.8,y:947.3},0).wait(1).to({rotation:-34.6,x:-103.5,y:948},0).wait(1).to({rotation:-35,x:-99.2,y:948.7},0).wait(1).to({rotation:-35.5,x:-95,y:949.5},0).wait(1).to({rotation:-35.9,x:-90.6,y:950.2},0).wait(1).to({rotation:-36.3,x:-86.3,y:951},0).wait(1).to({rotation:-36.8,x:-82,y:951.7},0).wait(1).to({rotation:-37.2,x:-77.7,y:952.4},0).wait(1).to({rotation:-37.7,x:-73.4,y:953.2},0).wait(1).to({rotation:-38.1,x:-69.1,y:953.9},0).wait(1).to({rotation:-38.5,x:-64.9,y:954.7},0).wait(1).to({rotation:-39,x:-60.5,y:955.4},0).wait(1).to({rotation:-39.4,x:-56.2,y:956.1},0).wait(1).to({rotation:-39.9,x:-51.9,y:956.9},0).wait(1).to({rotation:-40.3,x:-47.6,y:957.6},0).wait(1).to({rotation:-40.7,x:-43.3,y:958.4},0).wait(1).to({rotation:-41.2,x:-39,y:959.1},0).wait(1).to({rotation:-41.6,x:-34.7,y:959.8},0).wait(1).to({rotation:-42.1,x:-30.3,y:960.6},0).wait(1).to({rotation:-42.5,x:-26,y:961.3},0).wait(1).to({rotation:-42.9,x:-21.6,y:962.1},0).wait(1).to({rotation:-43.4,x:-17.3,y:962.8},0).wait(1).to({rotation:-43.8,x:-13,y:963.6},0).wait(1).to({rotation:-44.3,x:-8.7,y:964.3},0).wait(1).to({rotation:-44.7,x:-4.4,y:965},0).wait(1).to({rotation:-45.1,x:0,y:965.8},0).wait(1).to({rotation:-45.6,x:4.3,y:966.5},0).wait(1).to({rotation:-46,x:8.6,y:967.3},0).wait(1).to({rotation:-46.5,x:13,y:968},0).wait(1).to({rotation:-46.9,x:17.3,y:968.8},0).wait(1).to({rotation:-47.3,x:21.7,y:969.5},0).wait(1).to({rotation:-47.8,x:26.1,y:970.2},0).wait(1).to({rotation:-48.2,x:30.4,y:971},0).wait(1).to({rotation:-48.7,x:34.7,y:971.8},0).wait(1).to({rotation:-49.1,x:39,y:972.5},0).wait(1).to({rotation:-49.6,x:43.4,y:973.3},0).wait(1).to({rotation:-50,x:47.8,y:974},0).wait(1).to({rotation:-50.4,x:52.2,y:974.7},0).wait(1).to({rotation:-50.9,x:56.5,y:975.5},0).wait(1).to({rotation:-51.3,x:60.9,y:976.2},0).wait(1).to({rotation:-51.8,x:65.2,y:977},0).wait(1).to({rotation:-52.2,x:69.6,y:977.7},0).wait(1).to({rotation:-52.7,x:74,y:978.5},0).wait(1).to({rotation:-53.1,x:78.3,y:979.2},0).wait(1).to({rotation:-53.6,x:82.7,y:980},0).wait(1).to({rotation:-54,x:87.1,y:980.7},0).wait(1).to({rotation:-54.5,x:91.5,y:981.6},0).wait(1).to({rotation:-54.9,x:95.8,y:982.3},0).wait(1).to({rotation:-55.3,x:100.2,y:983},0).wait(1).to({rotation:-55.8,x:104.6,y:983.8},0).wait(1).to({rotation:-56.2,x:109,y:984.5},0).wait(1).to({rotation:-56.7,x:113.4,y:985.2},0).wait(1).to({rotation:-57.1,x:117.8,y:986},0).wait(1).to({rotation:-57.6,x:122.1,y:986.8},0).wait(1).to({rotation:-58,x:126.6,y:987.5},0).wait(1).to({rotation:-58.5,x:131,y:988.3},0).wait(1).to({rotation:-58.9,x:135.3,y:989},0).wait(1).to({rotation:-59.4,x:139.8,y:989.8},0).wait(1).to({rotation:-59.8,x:144.2,y:990.5},0).wait(1));

	// Calque_5
	this.instance_3 = new lib.Symbole6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-464.9,491.7,0.999,0.999,-29.9,0,0,148.9,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:149,scaleX:1,scaleY:1,x:-465.5,y:489.1},0).wait(1).to({rotation:-29.8,x:-466.3,y:486.6},0).wait(1).to({rotation:-29.7,x:-467,y:484.1},0).wait(1).to({x:-467.7,y:481.6},0).wait(1).to({rotation:-29.6,x:-468.4,y:479},0).wait(1).to({rotation:-29.5,x:-469.2,y:476.5},0).wait(1).to({rotation:-29.4,x:-470,y:474},0).wait(1).to({rotation:-29.3,x:-470.7,y:471.5},0).wait(1).to({rotation:-29.2,x:-471.4,y:469},0).wait(1).to({rotation:-29.1,x:-472.2,y:466.5},0).wait(1).to({x:-472.9,y:463.9},0).wait(1).to({rotation:-29,x:-473.7,y:461.4},0).wait(1).to({rotation:-28.9,x:-474.4,y:458.9},0).wait(1).to({rotation:-28.8,x:-475.1,y:456.4},0).wait(1).to({rotation:-28.7,x:-475.9,y:453.8},0).wait(1).to({rotation:-28.6,x:-476.6,y:451.3},0).wait(1).to({rotation:-28.5,x:-477.3,y:448.7},0).wait(1).to({rotation:-28.4,x:-478.1,y:446.2},0).wait(1).to({x:-478.8,y:443.7},0).wait(1).to({rotation:-28.3,x:-479.6,y:441.1},0).wait(1).to({rotation:-28.2,x:-480.3,y:438.6},0).wait(1).to({rotation:-28.1,x:-481,y:436.1},0).wait(1).to({rotation:-28,x:-481.8,y:433.5},0).wait(1).to({rotation:-27.9,x:-482.5,y:431},0).wait(1).to({rotation:-27.8,x:-483.3,y:428.4},0).wait(1).to({x:-484,y:425.9},0).wait(1).to({rotation:-27.7,x:-484.8,y:423.3},0).wait(1).to({rotation:-27.6,x:-485.6,y:420.8},0).wait(1).to({rotation:-27.5,x:-486.3,y:418.2},0).wait(1).to({rotation:-27.4,x:-487,y:415.7},0).wait(1).to({rotation:-27.3,x:-487.8,y:413.2},0).wait(1).to({rotation:-27.2,x:-488.5,y:410.6},0).wait(1).to({rotation:-27.1,x:-489.3,y:408.1},0).wait(1).to({x:-490,y:405.5},0).wait(1).to({rotation:-27,x:-490.8,y:403},0).wait(1).to({rotation:-26.9,x:-491.5,y:400.4},0).wait(1).to({rotation:-26.8,x:-492.3,y:397.8},0).wait(1).to({rotation:-26.7,x:-493.1,y:395.3},0).wait(1).to({rotation:-26.6,x:-493.8,y:392.8},0).wait(1).to({rotation:-26.5,x:-494.6,y:390.2},0).wait(1).to({rotation:-26.4,x:-495.3,y:387.6},0).wait(1).to({x:-496,y:385.1},0).wait(1).to({rotation:-26.3,x:-496.8,y:382.5},0).wait(1).to({rotation:-26.2,x:-497.5,y:379.9},0).wait(1).to({rotation:-26.1,x:-498.3,y:377.3},0).wait(1).to({rotation:-26,x:-499,y:374.8},0).wait(1).to({rotation:-25.9,x:-499.8,y:372.2},0).wait(1).to({rotation:-25.8,x:-500.5,y:369.6},0).wait(1).to({rotation:-25.7,x:-501.3,y:367},0).wait(1).to({x:-502.1,y:364.5},0).wait(1).to({rotation:-25.6,x:-502.8,y:361.9},0).wait(1).to({rotation:-25.5,x:-503.6,y:359.4},0).wait(1).to({rotation:-25.4,x:-504.3,y:356.8},0).wait(1).to({rotation:-25.3,x:-505.1,y:354.2},0).wait(1).to({rotation:-25.2,x:-505.8,y:351.6},0).wait(1).to({rotation:-25.1,x:-506.6,y:349},0).wait(1).to({rotation:-25,x:-507.4,y:346.5},0).wait(1).to({x:-508.1,y:343.9},0).wait(1).to({rotation:-24.9,x:-508.9,y:341.3},0).wait(1).to({rotation:-24.8,x:-509.6,y:338.7},0).wait(1).to({rotation:-24.7,x:-510.3,y:336.1},0).wait(1).to({rotation:-24.6,x:-511.1,y:333.5},0).wait(1).to({rotation:-24.5,x:-511.9,y:330.9},0).wait(1).to({rotation:-24.4,x:-512.7,y:328.3},0).wait(1).to({rotation:-24.3,x:-513.4,y:325.8},0).wait(1).to({rotation:-24.2,x:-514.2,y:323.2},0).wait(1).to({x:-514.9,y:320.6},0).wait(1).to({rotation:-24.1,x:-515.7,y:318},0).wait(1).to({rotation:-24,x:-516.5,y:315.4},0).wait(1).to({rotation:-23.9,x:-517.2,y:312.8},0).wait(1).to({rotation:-23.8,x:-518,y:310.1},0).wait(1).to({rotation:-23.7,x:-518.7,y:307.5},0).wait(1).to({rotation:-23.6,x:-519.5,y:305},0).wait(1).to({rotation:-23.5,x:-520.3,y:302.4},0).wait(1).to({x:-521,y:299.8},0).wait(1).to({rotation:-23.4,x:-521.8,y:297.2},0).wait(1).to({rotation:-23.3,x:-522.6,y:294.6},0).wait(1).to({rotation:-23.2,x:-523.4,y:291.9},0).wait(1).to({rotation:-23.1,x:-524.1,y:289.3},0).wait(1).to({rotation:-23,x:-524.8,y:286.7},0).wait(1).to({rotation:-22.9,x:-525.6,y:284.1},0).wait(1).to({rotation:-22.8,x:-526.4,y:281.5},0).wait(1).to({rotation:-22.7,x:-527.2,y:278.9},0).wait(1).to({rotation:-22.6,x:-527.9,y:276.2},0).wait(1).to({x:-528.7,y:273.7},0).wait(1).to({rotation:-22.5,x:-529.4,y:271.1},0).wait(1).to({rotation:-22.4,x:-530.2,y:268.4},0).wait(1).to({rotation:-22.3,x:-531,y:265.8},0).wait(1).to({rotation:-22.2,x:-531.8,y:263.2},0).wait(1).to({rotation:-22.1,x:-532.5,y:260.6},0).wait(1).to({rotation:-22,x:-533.3,y:258},0).wait(1).to({rotation:-21.9,x:-534.1,y:255.3},0).wait(1).to({rotation:-21.8,x:-534.8,y:252.7},0).wait(1).to({x:-535.6,y:250.1},0).wait(1).to({rotation:-21.7,x:-536.4,y:247.4},0).wait(1).to({rotation:-21.6,x:-537.2,y:244.8},0).wait(1).to({rotation:-21.5,x:-537.9,y:242.2},0).wait(1).to({rotation:-21.4,x:-538.7,y:239.6},0).wait(1).to({rotation:-21.3,x:-539.5,y:236.9},0).wait(1).to({rotation:-21.2,x:-540.3,y:234.3},0).wait(1).to({rotation:-21.1,x:-541,y:231.6},0).wait(1).to({rotation:-21,x:-541.8,y:229},0).wait(1).to({rotation:-20.9,x:-542.6,y:226.4},0).wait(1).to({x:-543.3,y:223.7},0).wait(1).to({rotation:-20.8,x:-544.2,y:221.1},0).wait(1).to({rotation:-20.7,x:-544.9,y:218.4},0).wait(1).to({rotation:-20.6,x:-545.6,y:215.8},0).wait(1).to({rotation:-20.5,x:-546.5,y:213.1},0).wait(1).to({rotation:-20.4,x:-547.2,y:210.5},0).wait(1).to({rotation:-20.3,x:-547.9,y:207.8},0).wait(1).to({rotation:-20.2,x:-548.8,y:205.2},0).wait(1).to({rotation:-20.1,x:-549.5,y:202.5},0).wait(1).to({rotation:-20,x:-550.3,y:199.9},0).wait(1).to({x:-551.1,y:197.2},0).wait(1).to({rotation:-19.9,x:-551.9,y:194.6},0).wait(1).to({rotation:-19.8,x:-552.7,y:191.9},0).wait(1).to({rotation:-19.7,x:-553.4,y:189.3},0).wait(1).to({rotation:-19.6,x:-554.2,y:186.6},0).wait(1).to({rotation:-19.5,x:-555,y:183.9},0).wait(1).to({rotation:-19.4,x:-555.8,y:181.3},0).wait(1).to({rotation:-19.3,x:-556.6,y:178.6},0).wait(1).to({rotation:-19.2,x:-557.3,y:176},0).wait(1).to({rotation:-19.1,x:-558.1,y:173.3},0).wait(1).to({rotation:-19,x:-558.9,y:170.7},0).wait(1).to({x:-559.7,y:167.9},0).wait(1).to({rotation:-18.9,x:-560.5,y:165.3},0).wait(1).to({rotation:-18.8,x:-561.3,y:162.6},0).wait(1).to({rotation:-18.7,x:-562,y:160},0).wait(1).to({rotation:-18.6,x:-562.8,y:157.3},0).wait(1).to({rotation:-18.5,x:-563.6,y:154.6},0).wait(1).to({rotation:-18.4,x:-564.3,y:152},0).wait(1).to({rotation:-18.3,x:-565.2,y:149.3},0).wait(1).to({rotation:-18.2,x:-565.9,y:146.6},0).wait(1).to({rotation:-18.1,x:-566.7,y:143.9},0).wait(1).to({rotation:-18,x:-567.5,y:141.2},0).wait(1).to({rotation:-17.9,x:-568.3,y:138.6},0).wait(1).to({x:-569.1,y:135.8},0).wait(1).to({rotation:-17.8,x:-569.9,y:133.3},0).wait(1).to({rotation:-17.7,x:-570.7,y:130.5},0).wait(1).to({rotation:-17.6,x:-571.4,y:127.9},0).wait(1).to({rotation:-17.5,x:-572.2,y:125.1},0).wait(1).to({rotation:-17.4,x:-573,y:122.5},0).wait(1).to({rotation:-17.3,x:-573.8,y:119.7},0).wait(1).to({rotation:-17.2,x:-574.6,y:117.1},0).wait(1).to({rotation:-17.1,x:-575.4,y:114.4},0).wait(1).to({rotation:-17,x:-576.2,y:111.7},0).wait(1).to({rotation:-16.9,x:-577,y:109},0).wait(1).to({rotation:-16.8,x:-577.7,y:106.3},0).wait(1).to({x:-578.6,y:103.6},0).wait(1).to({rotation:-16.7,x:-579.4,y:100.9},0).wait(1).to({rotation:-16.6,x:-580.1,y:98.3},0).wait(1).to({rotation:-16.5,x:-580.9,y:95.6},0).wait(1).to({rotation:-16.4,x:-581.7,y:92.9},0).wait(1).to({rotation:-16.3,x:-582.5,y:90.2},0).wait(1).to({rotation:-16.2,x:-583.3,y:87.5},0).wait(1).to({rotation:-16.1,x:-584.1,y:84.8},0).wait(1).to({rotation:-16,x:-584.9,y:82},0).wait(1).to({rotation:-15.9,x:-585.6,y:79.3},0).wait(1).to({rotation:-15.8,x:-586.5,y:76.6},0).wait(1).to({rotation:-15.7,x:-587.3,y:73.9},0).wait(1).to({rotation:-15.6,x:-588,y:71.2},0).wait(1).to({x:-588.9,y:68.5},0).wait(1).to({rotation:-15.5,x:-589.7,y:65.8},0).wait(1).to({rotation:-15.4,x:-590.5,y:63},0).wait(1).to({rotation:-15.3,x:-591.2,y:60.4},0).wait(1).to({rotation:-15.2,x:-592,y:57.6},0).wait(1).to({rotation:-15.1,x:-592.8,y:54.9},0).wait(1).to({rotation:-15,x:-593.7,y:52.2},0).wait(1));

	// Calque_4
	this.instance_4 = new lib.Symbole5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,20.3,0.788,0.788,-29.8,0,0,214.6,212.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:216.7,regY:216.7,scaleX:0.79,scaleY:0.79,rotation:-29.6,x:-42.3,y:24.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-29.4,x:-43.3,y:26.6},0).wait(1).to({rotation:-29.1,x:-44.3,y:28.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-28.9,x:-45.3,y:31},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-28.7,x:-46.3,y:33.3},0).wait(1).to({rotation:-28.4,x:-47.2,y:35.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-28.2,x:-48.2,y:37.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-28,x:-49.2,y:39.9},0).wait(1).to({rotation:-27.7,x:-50.2,y:42.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-27.5,x:-51.2,y:44.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-27.3,x:-52.2,y:46.6},0).wait(1).to({rotation:-27.1,x:-53.2,y:48.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-26.8,x:-54.2,y:51},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-26.6,x:-55.2,y:53.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-26.4,x:-56.2,y:55.5},0).wait(1).to({rotation:-26.1,x:-57.2,y:57.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25.9,x:-58.2,y:59.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25.7,x:-59.2,y:62.2},0).wait(1).to({rotation:-25.4,x:-60.2,y:64.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25.2,x:-61.2,y:66.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-25,x:-62.2,y:68.9},0).wait(1).to({rotation:-24.7,x:-63.2,y:71.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-24.5,x:-64.3,y:73.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-24.3,x:-65.2,y:75.6},0).wait(1).to({rotation:-24,x:-66.2,y:77.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-23.8,x:-67.2,y:80.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-23.6,x:-68.3,y:82.3},0).wait(1).to({rotation:-23.3,x:-69.2,y:84.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-23.1,x:-70.3,y:86.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-22.9,x:-71.3,y:89},0).wait(1).to({rotation:-22.6,x:-72.3,y:91.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-22.4,x:-73.3,y:93.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-22.2,x:-74.3,y:95.8},0).wait(1).to({rotation:-21.9,x:-75.3,y:98},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-21.7,x:-76.3,y:100.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-21.5,x:-77.3,y:102.5},0).wait(1).to({rotation:-21.2,x:-78.3,y:104.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-21,x:-79.3,y:107},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-20.8,x:-80.3,y:109.3},0).wait(1).to({rotation:-20.5,x:-81.3,y:111.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-20.3,x:-82.3,y:113.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-20.1,x:-83.3,y:116.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.8,x:-84.4,y:118.3},0).wait(1).to({rotation:-19.6,x:-85.4,y:120.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.3,x:-86.4,y:122.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.1,x:-87.4,y:125.1},0).wait(1).to({rotation:-18.9,x:-88.4,y:127.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-18.6,x:-89.4,y:129.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-18.4,x:-90.4,y:131.9},0).wait(1).to({rotation:-18.2,x:-91.5,y:134.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-17.9,x:-92.5,y:136.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-17.7,x:-93.5,y:138.7},0).wait(1).to({rotation:-17.5,x:-94.6,y:141},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-17.2,x:-95.6,y:143.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-17,x:-96.5,y:145.5},0).wait(1).to({rotation:-16.8,x:-97.6,y:147.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-16.5,x:-98.6,y:150.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-16.3,x:-99.6,y:152.3},0).wait(1).to({rotation:-16,x:-100.7,y:154.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-15.8,x:-101.7,y:156.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-15.6,x:-102.7,y:159.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-15.3,x:-103.7,y:161.4},0).wait(1).to({rotation:-15.1,x:-104.8,y:163.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-14.9,x:-105.8,y:166},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-14.6,x:-106.8,y:168.3},0).wait(1).to({rotation:-14.4,x:-107.8,y:170.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-14.1,x:-108.9,y:172.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-13.9,x:-109.9,y:175.2},0).wait(1).to({rotation:-13.7,x:-110.9,y:177.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-13.4,x:-111.9,y:179.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-13.2,x:-112.9,y:182},0).wait(1).to({rotation:-13,x:-114,y:184.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-12.7,x:-115,y:186.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-12.5,x:-116.1,y:188.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-12.2,x:-117.1,y:191.2},0).wait(1).to({rotation:-12,x:-118.1,y:193.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-11.8,x:-119.1,y:195.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-11.5,x:-120.2,y:198},0).wait(1).to({rotation:-11.3,x:-121.2,y:200.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-11,x:-122.2,y:202.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-10.8,x:-123.3,y:204.9},0).wait(1).to({rotation:-10.6,x:-124.3,y:207.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-10.3,x:-125.3,y:209.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-10.1,x:-126.4,y:211.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.8,x:-127.4,y:214.1},0).wait(1).to({rotation:-9.6,x:-128.5,y:216.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.4,x:-129.5,y:218.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.1,x:-130.5,y:221.1},0).wait(1).to({rotation:-8.9,x:-131.6,y:223.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8.6,x:-132.6,y:225.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-8.4,x:-133.6,y:228},0).wait(1).to({rotation:-8.2,x:-134.7,y:230.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-7.9,x:-135.7,y:232.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-7.7,x:-136.8,y:234.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-7.4,x:-137.8,y:237.2},0).wait(1).to({rotation:-7.2,x:-138.9,y:239.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-7,x:-139.9,y:241.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-6.7,x:-140.9,y:244.2},0).wait(1).to({rotation:-6.5,x:-142,y:246.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-6.1,x:-143,y:248.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-5.6,x:-144.1,y:251.2},0).wait(1).to({rotation:-5.1,x:-145.2,y:253.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-4.6,x:-146.2,y:255.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-4,x:-147.3,y:258.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-3.5,x:-148.3,y:260.5},0).wait(1).to({rotation:-3,x:-149.4,y:262.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-2.5,x:-150.5,y:265.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-1.9,x:-151.6,y:267.5},0).wait(1).to({rotation:-1.4,x:-152.6,y:269.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-0.9,x:-153.7,y:272.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-0.4,x:-154.7,y:274.5},0).wait(1).to({rotation:0.2,x:-155.8,y:276.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:0.7,x:-156.9,y:279.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.2,x:-158,y:281.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.7,x:-159,y:283.9},0).wait(1).to({rotation:2.3,x:-160.1,y:286.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:2.8,x:-161.2,y:288.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:3.3,x:-162.3,y:290.9},0).wait(1).to({rotation:3.9,x:-163.3,y:293.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:4.4,x:-164.4,y:295.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:4.9,x:-165.5,y:298},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:5.4,x:-166.6,y:300.3},0).wait(1).to({rotation:6,x:-167.7,y:302.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:6.5,x:-168.7,y:305},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:7,x:-169.8,y:307.4},0).wait(1).to({rotation:7.6,x:-170.9,y:309.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:8.1,x:-171.9,y:312},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:8.6,x:-173,y:314.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:9.1,x:-174.1,y:316.8},0).wait(1).to({rotation:9.7,x:-175.2,y:319.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:10.2,x:-176.3,y:321.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:10.7,x:-177.4,y:323.9},0).wait(1).to({rotation:11.3,x:-178.4,y:326.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:11.8,x:-179.5,y:328.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:12.3,x:-180.6,y:331},0).wait(1).to({rotation:12.9,x:-181.7,y:333.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:13.4,x:-182.8,y:335.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:13.9,x:-183.8,y:338},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:14.5,x:-184.9,y:340.4},0).wait(1).to({rotation:15,x:-186,y:342.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:15.5,x:-187.1,y:345},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:16.1,x:-188.2,y:347.5},0).wait(1).to({rotation:16.6,x:-189.3,y:349.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:17.1,x:-190.4,y:352.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:17.7,x:-191.5,y:354.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:18.2,x:-192.6,y:356.9},0).wait(1).to({rotation:18.7,x:-193.7,y:359.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:19.3,x:-194.8,y:361.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:19.8,x:-195.8,y:364},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:20.3,x:-197,y:366.4},0).wait(1).to({rotation:20.9,x:-198,y:368.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:21.4,x:-199.2,y:371.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:21.9,x:-200.2,y:373.5},0).wait(1).to({rotation:22.5,x:-201.3,y:375.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:23,x:-202.4,y:378.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:23.5,x:-203.5,y:380.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:24.1,x:-204.7,y:383},0).wait(1).to({rotation:24.6,x:-205.7,y:385.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:25.2,x:-206.8,y:387.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:25.7,x:-207.9,y:390.2},0).wait(1).to({rotation:26.2,x:-209,y:392.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:26.8,x:-210.1,y:394.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:27.3,x:-211.2,y:397.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:27.8,x:-212.3,y:399.7},0).wait(1).to({rotation:28.4,x:-213.4,y:402},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:28.9,x:-214.6,y:404.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:29.5,x:-215.7,y:406.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:30,x:-216.7,y:409.2},0).wait(1));

	// Calque_3
	this.instance_5 = new lib.Symbole4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1072.1,999.1,1,1,0,0,0,668.3,785.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:705.6,regY:705.6,rotation:-0.3,x:-916.7,y:924.1},0).wait(1).to({rotation:-0.5,x:-798.6,y:928.6},0).wait(1).to({rotation:-0.8,x:-680.2,y:933},0).wait(1).to({rotation:-1.1,x:-562,y:937.5},0).wait(1).to({rotation:-1.3,x:-443.7,y:942},0).wait(1).to({rotation:-1.6,x:-325.2,y:946.5},0).wait(1).to({rotation:-1.9,x:-206.7,y:951},0).wait(1).to({rotation:-2.2,x:-170.4,y:952.4},0).wait(1).to({rotation:-2.4,x:-165.9,y:952.5},0).wait(1).to({rotation:-2.7,x:-161.5,y:952.6},0).wait(1).to({rotation:-3,x:-157,y:952.7},0).wait(1).to({rotation:-3.2,x:-152.5,y:952.8},0).wait(1).to({rotation:-3.5,x:-148,y:952.9},0).wait(1).to({rotation:-3.8,x:-143.6,y:953},0).wait(1).to({rotation:-4.1,x:-139,y:953.2},0).wait(1).to({rotation:-4.3,x:-134.5,y:953.3},0).wait(1).to({rotation:-4.6,x:-130.1,y:953.4},0).wait(1).to({rotation:-4.9,x:-125.6,y:953.5},0).wait(1).to({rotation:-5.1,x:-121.1,y:953.6},0).wait(1).to({rotation:-5.4,x:-116.6,y:953.8},0).wait(1).to({rotation:-5.7,x:-112.1,y:953.9},0).wait(1).to({rotation:-6,x:-107.6,y:954},0).wait(1).to({rotation:-6.2,x:-103.1,y:954.2},0).wait(1).to({rotation:-6.5,x:-98.6},0).wait(1).to({rotation:-6.8,x:-94.1,y:954.3},0).wait(1).to({rotation:-7,x:-89.6,y:954.5},0).wait(1).to({rotation:-7.3,x:-85.1,y:954.7},0).wait(1).to({rotation:-7.6,x:-80.6,y:954.8},0).wait(1).to({rotation:-7.9,x:-76.1,y:954.9},0).wait(1).to({rotation:-8.1,x:-71.6,y:955.1},0).wait(1).to({rotation:-8.4,x:-67,y:955.2},0).wait(1).to({rotation:-8.7,x:-62.5,y:955.4},0).wait(1).to({rotation:-9,x:-58,y:955.5},0).wait(1).to({rotation:-9.2,x:-53.5,y:955.7},0).wait(1).to({rotation:-9.5,x:-48.9,y:955.8},0).wait(1).to({rotation:-9.8,x:-44.4,y:956},0).wait(1).to({rotation:-10.1,x:-39.9,y:956.1},0).wait(1).to({rotation:-10.3,x:-35.4,y:956.3},0).wait(1).to({rotation:-10.6,x:-30.9,y:956.5},0).wait(1).to({rotation:-10.9,x:-26.3,y:956.6},0).wait(1).to({rotation:-11.1,x:-21.8,y:956.8},0).wait(1).to({rotation:-11.4,x:-17.3,y:956.9},0).wait(1).to({rotation:-11.7,x:-12.7,y:957.1},0).wait(1).to({rotation:-12,x:-8.2,y:957.3},0).wait(1).to({rotation:-12.2,x:-3.6,y:957.5},0).wait(1).to({rotation:-12.5,x:0.9,y:957.6},0).wait(1).to({rotation:-12.8,x:5.4,y:957.8},0).wait(1).to({rotation:-13.1,x:9.9,y:958},0).wait(1).to({rotation:-13.3,x:14.5,y:958.2},0).wait(1).to({rotation:-13.6,x:19,y:958.4},0).wait(1).to({rotation:-13.9,x:23.6,y:958.6},0).wait(1).to({rotation:-14.2,x:28.1,y:958.7},0).wait(1).to({rotation:-14.5,x:32.7,y:958.9},0).wait(1).to({rotation:-14.7,x:37.2,y:959.1},0).wait(1).to({rotation:-15,x:41.8,y:959.3},0).wait(1).to({rotation:-15.3,x:46.3,y:959.5},0).wait(1).to({rotation:-15.6,x:50.9,y:959.7},0).wait(1).to({rotation:-15.8,x:55.5,y:959.9},0).wait(1).to({rotation:-16.1,x:60,y:960.1},0).wait(1).to({rotation:-16.4,x:64.6,y:960.3},0).wait(1).to({rotation:-16.7,x:69.1,y:960.5},0).wait(1).to({rotation:-16.9,x:73.7,y:960.7},0).wait(1).to({rotation:-17.2,x:78.3,y:960.9},0).wait(1).to({rotation:-17.5,x:82.9,y:961.2},0).wait(1).to({rotation:-17.8,x:87.5,y:961.3},0).wait(1).to({rotation:-18.1,x:92,y:961.6},0).wait(1).to({rotation:-18.3,x:96.6,y:961.8},0).wait(1).to({rotation:-18.6,x:101.2,y:962},0).wait(1).to({rotation:-18.9,x:105.8,y:962.2},0).wait(1).to({rotation:-19.2,x:110.3,y:962.4},0).wait(1).to({rotation:-19.4,x:114.9,y:962.7},0).wait(1).to({rotation:-19.7,x:119.5,y:962.9},0).wait(1).to({rotation:-20,x:124.2,y:963.2},0).wait(1).to({rotation:-20.3,x:128.7,y:963.4},0).wait(1).to({rotation:-20.6,x:133.3,y:963.6},0).wait(1).to({rotation:-20.8,x:137.9,y:963.8},0).wait(1).to({rotation:-21.1,x:142.5,y:964.1},0).wait(1).to({rotation:-21.4,x:147.1,y:964.4},0).wait(1).to({rotation:-21.7,x:151.7,y:964.6},0).wait(1).to({rotation:-22,x:156.3,y:964.9},0).wait(1).to({rotation:-22.2,x:160.9,y:965.1},0).wait(1).to({rotation:-22.5,x:165.5,y:965.4},0).wait(1).to({rotation:-22.8,x:170.1,y:965.6},0).wait(1).to({rotation:-23.1,x:174.7,y:965.9},0).wait(1).to({rotation:-23.4,x:179.3,y:966.1},0).wait(1).to({rotation:-23.6,x:183.9,y:966.4},0).wait(1).to({rotation:-23.9,x:188.6,y:966.7},0).wait(1).to({rotation:-24.2,x:193.1,y:966.9},0).wait(1).to({rotation:-24.5,x:197.8,y:967.2},0).wait(1).to({rotation:-24.8,x:202.4,y:967.5},0).wait(1).to({rotation:-25,x:207,y:967.7},0).wait(1).to({rotation:-25.3,x:211.7,y:968},0).wait(1).to({rotation:-25.5,x:216.5,y:968.2},0).wait(1).to({rotation:-25.7,x:221.3,y:968.6},0).wait(1).to({rotation:-25.9,x:226,y:968.8},0).wait(1).to({rotation:-26.1,x:230.8,y:969.1},0).wait(1).to({rotation:-26.3,x:235.6,y:969.4},0).wait(1).to({rotation:-26.4,x:240.4,y:969.7},0).wait(1).to({rotation:-26.6,x:245.2,y:970},0).wait(1).to({rotation:-26.8,x:249.9,y:970.3},0).wait(1).to({rotation:-27,x:254.7,y:970.5},0).wait(1).to({rotation:-27.2,x:259.6,y:970.8},0).wait(1).to({rotation:-27.4,x:264.3,y:971.1},0).wait(1).to({rotation:-27.6,x:269.1,y:971.4},0).wait(1).to({rotation:-27.8,x:273.9,y:971.7},0).wait(1).to({rotation:-28,x:278.7,y:972},0).wait(1).to({rotation:-28.2,x:283.5,y:972.3},0).wait(1).to({rotation:-28.4,x:288.3,y:972.5},0).wait(1).to({rotation:-28.6,x:293.2,y:972.8},0).wait(1).to({rotation:-28.8,x:297.9,y:973.2},0).wait(1).to({rotation:-28.9,x:302.7,y:973.4},0).wait(1).to({rotation:-29.1,x:307.5,y:973.8},0).wait(1).to({rotation:-29.3,x:312.4,y:974},0).wait(1).to({rotation:-29.5,x:317.2,y:974.3},0).wait(1).to({rotation:-29.7,x:322,y:974.6},0).wait(1).to({rotation:-29.9,x:326.8,y:974.9},0).wait(1).to({rotation:-30.1,x:331.6,y:975.2},0).wait(1).to({rotation:-30.3,x:336.5,y:975.5},0).wait(1).to({rotation:-30.5,x:341.3,y:975.8},0).wait(1).to({rotation:-30.7,x:346.2,y:976.1},0).wait(1).to({rotation:-30.9,x:351,y:976.4},0).wait(1).to({rotation:-31.1,x:355.8,y:976.8},0).wait(1).to({rotation:-31.3,x:360.7,y:977},0).wait(1).to({rotation:-31.5,x:365.5,y:977.4},0).wait(1).to({rotation:-31.7,x:370.3,y:977.7},0).wait(1).to({rotation:-31.9,x:375.2,y:978},0).wait(1).to({rotation:-32,x:380.1,y:978.3},0).wait(1).to({rotation:-32.2,x:384.9,y:978.6},0).wait(1).to({rotation:-32.4,x:389.7,y:979},0).wait(1).to({rotation:-32.6,x:394.6,y:979.3},0).wait(1).to({rotation:-32.8,x:399.4,y:979.6},0).wait(1).to({rotation:-33,x:404.3,y:979.9},0).wait(1).to({rotation:-33.2,x:409.2,y:980.2},0).wait(1).to({rotation:-33.4,x:414,y:980.5},0).wait(1).to({rotation:-33.6,x:418.9,y:980.9},0).wait(1).to({rotation:-33.8,x:423.8,y:981.2},0).wait(1).to({rotation:-34,x:428.7,y:981.5},0).wait(1).to({rotation:-34.2,x:433.4,y:981.8},0).wait(1).to({rotation:-34.4,x:438.4,y:982.2},0).wait(1).to({rotation:-34.6,x:443.3,y:982.5},0).wait(1).to({rotation:-34.8,x:448.2,y:982.9},0).wait(1).to({rotation:-35,x:453,y:983.2},0).wait(1).to({rotation:-35.2,x:457.9,y:983.5},0).wait(1).to({rotation:-35.4,x:462.8,y:983.8},0).wait(1).to({rotation:-35.6,x:467.7,y:984.1},0).wait(1).to({rotation:-35.8,x:472.6,y:984.5},0).wait(1).to({rotation:-36,x:477.5,y:984.8},0).wait(1).to({rotation:-36.1,x:482.4,y:985.2},0).wait(1).to({rotation:-36.3,x:487.3,y:985.5},0).wait(1).to({rotation:-36.5,x:492.2,y:985.8},0).wait(1).to({rotation:-36.7,x:497.1,y:986.2},0).wait(1).to({rotation:-36.9,x:502,y:986.6},0).wait(1).to({rotation:-37.1,x:506.9,y:986.9},0).wait(1).to({rotation:-37.3,x:511.9,y:987.2},0).wait(1).to({rotation:-37.5,x:516.7,y:987.6},0).wait(1).to({rotation:-37.7,x:521.7,y:987.9},0).wait(1).to({rotation:-37.9,x:526.6,y:988.3},0).wait(1).to({rotation:-38.1,x:531.5,y:988.6},0).wait(1).to({rotation:-38.3,x:536.4,y:989},0).wait(1).to({rotation:-38.5,x:541.4,y:989.4},0).wait(1).to({rotation:-38.7,x:546.4,y:989.7},0).wait(1).to({rotation:-38.9,x:551.2,y:990.1},0).wait(1).to({rotation:-39.1,x:556.2,y:990.4},0).wait(1).to({rotation:-39.3,x:561.2,y:990.8},0).wait(1).to({rotation:-39.5,x:566.1,y:991.1},0).wait(1).to({rotation:-39.7,x:571,y:991.5},0).wait(1).to({rotation:-39.9,x:576,y:991.8},0).wait(1).to({rotation:-40.1,x:580.9,y:992.2},0).wait(1));

	// Calque_2
	this.instance_6 = new lib.Symbole3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(686.7,440.9,1,1,0,0,0,707.1,707.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:-0.3,x:679.2,y:447.8},0).wait(1).to({rotation:-0.5,x:671.6,y:454.5},0).wait(1).to({rotation:-0.8,x:664.1,y:461.5},0).wait(1).to({rotation:-1,x:656.6,y:468.3},0).wait(1).to({rotation:-1.3,x:649,y:475.1},0).wait(1).to({rotation:-1.5,x:641.4,y:482},0).wait(1).to({rotation:-1.8,x:633.9,y:488.8},0).wait(1).to({rotation:-2,x:626.3,y:495.7},0).wait(1).to({rotation:-2.3,x:618.8,y:502.6},0).wait(1).to({rotation:-2.5,x:611.2,y:509.4},0).wait(1).to({rotation:-2.8,x:603.6,y:516.3},0).wait(1).to({rotation:-3,x:596,y:523.2},0).wait(1).to({rotation:-3.3,x:588.5,y:530},0).wait(1).to({rotation:-3.6,x:580.9,y:536.9},0).wait(1).to({rotation:-3.8,x:573.3,y:543.9},0).wait(1).to({rotation:-4.1,x:565.7,y:550.7},0).wait(1).to({rotation:-4.3,x:558.1,y:557.6},0).wait(1).to({rotation:-4.6,x:550.5,y:564.5},0).wait(1).to({rotation:-4.8,x:543,y:571.4},0).wait(1).to({rotation:-5.1,x:535.3,y:578.3},0).wait(1).to({rotation:-5.3,x:527.7,y:585.2},0).wait(1).to({rotation:-5.6,x:520.1,y:592.1},0).wait(1).to({rotation:-5.9,x:512.5,y:599},0).wait(1).to({rotation:-6.1,x:504.9,y:605.9},0).wait(1).to({rotation:-6.4,x:497.2,y:612.9},0).wait(1).to({rotation:-6.6,x:489.6,y:619.8},0).wait(1).to({rotation:-6.9,x:482,y:626.7},0).wait(1).to({rotation:-7.1,x:474.3,y:633.6},0).wait(1).to({rotation:-7.4,x:466.7,y:640.5},0).wait(1).to({rotation:-7.6,x:459.1,y:647.4},0).wait(1).to({rotation:-7.9,x:451.4,y:654.4},0).wait(1).to({rotation:-8.2,x:443.8,y:661.4},0).wait(1).to({rotation:-8.4,x:436.1,y:668.3},0).wait(1).to({rotation:-8.7,x:428.5,y:675.2},0).wait(1).to({rotation:-8.9,x:420.8,y:682.2},0).wait(1).to({rotation:-9.2,x:413.1,y:689.1},0).wait(1).to({rotation:-9.4,x:405.5,y:696.1},0).wait(1).to({rotation:-9.7,x:397.8,y:703.1},0).wait(1).to({rotation:-10,x:390.1,y:710.1},0).wait(1).to({rotation:-10.2,x:382.5,y:717},0).wait(1).to({rotation:-10.5,x:374.8,y:724},0).wait(1).to({rotation:-10.7,x:367.1,y:730.9},0).wait(1).to({rotation:-11,x:359.4,y:737.9},0).wait(1).to({rotation:-11.3,x:351.7,y:744.9},0).wait(1).to({rotation:-11.5,x:344,y:751.9},0).wait(1).to({rotation:-11.8,x:336.3,y:758.8},0).wait(1).to({rotation:-12,x:328.6,y:765.9},0).wait(1).to({rotation:-12.3,x:320.9,y:772.9},0).wait(1).to({rotation:-12.5,x:313.2,y:779.9},0).wait(1).to({rotation:-12.8,x:305.5,y:786.9},0).wait(1).to({rotation:-13.1,x:297.7,y:793.9},0).wait(1).to({rotation:-13.3,x:288.4,y:798.1},0).wait(1).to({rotation:-13.6,x:278.1,y:800.3},0).wait(1).to({rotation:-13.8,x:267.6,y:802.4},0).wait(1).to({rotation:-14.1,x:257.2,y:804.6},0).wait(1).to({rotation:-14.3,x:246.7,y:806.8},0).wait(1).to({rotation:-14.6,x:236.3,y:808.9},0).wait(1).to({rotation:-14.8,x:225.9,y:811.1},0).wait(1).to({rotation:-15.1,x:215.4,y:813.3},0).wait(1).to({rotation:-15.3,x:204.9,y:815.5},0).wait(1).to({rotation:-15.6,x:194.5,y:817.7},0).wait(1).to({rotation:-15.8,x:184,y:819.9},0).wait(1).to({rotation:-16.1,x:173.5,y:822},0).wait(1).to({rotation:-16.3,x:163,y:824.2},0).wait(1).to({rotation:-16.6,x:152.6,y:826.4},0).wait(1).to({rotation:-16.9,x:142.1,y:828.6},0).wait(1).to({rotation:-17.1,x:131.5,y:830.7},0).wait(1).to({rotation:-17.4,x:121.1,y:832.9},0).wait(1).to({rotation:-17.6,x:110.6,y:835.1},0).wait(1).to({rotation:-17.9,x:100,y:837.3},0).wait(1).to({rotation:-18.1,x:89.5,y:839.5},0).wait(1).to({rotation:-18.4,x:79,y:841.7},0).wait(1).to({rotation:-18.6,x:68.5,y:843.8},0).wait(1).to({rotation:-18.9,x:57.9,y:846},0).wait(1).to({rotation:-19.1,x:47.4,y:848.3},0).wait(1).to({rotation:-19.4,x:36.9,y:850.4},0).wait(1).to({rotation:-19.6,x:26.3,y:852.6},0).wait(1).to({rotation:-19.9,x:15.8,y:854.8},0).wait(1).to({rotation:-20.2,x:5.2,y:857},0).wait(1).to({rotation:-20.4,x:-5.4,y:859.2},0).wait(1).to({rotation:-20.7,x:-15.9,y:861.4},0).wait(1).to({rotation:-20.9,x:-26.5,y:863.6},0).wait(1).to({rotation:-21.2,x:-37.1,y:865.7},0).wait(1).to({rotation:-21.4,x:-47.7,y:868},0).wait(1).to({rotation:-21.7,x:-58.3,y:870.2},0).wait(1).to({rotation:-21.9,x:-68.8,y:872.4},0).wait(1).to({rotation:-22.2,x:-79.4,y:874.6},0).wait(1).to({rotation:-22.4,x:-90.1,y:876.8},0).wait(1).to({rotation:-22.7,x:-100.7,y:879},0).wait(1).to({rotation:-23,x:-111.3,y:881.2},0).wait(1).to({rotation:-23.2,x:-121.8,y:883.4},0).wait(1).to({rotation:-23.5,x:-132.5,y:885.6},0).wait(1).to({rotation:-23.7,x:-143.1,y:887.8},0).wait(1).to({rotation:-24,x:-153.7,y:890},0).wait(1).to({rotation:-24.2,x:-164.4,y:892.3},0).wait(1).to({rotation:-24.5,x:-175,y:894.5},0).wait(1).to({rotation:-24.8,x:-185.7,y:896.6},0).wait(1).to({rotation:-25,x:-196.3,y:898.9},0).wait(1).to({rotation:-25.3,x:-207,y:901.1},0).wait(1).to({rotation:-25.5,x:-217.7,y:903.3},0).wait(1).to({rotation:-25.8,x:-228.3,y:905.5},0).wait(1).to({rotation:-26,x:-239,y:907.8},0).wait(1).to({rotation:-26.3,x:-249.7,y:910},0).wait(1).to({rotation:-26.6,x:-260.4,y:912.2},0).wait(1).to({rotation:-26.8,x:-271.1,y:914.4},0).wait(1).to({rotation:-27.1,x:-281.8,y:916.6},0).wait(1).to({rotation:-27.3,x:-292.5,y:918.9},0).wait(1).to({rotation:-27.6,x:-303.2,y:921.1},0).wait(1).to({rotation:-27.8,x:-313.8,y:923.3},0).wait(1).to({rotation:-28.1,x:-324.6,y:925.5},0).wait(1).to({rotation:-28.4,x:-335.3,y:927.8},0).wait(1).to({rotation:-28.6,x:-346,y:930},0).wait(1).to({rotation:-28.9,x:-356.8,y:932.2},0).wait(1).to({rotation:-29.1,x:-367.5,y:934.4},0).wait(1).to({rotation:-29.4,x:-378.2,y:936.7},0).wait(1).to({rotation:-29.7,x:-389,y:938.9},0).wait(1).to({rotation:-29.9,x:-399.7,y:941.2},0).wait(1).to({rotation:-30.2,x:-410.5,y:943.4},0).wait(1).to({rotation:-30.4,x:-421.2,y:945.6},0).wait(1).to({rotation:-30.7,x:-431.9,y:947.9},0).wait(1).to({rotation:-31,x:-442.7,y:950.1},0).wait(1).to({rotation:-31.2,x:-453.5,y:952.3},0).wait(1).to({rotation:-31.5,x:-464.3,y:954.6},0).wait(1).to({rotation:-31.7,x:-475.1,y:956.8},0).wait(1).to({rotation:-32,x:-485.9,y:959.1},0).wait(1).to({rotation:-32.3,x:-496.7,y:961.3},0).wait(1).to({rotation:-32.5,x:-507.5,y:963.6},0).wait(1).to({rotation:-32.8,x:-518.3,y:965.7},0).wait(1).to({rotation:-33,x:-529.1,y:968},0).wait(1).to({rotation:-33.3,x:-539.9,y:970.3},0).wait(1).to({rotation:-33.6,x:-550.7,y:972.5},0).wait(1).to({rotation:-33.8,x:-561.5,y:974.8},0).wait(1).to({rotation:-34.1,x:-572.4,y:977},0).wait(1).to({rotation:-34.3,x:-583.2,y:979.3},0).wait(1).to({rotation:-34.6,x:-594.1,y:981.5},0).wait(1).to({rotation:-34.9,x:-604.9,y:983.8},0).wait(1).to({rotation:-35.1,x:-615.7,y:986.1},0).wait(1).to({rotation:-35.4,x:-626.6,y:988.3},0).wait(1).to({rotation:-35.6,x:-637.4,y:990.6},0).wait(1).to({rotation:-35.9,x:-648.3,y:992.8},0).wait(1).to({rotation:-36.2,x:-659.2,y:995.1},0).wait(1).to({rotation:-36.4,x:-670,y:997.4},0).wait(1).to({rotation:-36.7,x:-680.9,y:999.6},0).wait(1).to({rotation:-37,x:-691.8,y:1001.9},0).wait(1).to({rotation:-37.2,x:-702.7,y:1004.1},0).wait(1).to({rotation:-37.5,x:-713.6,y:1006.4},0).wait(1).to({rotation:-37.7,x:-724.5,y:1008.6},0).wait(1).to({rotation:-38,x:-735.4,y:1010.9},0).wait(1).to({rotation:-38.3,x:-746.3,y:1013.2},0).wait(1).to({rotation:-38.5,x:-757.2,y:1015.5},0).wait(1).to({rotation:-38.8,x:-768.2,y:1017.7},0).wait(1).to({rotation:-39.1,x:-779.1,y:1020},0).wait(1).to({rotation:-39.3,x:-790,y:1022.2},0).wait(1).to({rotation:-39.6,x:-800.9,y:1024.5},0).wait(1).to({rotation:-39.9,x:-811.9,y:1026.8},0).wait(1).to({rotation:-40.1,x:-822.8,y:1029.1},0).wait(1).to({rotation:-40.4,x:-833.8,y:1031.4},0).wait(1).to({rotation:-40.6,x:-844.7,y:1033.6},0).wait(1).to({rotation:-40.9,x:-855.7,y:1035.9},0).wait(1).to({rotation:-41.2,x:-866.7,y:1038.2},0).wait(1).to({rotation:-41.4,x:-877.6,y:1040.4},0).wait(1).to({rotation:-41.7,x:-888.6,y:1042.7},0).wait(1).to({rotation:-42,x:-899.6,y:1045},0).wait(1).to({rotation:-42.2,x:-910.5,y:1047.3},0).wait(1).to({rotation:-42.5,x:-921.6,y:1049.6},0).wait(1).to({rotation:-42.8,x:-932.6,y:1051.9},0).wait(1).to({rotation:-43,x:-943.6,y:1054.2},0).wait(1).to({rotation:-43.3,x:-954.6,y:1056.5},0).wait(1));

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

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,153,209,0.259)").ss(4).p("EikVhtjMFIrAAAMAAADbHMlIrAAAg");
	this.shape.setTransform(949,640.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.plume1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,489.5,2768.1,1670.5);
// library properties:
lib.properties = {
	id: '2F382BF1E0F843D59E9923DD3014446A',
	width: 1500,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/plumes_scroll_parallaxe2_atlas_.png", id:"plumes_scroll_parallaxe2_atlas_"}
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