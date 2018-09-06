(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"display_graphique_atlas_", frames: [[0,1282,270,450],[0,0,1920,1280]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["display_graphique_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fillebike_big1 = function() {
	this.spriteSheet = ss["display_graphique_atlas_"];
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


(lib.Symbole3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// Calque_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4599D1").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	this.shape.setTransform(75.2,75.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(69,153,209,0.953)").s().p("AkGEHQhthtAAiaQAAiZBthtQBthtCZAAQCaAABtBtQBtBtAACZQAACahtBtQhtBtiaAAQiZAAhthtg");
	this.shape_1.setTransform(75.2,75.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(69,153,209,0.91)").s().p("AkVEWQh0hzABijQgBiiB0hzQBzh0CiABQCjgBBzB0QB0BzgBCiQABCjh0BzQhzB0ijgBQiiABhzh0g");
	this.shape_2.setTransform(75.2,75.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(69,153,209,0.863)").s().p("AkkElQh6h5AAisQAAirB6h5QB5h6CrAAQCsAAB5B6QB6B5AACrQAACsh6B5Qh5B6isAAQirAAh5h6g");
	this.shape_3.setTransform(75.2,75.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(69,153,209,0.82)").s().p("Ak0E1Qh/iBgBi0QABizB/iBQCBh/CzgBQC0ABCBB/QB/CBAACzQAAC0h/CBQiBB/i0AAQizAAiBh/g");
	this.shape_4.setTransform(75.2,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(69,153,209,0.773)").s().p("AlDFEQiGiHAAi9QAAi8CGiHQCHiGC8AAQC9AACHCGQCGCHAAC8QAAC9iGCHQiHCGi9AAQi8AAiHiGg");
	this.shape_5.setTransform(75.2,75.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(69,153,209,0.725)").s().p("AlSFTQiMiNAAjGQAAjFCMiNQCNiMDFAAQDGAACNCMQCMCNAADFQAADGiMCNQiNCMjGAAQjFAAiNiMg");
	this.shape_6.setTransform(75.2,75.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(69,153,209,0.682)").s().p("AliFjQiSiUABjPQgBjOCSiUQCUiSDOABQDPgBCUCSQCSCUgBDOQABDPiSCUQiUCSjPgBQjOABiUiSg");
	this.shape_7.setTransform(75.2,75.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(69,153,209,0.635)").s().p("AlxFyQiYiaAAjYQAAjXCYiaQCaiYDXAAQDYAACaCYQCYCaAADXQAADYiYCaQiaCYjYAAQjXAAiaiYg");
	this.shape_8.setTransform(75.2,75.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(69,153,209,0.592)").s().p("Al/GAQigifAAjhQAAjgCgifQCfigDgAAQDhAACfCgQCgCfAADgQAADhigCfQifCgjhAAQjgAAifigg");
	this.shape_9.setTransform(75.2,75.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(69,153,209,0.545)").s().p("AmPGQQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpQAADqilCmQimCljqAAQjpAAimilg");
	this.shape_10.setTransform(75.2,75.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(69,153,209,0.502)").s().p("AmeGfQisisAAjzQAAjxCsitQCtisDxAAQDzAACsCsQCsCtAADxQAADzisCsQisCsjzAAQjxAAitisg");
	this.shape_11.setTransform(75.2,75.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(69,153,209,0.455)").s().p("AmtGuQiyiyAAj8QAAj7CyiyQCyiyD7AAQD8AACyCyQCyCyAAD7QAAD8iyCyQiyCyj8AAQj7AAiyiyg");
	this.shape_12.setTransform(75.2,75.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(69,153,209,0.408)").s().p("Am8G9Qi5i5ABkEQgBkDC5i5QC5i5EDABQEEgBC5C5QC5C5gBEDQABEEi5C5Qi5C5kEgBQkDABi5i5g");
	this.shape_13.setTransform(75.2,75.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(69,153,209,0.365)").s().p("AnMHNQi+i/AAkOQAAkNC+i/QC/i+ENAAQEOAAC/C+QC+C/AAENQAAEOi+C/Qi/C+kOAAQkNAAi/i+g");
	this.shape_14.setTransform(75.2,75.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(69,153,209,0.318)").s().p("AnaHbQjGjEABkXQgBkWDGjEQDEjGEWABQEXgBDEDGQDGDEgBEWQABEXjGDEQjEDGkXgBQkWABjEjGg");
	this.shape_15.setTransform(75.2,75.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(69,153,209,0.275)").s().p("AnqHrQjLjMAAkfQAAkeDLjMQDMjLEeAAQEfAADMDLQDLDMAAEeQAAEfjLDMQjMDLkfAAQkeAAjMjLg");
	this.shape_16.setTransform(75.2,75.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(69,153,209,0.227)").s().p("An5H6QjRjSAAkoQAAknDRjSQDSjREnAAQEoAADSDRQDRDSAAEnQAAEojRDSQjSDRkoAAQknAAjSjRg");
	this.shape_17.setTransform(75.2,75.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(69,153,209,0.18)").s().p("AoIIJQjXjYAAkxQAAkwDXjYQDYjXEwAAQExAADYDXQDXDYAAEwQAAExjXDYQjYDXkxAAQkwAAjYjXg");
	this.shape_18.setTransform(75.2,75.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(69,153,209,0.137)").s().p("AoXIYQjejeAAk6QAAk5DejeQDejeE5AAQE6AADeDeQDeDeAAE5QAAE6jeDeQjeDek6AAQk5AAjejeg");
	this.shape_19.setTransform(75.2,75.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(69,153,209,0.09)").s().p("AonIoQjkjlABlDQgBlCDkjlQDljkFCABQFDgBDlDkQDkDlgBFCQABFDjkDlQjlDklDgBQlCABjljkg");
	this.shape_20.setTransform(75.2,75.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(69,153,209,0.047)").s().p("Ao2I3QjqjrAAlMQAAlLDqjrQDrjqFLAAQFMAADrDqQDqDrAAFLQAAFMjqDrQjrDqlMAAQlLAAjrjqg");
	this.shape_21.setTransform(75.2,75.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(69,153,209,0)").s().p("ApFJGQjwjygBlUQABlTDwjyQDyjwFTgBQFUABDyDwQDwDyABFTQgBFUjwDyQjyDwlUABQlTgBjyjwg");
	this.shape_22.setTransform(75.2,75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).wait(20));

	// Calque_1 copy 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4599D1").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	this.shape_23.setTransform(75.2,75.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(69,153,209,0.957)").s().p("AkGEHQhshuAAiZQAAiYBshuQBuhsCYAAQCZAABuBsQBsBuAACYQAACZhsBuQhuBsiZAAQiYAAhuhsg");
	this.shape_24.setTransform(75.2,75.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(69,153,209,0.914)").s().p("AkUEVQhyhzgBiiQABihByhzQBzhyChgBQCiABBzByQByBzAAChQAACihyBzQhzByiiAAQihAAhzhyg");
	this.shape_25.setTransform(75.2,75.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(69,153,209,0.871)").s().p("AkjEkQh4h5AAirQAAiqB4h5QB5h4CqAAQCrAAB5B4QB4B5AACqQAACrh4B5Qh5B4irAAQiqAAh5h4g");
	this.shape_26.setTransform(75.2,75.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(69,153,209,0.827)").s().p("AkxEyQh+h/gBizQABiyB+h/QB/h+CygBQCzABB/B+QB+B/ABCyQgBCzh+B/Qh/B+izABQiygBh/h+g");
	this.shape_27.setTransform(75.2,75.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(69,153,209,0.784)").s().p("Ak/FAQiFiFAAi7QAAi6CFiFQCFiFC6AAQC7AACFCFQCFCFAAC6QAAC7iFCFQiFCFi7AAQi6AAiFiFg");
	this.shape_28.setTransform(75.2,75.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(69,153,209,0.737)").s().p("AlOFPQiKiLAAjEQAAjDCKiLQCLiKDDAAQDEAACLCKQCKCLAADDQAADEiKCLQiLCKjEAAQjDAAiLiKg");
	this.shape_29.setTransform(75.2,75.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(69,153,209,0.694)").s().p("AlcFdQiRiQAAjNQAAjMCRiQQCQiRDMAAQDNAACQCRQCRCQAADMQAADNiRCQQiQCRjNAAQjMAAiQiRg");
	this.shape_30.setTransform(75.2,75.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(69,153,209,0.651)").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDVAACXCXQCXCXAADUQAADViXCXQiXCXjVAAQjUAAiXiXg");
	this.shape_31.setTransform(75.2,75.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(69,153,209,0.608)").s().p("Al6F7QicieAAjdQAAjcCcieQCeicDcAAQDdAACeCcQCcCeAADcQAADdicCeQieCcjdAAQjcAAieicg");
	this.shape_32.setTransform(75.2,75.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(69,153,209,0.565)").s().p("AmIGJQijijABjmQgBjlCjijQCjijDlABQDmgBCjCjQCjCjgBDlQABDmijCjQijCjjmgBQjlABijijg");
	this.shape_33.setTransform(75.2,75.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(69,153,209,0.522)").s().p("AmXGYQioipAAjvQAAjuCoipQCpioDuAAQDvAACpCoQCoCpAADuQAADvioCpQipCojvAAQjuAAipiog");
	this.shape_34.setTransform(75.2,75.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(69,153,209,0.478)").s().p("AmlGmQivivAAj3QAAj2CvivQCvivD2AAQD3AACvCvQCvCvAAD2QAAD3ivCvQivCvj3AAQj2AAivivg");
	this.shape_35.setTransform(75.2,75.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(69,153,209,0.435)").s().p("Am0G1Qi0i2AAj/QAAj+C0i2QC2i0D+AAQD/AAC2C0QC0C2AAD+QAAD/i0C2Qi2C0j/AAQj+AAi2i0g");
	this.shape_36.setTransform(75.2,75.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(69,153,209,0.392)").s().p("AnDHEQi6i8AAkIQAAkHC6i8QC8i6EHAAQEIAAC8C6QC6C8AAEHQAAEIi6C8Qi8C6kIAAQkHAAi8i6g");
	this.shape_37.setTransform(75.2,75.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(69,153,209,0.349)").s().p("AnRHSQjBjCAAkQQAAkPDBjCQDCjBEPAAQEQAADCDBQDBDCAAEPQAAEQjBDCQjCDBkQAAQkPAAjCjBg");
	this.shape_38.setTransform(75.2,75.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(69,153,209,0.306)").s().p("AngHhQjGjIAAkZQAAkYDGjIQDIjGEYAAQEZAADIDGQDGDIAAEYQAAEZjGDIQjIDGkZAAQkYAAjIjGg");
	this.shape_39.setTransform(75.2,75.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(69,153,209,0.263)").s().p("AnuHvQjMjOAAkhQAAkgDMjOQDOjMEgAAQEhAADODMQDMDOAAEgQAAEhjMDOQjODMkhAAQkgAAjOjMg");
	this.shape_40.setTransform(75.2,75.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(69,153,209,0.216)").s().p("An8H9QjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpQAAEqjTDTQjTDTkqAAQkpAAjTjTg");
	this.shape_41.setTransform(75.2,75.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(69,153,209,0.173)").s().p("AoLIMQjYjZgBkzQABkyDYjZQDZjYEygBQEzABDZDYQDYDZABEyQgBEzjYDZQjZDYkzABQkygBjZjYg");
	this.shape_42.setTransform(75.2,75.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(69,153,209,0.129)").s().p("AoZIaQjfjfAAk7QAAk6DfjfQDfjfE6AAQE7AADfDfQDfDfAAE6QAAE7jfDfQjfDfk7AAQk6AAjfjfg");
	this.shape_43.setTransform(75.2,75.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(69,153,209,0.086)").s().p("AooIpQjkjmAAlDQAAlCDkjmQDmjkFCAAQFDAADmDkQDkDmAAFCQAAFDjkDmQjmDklDAAQlCAAjmjkg");
	this.shape_44.setTransform(75.2,75.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(69,153,209,0.043)").s().p("Ao3I4QjqjsAAlMQAAlLDqjsQDsjqFLAAQFMAADsDqQDqDsAAFLQAAFMjqDsQjsDqlMAAQlLAAjsjqg");
	this.shape_45.setTransform(75.2,75.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(69,153,209,0)").s().p("ApFJGQjwjygBlUQABlTDwjyQDyjwFTgBQFUABDyDwQDwDyABFTQgBFUjwDyQjyDwlUABQlTgBjyjwg");
	this.shape_46.setTransform(75.2,75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},4).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[]},1).wait(15));

	// Calque_1 copy 3
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4599D1").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	this.shape_47.setTransform(75.2,75.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(69,153,209,0.957)").s().p("AkGEHQhshuAAiZQAAiYBshuQBuhsCYAAQCZAABuBsQBsBuAACYQAACZhsBuQhuBsiZAAQiYAAhuhsg");
	this.shape_48.setTransform(75.2,75.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(69,153,209,0.914)").s().p("AkUEVQhyhzgBiiQABihByhzQBzhyChgBQCiABBzByQByBzAAChQAACihyBzQhzByiiAAQihAAhzhyg");
	this.shape_49.setTransform(75.2,75.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(69,153,209,0.871)").s().p("AkjEkQh4h5AAirQAAiqB4h5QB5h4CqAAQCrAAB5B4QB4B5AACqQAACrh4B5Qh5B4irAAQiqAAh5h4g");
	this.shape_50.setTransform(75.2,75.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(69,153,209,0.827)").s().p("AkxEyQh+h/gBizQABiyB+h/QB/h+CygBQCzABB/B+QB+B/ABCyQgBCzh+B/Qh/B+izABQiygBh/h+g");
	this.shape_51.setTransform(75.2,75.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(69,153,209,0.784)").s().p("Ak/FAQiFiFAAi7QAAi6CFiFQCFiFC6AAQC7AACFCFQCFCFAAC6QAAC7iFCFQiFCFi7AAQi6AAiFiFg");
	this.shape_52.setTransform(75.2,75.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(69,153,209,0.737)").s().p("AlOFPQiKiLAAjEQAAjDCKiLQCLiKDDAAQDEAACLCKQCKCLAADDQAADEiKCLQiLCKjEAAQjDAAiLiKg");
	this.shape_53.setTransform(75.2,75.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(69,153,209,0.694)").s().p("AlcFdQiRiQAAjNQAAjMCRiQQCQiRDMAAQDNAACQCRQCRCQAADMQAADNiRCQQiQCRjNAAQjMAAiQiRg");
	this.shape_54.setTransform(75.2,75.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(69,153,209,0.651)").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDVAACXCXQCXCXAADUQAADViXCXQiXCXjVAAQjUAAiXiXg");
	this.shape_55.setTransform(75.2,75.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(69,153,209,0.608)").s().p("Al6F7QicieAAjdQAAjcCcieQCeicDcAAQDdAACeCcQCcCeAADcQAADdicCeQieCcjdAAQjcAAieicg");
	this.shape_56.setTransform(75.2,75.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(69,153,209,0.565)").s().p("AmIGJQijijABjmQgBjlCjijQCjijDlABQDmgBCjCjQCjCjgBDlQABDmijCjQijCjjmgBQjlABijijg");
	this.shape_57.setTransform(75.2,75.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(69,153,209,0.522)").s().p("AmXGYQioipAAjvQAAjuCoipQCpioDuAAQDvAACpCoQCoCpAADuQAADvioCpQipCojvAAQjuAAipiog");
	this.shape_58.setTransform(75.2,75.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(69,153,209,0.478)").s().p("AmlGmQivivAAj3QAAj2CvivQCvivD2AAQD3AACvCvQCvCvAAD2QAAD3ivCvQivCvj3AAQj2AAivivg");
	this.shape_59.setTransform(75.2,75.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(69,153,209,0.435)").s().p("Am0G1Qi0i2AAj/QAAj+C0i2QC2i0D+AAQD/AAC2C0QC0C2AAD+QAAD/i0C2Qi2C0j/AAQj+AAi2i0g");
	this.shape_60.setTransform(75.2,75.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(69,153,209,0.392)").s().p("AnDHEQi6i8AAkIQAAkHC6i8QC8i6EHAAQEIAAC8C6QC6C8AAEHQAAEIi6C8Qi8C6kIAAQkHAAi8i6g");
	this.shape_61.setTransform(75.2,75.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(69,153,209,0.349)").s().p("AnRHSQjBjCAAkQQAAkPDBjCQDCjBEPAAQEQAADCDBQDBDCAAEPQAAEQjBDCQjCDBkQAAQkPAAjCjBg");
	this.shape_62.setTransform(75.2,75.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(69,153,209,0.306)").s().p("AngHhQjGjIAAkZQAAkYDGjIQDIjGEYAAQEZAADIDGQDGDIAAEYQAAEZjGDIQjIDGkZAAQkYAAjIjGg");
	this.shape_63.setTransform(75.2,75.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(69,153,209,0.263)").s().p("AnuHvQjMjOAAkhQAAkgDMjOQDOjMEgAAQEhAADODMQDMDOAAEgQAAEhjMDOQjODMkhAAQkgAAjOjMg");
	this.shape_64.setTransform(75.2,75.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(69,153,209,0.216)").s().p("An8H9QjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpQAAEqjTDTQjTDTkqAAQkpAAjTjTg");
	this.shape_65.setTransform(75.2,75.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(69,153,209,0.173)").s().p("AoLIMQjYjZgBkzQABkyDYjZQDZjYEygBQEzABDZDYQDYDZABEyQgBEzjYDZQjZDYkzABQkygBjZjYg");
	this.shape_66.setTransform(75.2,75.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(69,153,209,0.129)").s().p("AoZIaQjfjfAAk7QAAk6DfjfQDfjfE6AAQE7AADfDfQDfDfAAE6QAAE7jfDfQjfDfk7AAQk6AAjfjfg");
	this.shape_67.setTransform(75.2,75.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(69,153,209,0.086)").s().p("AooIpQjkjmAAlDQAAlCDkjmQDmjkFCAAQFDAADmDkQDkDmAAFCQAAFDjkDmQjmDklDAAQlCAAjmjkg");
	this.shape_68.setTransform(75.2,75.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(69,153,209,0.043)").s().p("Ao3I4QjqjsAAlMQAAlLDqjsQDsjqFLAAQFMAADsDqQDqDsAAFLQAAFMjqDsQjsDqlMAAQlLAAjsjqg");
	this.shape_69.setTransform(75.2,75.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(69,153,209,0)").s().p("ApFJGQjwjygBlUQABlTDwjyQDyjwFTgBQFUABDyDwQDwDyABFTQgBFUjwDyQjyDwlUABQlTgBjyjwg");
	this.shape_70.setTransform(75.2,75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47}]},11).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).wait(8));

	// Calque_1
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4599D1").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	this.shape_71.setTransform(75.2,75.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(69,153,209,0.957)").s().p("AkGEHQhshuAAiZQAAiYBshuQBuhsCYAAQCZAABuBsQBsBuAACYQAACZhsBuQhuBsiZAAQiYAAhuhsg");
	this.shape_72.setTransform(75.2,75.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(69,153,209,0.914)").s().p("AkUEVQhyhzgBiiQABihByhzQBzhyChgBQCiABBzByQByBzAAChQAACihyBzQhzByiiAAQihAAhzhyg");
	this.shape_73.setTransform(75.2,75.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(69,153,209,0.871)").s().p("AkjEkQh4h5AAirQAAiqB4h5QB5h4CqAAQCrAAB5B4QB4B5AACqQAACrh4B5Qh5B4irAAQiqAAh5h4g");
	this.shape_74.setTransform(75.2,75.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(69,153,209,0.827)").s().p("AkxEyQh+h/gBizQABiyB+h/QB/h+CygBQCzABB/B+QB+B/ABCyQgBCzh+B/Qh/B+izABQiygBh/h+g");
	this.shape_75.setTransform(75.2,75.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(69,153,209,0.784)").s().p("Ak/FAQiFiFAAi7QAAi6CFiFQCFiFC6AAQC7AACFCFQCFCFAAC6QAAC7iFCFQiFCFi7AAQi6AAiFiFg");
	this.shape_76.setTransform(75.2,75.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(69,153,209,0.737)").s().p("AlOFPQiKiLAAjEQAAjDCKiLQCLiKDDAAQDEAACLCKQCKCLAADDQAADEiKCLQiLCKjEAAQjDAAiLiKg");
	this.shape_77.setTransform(75.2,75.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(69,153,209,0.694)").s().p("AlcFdQiRiQAAjNQAAjMCRiQQCQiRDMAAQDNAACQCRQCRCQAADMQAADNiRCQQiQCRjNAAQjMAAiQiRg");
	this.shape_78.setTransform(75.2,75.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(69,153,209,0.651)").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDVAACXCXQCXCXAADUQAADViXCXQiXCXjVAAQjUAAiXiXg");
	this.shape_79.setTransform(75.2,75.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(69,153,209,0.608)").s().p("Al6F7QicieAAjdQAAjcCcieQCeicDcAAQDdAACeCcQCcCeAADcQAADdicCeQieCcjdAAQjcAAieicg");
	this.shape_80.setTransform(75.2,75.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(69,153,209,0.565)").s().p("AmIGJQijijABjmQgBjlCjijQCjijDlABQDmgBCjCjQCjCjgBDlQABDmijCjQijCjjmgBQjlABijijg");
	this.shape_81.setTransform(75.2,75.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(69,153,209,0.522)").s().p("AmXGYQioipAAjvQAAjuCoipQCpioDuAAQDvAACpCoQCoCpAADuQAADvioCpQipCojvAAQjuAAipiog");
	this.shape_82.setTransform(75.2,75.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(69,153,209,0.478)").s().p("AmlGmQivivAAj3QAAj2CvivQCvivD2AAQD3AACvCvQCvCvAAD2QAAD3ivCvQivCvj3AAQj2AAivivg");
	this.shape_83.setTransform(75.2,75.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(69,153,209,0.435)").s().p("Am0G1Qi0i2AAj/QAAj+C0i2QC2i0D+AAQD/AAC2C0QC0C2AAD+QAAD/i0C2Qi2C0j/AAQj+AAi2i0g");
	this.shape_84.setTransform(75.2,75.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(69,153,209,0.392)").s().p("AnDHEQi6i8AAkIQAAkHC6i8QC8i6EHAAQEIAAC8C6QC6C8AAEHQAAEIi6C8Qi8C6kIAAQkHAAi8i6g");
	this.shape_85.setTransform(75.2,75.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(69,153,209,0.349)").s().p("AnRHSQjBjCAAkQQAAkPDBjCQDCjBEPAAQEQAADCDBQDBDCAAEPQAAEQjBDCQjCDBkQAAQkPAAjCjBg");
	this.shape_86.setTransform(75.2,75.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(69,153,209,0.306)").s().p("AngHhQjGjIAAkZQAAkYDGjIQDIjGEYAAQEZAADIDGQDGDIAAEYQAAEZjGDIQjIDGkZAAQkYAAjIjGg");
	this.shape_87.setTransform(75.2,75.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(69,153,209,0.263)").s().p("AnuHvQjMjOAAkhQAAkgDMjOQDOjMEgAAQEhAADODMQDMDOAAEgQAAEhjMDOQjODMkhAAQkgAAjOjMg");
	this.shape_88.setTransform(75.2,75.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(69,153,209,0.216)").s().p("An8H9QjTjTAAkqQAAkpDTjTQDTjTEpAAQEqAADTDTQDTDTAAEpQAAEqjTDTQjTDTkqAAQkpAAjTjTg");
	this.shape_89.setTransform(75.2,75.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(69,153,209,0.173)").s().p("AoLIMQjYjZgBkzQABkyDYjZQDZjYEygBQEzABDZDYQDYDZABEyQgBEzjYDZQjZDYkzABQkygBjZjYg");
	this.shape_90.setTransform(75.2,75.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(69,153,209,0.129)").s().p("AoZIaQjfjfAAk7QAAk6DfjfQDfjfE6AAQE7AADfDfQDfDfAAE6QAAE7jfDfQjfDfk7AAQk6AAjfjfg");
	this.shape_91.setTransform(75.2,75.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(69,153,209,0.086)").s().p("AooIpQjkjmAAlDQAAlCDkjmQDmjkFCAAQFDAADmDkQDkDmAAFCQAAFDjkDmQjmDklDAAQlCAAjmjkg");
	this.shape_92.setTransform(75.2,75.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(69,153,209,0.043)").s().p("Ao3I4QjqjsAAlMQAAlLDqjsQDsjqFLAAQFMAADsDqQDqDsAAFLQAAFMjqDsQjsDqlMAAQlLAAjsjqg");
	this.shape_93.setTransform(75.2,75.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(69,153,209,0)").s().p("ApFJGQjwjygBlUQABlTDwjyQDyjwFTgBQFUABDyDwQDwDyABFTQgBFUjwDyQjyDwlUABQlTgBjyjwg");
	this.shape_94.setTransform(75.2,75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71}]},19).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.1,40.1,70.1,70.1);


(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4599D1").ss(10).p("ACNAAQAAA6gqAqQgpAog6AAQg5AAgqgoQgpgqAAg6QAAg5ApgqQAqgoA5AAQA6AAApAoQAqAqAAA5g");
	this.shape.setTransform(22.3,99.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjBkQgpgqAAg6QAAg5ApgpQAqgpA5gBQA6ABApApQAqApAAA5QAAA6gqAqQgpAog6AAQg5AAgqgog");
	this.shape_1.setTransform(22.3,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(3.2,80.3,38.2,38.1), null);


// stage content:
(lib.display_graphique = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_20
	this.instance = new lib.Symbole2();
	this.instance.parent = this;
	this.instance.setTransform(62.7,935.4,1.037,1.037,0,0,0,40.1,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:22.3,regY:99.3,scaleX:1.04,scaleY:1.04,x:50.9,y:976.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:57.5,y:976.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:64.2,y:976.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:70.9,y:977},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:77.5,y:977.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:84.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:90.8,y:977.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:97.5,y:977.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:104.2,y:977.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:110.8,y:977.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:117.5,y:977.6},0).wait(1).to({x:124.2},0).wait(1).to({x:130.9},0).wait(1).to({x:137.6},0).wait(1).to({x:144.3},0).wait(1).to({x:151},0).wait(1).to({x:157.7},0).wait(1).to({x:164.3},0).wait(1).to({x:171},0).wait(1).to({x:177.7},0).wait(1).to({x:184.4},0).wait(1).to({x:191.1},0).wait(1).to({x:197.8},0).wait(1).to({x:204.5},0).wait(1).to({x:211.2},0).wait(1).to({x:217.9},0).wait(1).to({x:224.6},0).wait(1).to({x:231.3},0).wait(1).to({x:238},0).wait(1).to({x:244.7},0).wait(1).to({x:251.4},0).wait(1).to({x:258.1},0).wait(1).to({x:264.8},0).wait(1).to({x:271.5},0).wait(1).to({x:278.2},0).wait(1).to({x:284.9},0).wait(1).to({x:291.6},0).wait(1).to({x:298.3},0).wait(1).to({x:305},0).wait(1).to({x:311.7},0).wait(1).to({x:318.4},0).wait(1).to({x:324,y:975.9},0).wait(1).to({x:329.7,y:974.2},0).wait(1).to({x:335.3,y:972.5},0).wait(1).to({x:340.9,y:970.8},0).wait(1).to({x:346.6,y:969.1},0).wait(1).to({x:352.2,y:967.4},0).wait(1).to({x:357.9,y:965.7},0).wait(1).to({x:363.5,y:964},0).wait(1).to({x:369.1,y:962.3},0).wait(1).to({x:374.8,y:960.6},0).wait(1).to({x:380.4,y:958.9},0).wait(1).to({x:386,y:957.2},0).wait(1).to({x:391.7,y:955.5},0).wait(1).to({x:397.3,y:953.8},0).wait(1).to({x:403,y:952.1},0).wait(1).to({x:408.6,y:950.4},0).wait(1).to({x:414.2,y:948.7},0).wait(1).to({x:419.9,y:947},0).wait(1).to({x:425.5,y:945.3},0).wait(1).to({x:431.1,y:943.6},0).wait(1).to({x:436.8,y:942},0).wait(1).to({x:442.4,y:940.3},0).wait(1).to({x:448.1,y:938.6},0).wait(1).to({x:453.7,y:936.9},0).wait(1).to({x:459,y:937.8},0).wait(1).to({x:464.2,y:938.7},0).wait(1).to({x:469.5,y:939.6},0).wait(1).to({x:474.7,y:940.5},0).wait(1).to({x:480,y:941.5},0).wait(1).to({x:485.3,y:942.4},0).wait(1).to({x:490.5,y:943.3},0).wait(1).to({x:495.8,y:944.2},0).wait(1).to({x:501,y:945.1},0).wait(1).to({x:506.3,y:946},0).wait(1).to({x:511.5,y:947},0).wait(1).to({x:516.8,y:947.9},0).wait(1).to({x:522.1,y:948.8},0).wait(1).to({x:527.3,y:949.7},0).wait(1).to({x:532.6,y:950.6},0).wait(1).to({x:537.8,y:951.6},0).wait(1).to({x:543.1,y:952.5},0).wait(1).to({x:548.4,y:953.4},0).wait(1).to({x:553.6,y:954.3},0).wait(1).to({x:558.9,y:955.2},0).wait(1).to({x:564.1,y:956.2},0).wait(1).to({x:570.1,y:955.2},0).wait(1).to({x:576,y:954.2},0).wait(1).to({x:581.9,y:953.2},0).wait(1).to({x:587.8,y:952.2},0).wait(1).to({x:593.7,y:951.2},0).wait(1).to({x:599.6,y:950.2},0).wait(1).to({x:605.5,y:949.3},0).wait(1).to({x:611.4,y:948.3},0).wait(1).to({x:617.3,y:947.3},0).wait(1).to({x:623.2,y:946.3},0).wait(1).to({x:629.1,y:945.3},0).wait(1).to({x:635,y:944.3},0).wait(1).to({x:640.9,y:943.4},0).wait(1).to({x:646.8,y:942.4},0).wait(1).to({x:652.8,y:941.4},0).wait(1).to({x:658.7,y:940.4},0).wait(1).to({x:664.6,y:939.4},0).wait(1).to({x:670.5,y:938.4},0).wait(1).to({x:676.4,y:937.4},0).wait(1).to({x:682.3,y:936.5},0).wait(1).to({x:688.9,y:932.5},0).wait(1).to({x:695.4,y:928.5},0).wait(1).to({x:702,y:924.5},0).wait(1).to({x:708.5,y:920.5},0).wait(1).to({x:715.1,y:916.5},0).wait(1).to({x:721.7,y:912.5},0).wait(1).to({x:728.2,y:908.6},0).wait(1).to({x:734.8,y:904.6},0).wait(1).to({x:741.3,y:900.6},0).wait(1).to({x:747.9,y:896.6},0).wait(1).to({x:754.4,y:892.6},0).wait(1).to({x:761,y:888.6},0).wait(1).to({x:767.6,y:884.7},0).wait(1).to({x:774.1,y:880.7},0).wait(1).to({x:780.7,y:876.7},0).wait(1).to({x:787.2,y:872.7},0).wait(1).to({x:793.8,y:868.7},0).wait(1).to({x:800.4,y:864.7},0).wait(1).to({x:806.9,y:860.8},0).wait(1).to({x:813.5,y:856.8},0).wait(1).to({x:820,y:852.8},0).wait(1).to({x:826.6,y:848.8},0).wait(1).to({x:833.2,y:844.8},0).wait(1).to({x:839.7,y:840.8},0).wait(1).to({x:846.3,y:836.8},0).wait(1).to({x:852.8,y:832.9},0).wait(1).to({x:859.9,y:830.9},0).wait(1).to({x:867,y:828.9},0).wait(1).to({x:874.2,y:826.9},0).wait(1).to({x:881.3,y:824.9},0).wait(1).to({x:888.4,y:823},0).wait(1).to({x:895.5,y:821.1},0).wait(1).to({x:902.6,y:819.2},0).wait(1).to({x:909.8,y:817.3},0).wait(1).to({x:916.9,y:815.5},0).wait(1).to({x:924.1,y:813.6},0).wait(1).to({x:931.2,y:811.9},0).wait(1).to({x:938.4,y:810.1},0).wait(1).to({x:945.6,y:808.5},0).wait(1).to({x:952.8,y:806.9},0).wait(1).to({x:960.1,y:805.6},0).wait(1).to({x:967.4,y:804.8},0).wait(1).to({x:971.8,y:804.6},0).wait(1).to({x:976.2,y:804.1},0).wait(1).to({x:980.5,y:803.3},0).wait(1).to({x:984.8,y:802.4},0).wait(1).to({x:989,y:801.2},0).wait(1).to({x:993.2,y:799.9},0).wait(1).to({x:997.4,y:798.4},0).wait(1).to({x:1001.4,y:796.8},0).wait(1).to({x:1005.4,y:795},0).wait(1).to({x:1013.6,y:799.1},0).wait(1).to({x:1021.8,y:803.3},0).wait(1).to({x:1030,y:807.4},0).wait(1).to({x:1038.1,y:811.5},0).wait(1).to({x:1046.3,y:815.7},0).wait(1).to({x:1054.5,y:819.8},0).wait(1).to({x:1062.7,y:823.9},0).wait(1).to({x:1070.8,y:828},0).wait(1).to({x:1079,y:832.2},0).wait(1).to({x:1087.2,y:836.3},0).wait(1).to({x:1095.4,y:840.4},0).wait(1).to({x:1103.5,y:844.6},0).wait(1).to({x:1111.7,y:848.7},0).wait(1).to({x:1119.9,y:852.8},0).wait(1).to({x:1128.1,y:856.9},0).wait(1).to({x:1136.2,y:861.1},0).wait(1).to({x:1144.4,y:865.2},0).wait(1).to({x:1152.6,y:869.3},0).wait(1).to({x:1160.8,y:873.5},0).wait(1).to({x:1168.9,y:877.6},0).wait(1).to({x:1177.1,y:881.7},0).wait(1).to({x:1185.3,y:885.8},0).wait(1).to({x:1193.5,y:890},0).wait(1).to({x:1201.6,y:894.1},0).wait(1).to({x:1209.8,y:898.2},0).wait(1).to({x:1218,y:902.4},0).wait(1).to({x:1226.1,y:906.5},0).wait(1).to({x:1234.3,y:910.6},0).wait(1).to({x:1242.5,y:914.7},0).wait(1).to({x:1250.7,y:918.9},0).wait(1).to({x:1258.8,y:923},0).wait(1).to({x:1265.7,y:926.8},0).wait(1).to({x:1272.6,y:930.5},0).wait(1).to({x:1279.4,y:934.3},0).wait(1).to({x:1286.3,y:938},0).wait(1).to({x:1293.2,y:941.8},0).wait(1).to({x:1300,y:945.5},0).wait(1).to({x:1306.9,y:949.3},0).wait(1).to({x:1313.8,y:953},0).wait(1).to({x:1320.6,y:956.8},0).wait(1).to({x:1327.5,y:960.5},0).wait(1).to({x:1334.4,y:964.3},0).wait(1).to({x:1341.2,y:968.1},0).wait(1).to({x:1348.1,y:971.8},0).wait(1).to({x:1356.1},0).wait(1).to({x:1364.1},0).wait(1).to({x:1372.2},0).wait(1).to({x:1380.2},0).wait(1).to({x:1388.2},0).wait(1).to({x:1396.2},0).wait(1).to({x:1404.2},0).wait(1).to({x:1412.3},0).wait(1).to({x:1420.3},0).wait(1).to({x:1428.3},0).wait(1).to({x:1436.3},0).wait(1).to({x:1444.3},0).wait(1).to({x:1452.4},0).wait(1).to({x:1460.4},0).wait(1).to({x:1468.4},0).wait(1).to({x:1476.4},0).wait(1).to({x:1484.4},0).wait(1));

	// rond copy 2
	this.instance_1 = new lib.Symbole3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1007.3,777.2,1.949,1.949,0,0,0,75.4,75.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156).to({_off:false},0).wait(1).to({regX:75.2,regY:75.2,x:1006.9,y:776.7,alpha:0.955},0).wait(1).to({x:1007,alpha:0.909},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.818},0).wait(1).to({x:1007.1,y:776.8,alpha:0.773},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.636},0).wait(1).to({x:1007.2,y:776.9,alpha:0.591},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.5},0).wait(1).to({x:1007.3,alpha:0.455},0).wait(1).to({y:777,alpha:0.409},0).wait(1).to({alpha:0.364},0).wait(1).to({x:1007.4,alpha:0.318},0).wait(1).to({alpha:0.273},0).wait(1).to({y:777.1,alpha:0.227},0).wait(1).to({x:1007.5,alpha:0.182},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(40));

	// rond copy
	this.instance_2 = new lib.Symbole3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(685.2,936.5,1.949,1.949,0,0,0,75.5,75.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).wait(1).to({regX:75.2,regY:75.2,x:684.6,y:935.9,alpha:0.955},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(90));

	// rond
	this.instance_3 = new lib.Symbole3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(316.5,978.1,1.949,1.949,0,0,0,75.6,75.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).wait(1).to({regX:75.2,regY:75.2,x:315.7,y:977.5,alpha:0.955},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(155));

	// Calque_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(69,153,209,0.259)").ss(4).p("EhqbANxMAoUAAAIThmOIPkDHITFjHIJtmqIPEoaIKNiOIMbj/IRWLiITEH7IONICIUZAA");
	this.shape.setTransform(766.2,884.6,1.062,1.062);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(219));

	// masque (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg8vBQAMAAAgunMB5fAAAMAAAAung");
	var mask_graphics_1 = new cjs.Graphics().p("Eg9QBQAMAAAgunMB6hAAAMAAAAung");
	var mask_graphics_2 = new cjs.Graphics().p("Eg9yBQAMAAAgunMB7lAAAMAAAAung");
	var mask_graphics_3 = new cjs.Graphics().p("Eg+TBQAMAAAgunMB8nAAAMAAAAung");
	var mask_graphics_4 = new cjs.Graphics().p("Eg+1BQAMAAAgunMB9rAAAMAAAAung");
	var mask_graphics_5 = new cjs.Graphics().p("Eg/WBQAMAAAgunMB+tAAAMAAAAung");
	var mask_graphics_6 = new cjs.Graphics().p("Eg/4BQAMAAAgunMB/xAAAMAAAAung");
	var mask_graphics_7 = new cjs.Graphics().p("EhAZBQAMAAAgumMCAzAAAMAAAAumg");
	var mask_graphics_8 = new cjs.Graphics().p("EhA7BQAMAAAgumMCB3AAAMAAAAumg");
	var mask_graphics_9 = new cjs.Graphics().p("EhBcBQAMAAAgumMCC5AAAMAAAAumg");
	var mask_graphics_10 = new cjs.Graphics().p("EhB+BQAMAAAgumMCD9AAAMAAAAumg");
	var mask_graphics_11 = new cjs.Graphics().p("EhCfBQAMAAAgunMCE/AAAMAAAAung");
	var mask_graphics_12 = new cjs.Graphics().p("EhDBBQAMAAAgunMCGDAAAMAAAAung");
	var mask_graphics_13 = new cjs.Graphics().p("EhDiBQAMAAAgunMCHFAAAMAAAAung");
	var mask_graphics_14 = new cjs.Graphics().p("EhEEBQAMAAAgunMCIJAAAMAAAAung");
	var mask_graphics_15 = new cjs.Graphics().p("EhElBQAMAAAgunMCJLAAAMAAAAung");
	var mask_graphics_16 = new cjs.Graphics().p("EhFHBQAMAAAgunMCKPAAAMAAAAung");
	var mask_graphics_17 = new cjs.Graphics().p("EhFoBQAMAAAgunMCLRAAAMAAAAung");
	var mask_graphics_18 = new cjs.Graphics().p("EhGKBQAMAAAgunMCMVAAAMAAAAung");
	var mask_graphics_19 = new cjs.Graphics().p("EhGrBQAMAAAgunMCNXAAAMAAAAung");
	var mask_graphics_20 = new cjs.Graphics().p("EhHNBQAMAAAgunMCObAAAMAAAAung");
	var mask_graphics_21 = new cjs.Graphics().p("EhHuBQAMAAAgunMCPdAAAMAAAAung");
	var mask_graphics_22 = new cjs.Graphics().p("EhIQBQAMAAAgunMCQhAAAMAAAAung");
	var mask_graphics_23 = new cjs.Graphics().p("EhIxBQAMAAAgunMCRjAAAMAAAAung");
	var mask_graphics_24 = new cjs.Graphics().p("EhJTBQAMAAAgumMCSnAAAMAAAAumg");
	var mask_graphics_25 = new cjs.Graphics().p("EhJ0BQAMAAAgumMCTpAAAMAAAAumg");
	var mask_graphics_26 = new cjs.Graphics().p("EhKWBQAMAAAgumMCUtAAAMAAAAumg");
	var mask_graphics_27 = new cjs.Graphics().p("EhK3BQAMAAAgumMCVvAAAMAAAAumg");
	var mask_graphics_28 = new cjs.Graphics().p("EhLZBQAMAAAgumMCWzAAAMAAAAumg");
	var mask_graphics_29 = new cjs.Graphics().p("EhL6BQAMAAAgumMCX1AAAMAAAAumg");
	var mask_graphics_30 = new cjs.Graphics().p("EhMcBQAMAAAgumMCY5AAAMAAAAumg");
	var mask_graphics_31 = new cjs.Graphics().p("EhM9BQAMAAAgumMCZ7AAAMAAAAumg");
	var mask_graphics_32 = new cjs.Graphics().p("EhNfBQAMAAAgumMCa/AAAMAAAAumg");
	var mask_graphics_33 = new cjs.Graphics().p("EhOABQAMAAAgumMCcBAAAMAAAAumg");
	var mask_graphics_34 = new cjs.Graphics().p("EhOiBQAMAAAgumMCdFAAAMAAAAumg");
	var mask_graphics_35 = new cjs.Graphics().p("EhPDBQAMAAAgumMCeHAAAMAAAAumg");
	var mask_graphics_36 = new cjs.Graphics().p("EhPlBQAMAAAgumMCfLAAAMAAAAumg");
	var mask_graphics_37 = new cjs.Graphics().p("EhQGBQAMAAAgumMCgNAAAMAAAAumg");
	var mask_graphics_38 = new cjs.Graphics().p("EhQoBQAMAAAgumMChRAAAMAAAAumg");
	var mask_graphics_39 = new cjs.Graphics().p("EhRJBQAMAAAgumMCiTAAAMAAAAumg");
	var mask_graphics_40 = new cjs.Graphics().p("EhRrBQAMAAAgumMCjXAAAMAAAAumg");
	var mask_graphics_41 = new cjs.Graphics().p("EhSMBQAMAAAgumMCkZAAAMAAAAumg");
	var mask_graphics_42 = new cjs.Graphics().p("EhSuBQBMAAAgunMCldAAAMAAAAung");
	var mask_graphics_43 = new cjs.Graphics().p("EhTPBQBMAAAgunMCmfAAAMAAAAung");
	var mask_graphics_44 = new cjs.Graphics().p("EhTxBQBMAAAgunMCnjAAAMAAAAung");
	var mask_graphics_45 = new cjs.Graphics().p("EhUSBQBMAAAgunMColAAAMAAAAung");
	var mask_graphics_46 = new cjs.Graphics().p("EhU0BQBMAAAgunMCppAAAMAAAAung");
	var mask_graphics_47 = new cjs.Graphics().p("EhVVBQBMAAAgunMCqrAAAMAAAAung");
	var mask_graphics_48 = new cjs.Graphics().p("EhV3BQBMAAAgunMCrvAAAMAAAAung");
	var mask_graphics_49 = new cjs.Graphics().p("EhWYBQBMAAAgunMCsxAAAMAAAAung");
	var mask_graphics_50 = new cjs.Graphics().p("EhW6BQBMAAAgunMCt1AAAMAAAAung");
	var mask_graphics_51 = new cjs.Graphics().p("EhXbBQBMAAAgunMCu3AAAMAAAAung");
	var mask_graphics_52 = new cjs.Graphics().p("EhX9BQBMAAAgunMCv7AAAMAAAAung");
	var mask_graphics_53 = new cjs.Graphics().p("EhYeBQBMAAAgunMCw9AAAMAAAAung");
	var mask_graphics_54 = new cjs.Graphics().p("EhZABQBMAAAgunMCyBAAAMAAAAung");
	var mask_graphics_55 = new cjs.Graphics().p("EhZhBQBMAAAgunMCzDAAAMAAAAung");
	var mask_graphics_56 = new cjs.Graphics().p("EhaDBQAMAAAgumMC0HAAAMAAAAumg");
	var mask_graphics_57 = new cjs.Graphics().p("EhakBQAMAAAgumMC1JAAAMAAAAumg");
	var mask_graphics_58 = new cjs.Graphics().p("EhbGBQAMAAAgumMC2NAAAMAAAAumg");
	var mask_graphics_59 = new cjs.Graphics().p("EhbnBQAMAAAgumMC3PAAAMAAAAumg");
	var mask_graphics_60 = new cjs.Graphics().p("EhcJBQAMAAAgunMC4TAAAMAAAAung");
	var mask_graphics_61 = new cjs.Graphics().p("EhcqBQAMAAAgunMC5VAAAMAAAAung");
	var mask_graphics_62 = new cjs.Graphics().p("EhdMBQAMAAAgunMC6ZAAAMAAAAung");
	var mask_graphics_63 = new cjs.Graphics().p("EhdtBQAMAAAgunMC7bAAAMAAAAung");
	var mask_graphics_64 = new cjs.Graphics().p("EhePBQAMAAAgunMC8fAAAMAAAAung");
	var mask_graphics_65 = new cjs.Graphics().p("EhewBQAMAAAgumMC9hAAAMAAAAumg");
	var mask_graphics_66 = new cjs.Graphics().p("EhfSBQAMAAAgumMC+lAAAMAAAAumg");
	var mask_graphics_67 = new cjs.Graphics().p("EhfzBQAMAAAgumMC/nAAAMAAAAumg");
	var mask_graphics_68 = new cjs.Graphics().p("EhgVBQAMAAAgumMDArAAAMAAAAumg");
	var mask_graphics_69 = new cjs.Graphics().p("Ehg2BQBMAAAgunMDBtAAAMAAAAung");
	var mask_graphics_70 = new cjs.Graphics().p("EhhYBQBMAAAgunMDCxAAAMAAAAung");
	var mask_graphics_71 = new cjs.Graphics().p("Ehh5BQBMAAAgunMDDzAAAMAAAAung");
	var mask_graphics_72 = new cjs.Graphics().p("EhibBQBMAAAgunMDE3AAAMAAAAung");
	var mask_graphics_73 = new cjs.Graphics().p("Ehi8BQAMAAAgumMDF5AAAMAAAAumg");
	var mask_graphics_74 = new cjs.Graphics().p("EhjeBQAMAAAgumMDG9AAAMAAAAumg");
	var mask_graphics_75 = new cjs.Graphics().p("Ehj/BQAMAAAgumMDH/AAAMAAAAumg");
	var mask_graphics_76 = new cjs.Graphics().p("EhkhBQAMAAAgumMDJDAAAMAAAAumg");
	var mask_graphics_77 = new cjs.Graphics().p("EhlCBQAMAAAgumMDKFAAAMAAAAumg");
	var mask_graphics_78 = new cjs.Graphics().p("EhljBQAMAAAgumMDLHAAAMAAAAumg");
	var mask_graphics_79 = new cjs.Graphics().p("EhmFBQAMAAAgumMDMLAAAMAAAAumg");
	var mask_graphics_80 = new cjs.Graphics().p("EhmmBQAMAAAgumMDNNAAAMAAAAumg");
	var mask_graphics_81 = new cjs.Graphics().p("EhnIBQAMAAAgumMDORAAAMAAAAumg");
	var mask_graphics_82 = new cjs.Graphics().p("EhnpBQAMAAAgumMDPTAAAMAAAAumg");
	var mask_graphics_83 = new cjs.Graphics().p("EhoLBQAMAAAgumMDQXAAAMAAAAumg");
	var mask_graphics_84 = new cjs.Graphics().p("EhqKBQAMAAAgumMDUVAAAMAAAAumg");
	var mask_graphics_85 = new cjs.Graphics().p("EhsJBQAMAAAgumMDYTAAAMAAAAumg");
	var mask_graphics_86 = new cjs.Graphics().p("EhuHBQAMAAAgumMDcPAAAMAAAAumg");
	var mask_graphics_87 = new cjs.Graphics().p("EhwGBQAMAAAgumMDgNAAAMAAAAumg");
	var mask_graphics_88 = new cjs.Graphics().p("EhyFBQBMAAAgunMDkLAAAMAAAAung");
	var mask_graphics_89 = new cjs.Graphics().p("Eh0EBQBMAAAgunMDoJAAAMAAAAung");
	var mask_graphics_90 = new cjs.Graphics().p("Eh2DBQBMAAAgunMDsHAAAMAAAAung");
	var mask_graphics_91 = new cjs.Graphics().p("Eh4CBQBMAAAgunMDwFAAAMAAAAung");
	var mask_graphics_92 = new cjs.Graphics().p("Eh6ABQBMAAAgunMD0BAAAMAAAAung");
	var mask_graphics_93 = new cjs.Graphics().p("Eh7/BQBMAAAgunMD3/AAAMAAAAung");
	var mask_graphics_94 = new cjs.Graphics().p("Eh9+BQAMAAAgumMD79AAAMAAAAumg");
	var mask_graphics_95 = new cjs.Graphics().p("Eh7ZBQAMAAAgumMD2zAAAMAAAAumg");
	var mask_graphics_96 = new cjs.Graphics().p("Eh40BQAMAAAgumMDxpAAAMAAAAumg");
	var mask_graphics_97 = new cjs.Graphics().p("Eh2OBQBMAAAgunMDsdAAAMAAAAung");
	var mask_graphics_98 = new cjs.Graphics().p("EhzpBQBMAAAgumMDnTAAAMAAAAumg");
	var mask_graphics_99 = new cjs.Graphics().p("EhxEBQAMAAAgumMDiJAAAMAAAAumg");
	var mask_graphics_100 = new cjs.Graphics().p("EhxmBQAMAAAgumMDjNAAAMAAAAumg");
	var mask_graphics_101 = new cjs.Graphics().p("EhyHBQAMAAAgumMDkPAAAMAAAAumg");
	var mask_graphics_102 = new cjs.Graphics().p("EhypBQAMAAAgumMDlTAAAMAAAAumg");
	var mask_graphics_103 = new cjs.Graphics().p("EhzKBQAMAAAgumMDmVAAAMAAAAumg");
	var mask_graphics_104 = new cjs.Graphics().p("EhzsBQAMAAAgumMDnZAAAMAAAAumg");
	var mask_graphics_105 = new cjs.Graphics().p("Eh0NBQAMAAAgumMDobAAAMAAAAumg");
	var mask_graphics_106 = new cjs.Graphics().p("Eh0vBQAMAAAgumMDpfAAAMAAAAumg");
	var mask_graphics_107 = new cjs.Graphics().p("Eh1QBQAMAAAgumMDqhAAAMAAAAumg");
	var mask_graphics_108 = new cjs.Graphics().p("Eh1yBQAMAAAgumMDrlAAAMAAAAumg");
	var mask_graphics_109 = new cjs.Graphics().p("Eh2TBQAMAAAgumMDsnAAAMAAAAumg");
	var mask_graphics_110 = new cjs.Graphics().p("Eh21BQAMAAAgumMDtrAAAMAAAAumg");
	var mask_graphics_111 = new cjs.Graphics().p("Eh3WBQAMAAAgumMDutAAAMAAAAumg");
	var mask_graphics_112 = new cjs.Graphics().p("Eh34BQAMAAAgumMDvxAAAMAAAAumg");
	var mask_graphics_113 = new cjs.Graphics().p("Eh4ZBQAMAAAgumMDwzAAAMAAAAumg");
	var mask_graphics_114 = new cjs.Graphics().p("Eh47BQAMAAAgunMDx3AAAMAAAAung");
	var mask_graphics_115 = new cjs.Graphics().p("Eh5cBQAMAAAgunMDy5AAAMAAAAung");
	var mask_graphics_116 = new cjs.Graphics().p("Eh5+BQAMAAAgunMDz9AAAMAAAAung");
	var mask_graphics_117 = new cjs.Graphics().p("Eh6fBP/MAAAgumMD0/AAAMAAAAumg");
	var mask_graphics_118 = new cjs.Graphics().p("Eh7BBP/MAAAgumMD2DAAAMAAAAumg");
	var mask_graphics_119 = new cjs.Graphics().p("Eh7iBP/MAAAgumMD3FAAAMAAAAumg");
	var mask_graphics_120 = new cjs.Graphics().p("Eh8EBP/MAAAgumMD4JAAAMAAAAumg");
	var mask_graphics_121 = new cjs.Graphics().p("Eh8lBP/MAAAgumMD5LAAAMAAAAumg");
	var mask_graphics_122 = new cjs.Graphics().p("Eh9HBP/MAAAgumMD6PAAAMAAAAumg");
	var mask_graphics_123 = new cjs.Graphics().p("Eh9oBP/MAAAgumMD7RAAAMAAAAumg");
	var mask_graphics_124 = new cjs.Graphics().p("Eh+KBP/MAAAgumMD8VAAAMAAAAumg");
	var mask_graphics_125 = new cjs.Graphics().p("Eh+rBP/MAAAgumMD9XAAAMAAAAumg");
	var mask_graphics_126 = new cjs.Graphics().p("Eh/NBQAMAAAgunMD+bAAAMAAAAung");
	var mask_graphics_127 = new cjs.Graphics().p("Eh/uBP9MAAAgumMD/dAAAMAAAAumg");
	var mask_graphics_128 = new cjs.Graphics().p("EiAPBP6MAAAgumMEAfAAAMAAAAumg");
	var mask_graphics_129 = new cjs.Graphics().p("EiAxBP4MAAAgumMEBjAAAMAAAAumg");
	var mask_graphics_130 = new cjs.Graphics().p("EiBSBP1MAAAgumMEClAAAMAAAAumg");
	var mask_graphics_131 = new cjs.Graphics().p("EiB0BPxMAAAgumMEDpAAAMAAAAumg");
	var mask_graphics_132 = new cjs.Graphics().p("EiCVBP0MAAAgumMEErAAAMAAAAumg");
	var mask_graphics_133 = new cjs.Graphics().p("EiC3BP2MAAAgumMEFvAAAMAAAAumg");
	var mask_graphics_134 = new cjs.Graphics().p("EiDYBP4MAAAgumMEGxAAAMAAAAumg");
	var mask_graphics_135 = new cjs.Graphics().p("EiD6BP7MAAAgumMEH1AAAMAAAAumg");
	var mask_graphics_136 = new cjs.Graphics().p("EiEbBP9MAAAgumMEI3AAAMAAAAumg");
	var mask_graphics_137 = new cjs.Graphics().p("EiE9BQAMAAAgunMEJ7AAAMAAAAung");
	var mask_graphics_138 = new cjs.Graphics().p("EiFeBP/MAAAgumMEK9AAAMAAAAumg");
	var mask_graphics_139 = new cjs.Graphics().p("EiGABP/MAAAgumMEMBAAAMAAAAumg");
	var mask_graphics_140 = new cjs.Graphics().p("EiGhBP/MAAAgumMENDAAAMAAAAumg");
	var mask_graphics_141 = new cjs.Graphics().p("EiHDBP/MAAAgumMEOHAAAMAAAAumg");
	var mask_graphics_142 = new cjs.Graphics().p("EiHkBP/MAAAgumMEPJAAAMAAAAumg");
	var mask_graphics_143 = new cjs.Graphics().p("EiIGBP/MAAAgumMEQNAAAMAAAAumg");
	var mask_graphics_144 = new cjs.Graphics().p("EiInBP/MAAAgumMERPAAAMAAAAumg");
	var mask_graphics_145 = new cjs.Graphics().p("EiJJBP/MAAAgumMESTAAAMAAAAumg");
	var mask_graphics_146 = new cjs.Graphics().p("EiJqBP/MAAAgunMETVAAAMAAAAung");
	var mask_graphics_147 = new cjs.Graphics().p("EiKMBP+MAAAgumMEUZAAAMAAAAumg");
	var mask_graphics_148 = new cjs.Graphics().p("EiKtBP+MAAAgumMEVbAAAMAAAAumg");
	var mask_graphics_149 = new cjs.Graphics().p("EiLPBP+MAAAgumMEWfAAAMAAAAumg");
	var mask_graphics_150 = new cjs.Graphics().p("EiLwBP+MAAAgumMEXhAAAMAAAAumg");
	var mask_graphics_151 = new cjs.Graphics().p("EiMSBP+MAAAgumMEYlAAAMAAAAumg");
	var mask_graphics_152 = new cjs.Graphics().p("EiMzBP+MAAAgumMEZnAAAMAAAAumg");
	var mask_graphics_153 = new cjs.Graphics().p("EiNVBP+MAAAgumMEarAAAMAAAAumg");
	var mask_graphics_154 = new cjs.Graphics().p("EiN2BP+MAAAgumMEbtAAAMAAAAumg");
	var mask_graphics_155 = new cjs.Graphics().p("EiOXBP+MAAAgumMEcvAAAMAAAAumg");
	var mask_graphics_156 = new cjs.Graphics().p("EiO5BP+MAAAgumMEdzAAAMAAAAumg");
	var mask_graphics_157 = new cjs.Graphics().p("EiPaBP/MAAAgumMEe1AAAMAAAAumg");
	var mask_graphics_158 = new cjs.Graphics().p("EiP8BP/MAAAgumMEf5AAAMAAAAumg");
	var mask_graphics_159 = new cjs.Graphics().p("EiQdBP/MAAAgumMEg7AAAMAAAAumg");
	var mask_graphics_160 = new cjs.Graphics().p("EiQ/BP/MAAAgumMEh/AAAMAAAAumg");
	var mask_graphics_161 = new cjs.Graphics().p("EiRgBQAMAAAgunMEjBAAAMAAAAung");
	var mask_graphics_162 = new cjs.Graphics().p("EiSwBP/MAAAgumMElhAAAMAAAAumg");
	var mask_graphics_163 = new cjs.Graphics().p("EiT/BP/MAAAgumMEn/AAAMAAAAumg");
	var mask_graphics_164 = new cjs.Graphics().p("EiVOBP/MAAAgumMEqdAAAMAAAAumg");
	var mask_graphics_165 = new cjs.Graphics().p("EiWdBP/MAAAgumMEs7AAAMAAAAumg");
	var mask_graphics_166 = new cjs.Graphics().p("EiXtBP/MAAAgumMEvbAAAMAAAAumg");
	var mask_graphics_167 = new cjs.Graphics().p("EiY8BP/MAAAgumMEx5AAAMAAAAumg");
	var mask_graphics_168 = new cjs.Graphics().p("EiaLBP/MAAAgumME0XAAAMAAAAumg");
	var mask_graphics_169 = new cjs.Graphics().p("EibaBP/MAAAgumME21AAAMAAAAumg");
	var mask_graphics_170 = new cjs.Graphics().p("EicqBP+MAAAgumME5VAAAMAAAAumg");
	var mask_graphics_171 = new cjs.Graphics().p("EiclBP+MAAAgumME5LAAAMAAAAumg");
	var mask_graphics_172 = new cjs.Graphics().p("EichBP+MAAAgumME5DAAAMAAAAumg");
	var mask_graphics_173 = new cjs.Graphics().p("EicdBP+MAAAgumME47AAAMAAAAumg");
	var mask_graphics_174 = new cjs.Graphics().p("EicZBP+MAAAgumME4zAAAMAAAAumg");
	var mask_graphics_175 = new cjs.Graphics().p("EicUBP+MAAAgumME4pAAAMAAAAumg");
	var mask_graphics_176 = new cjs.Graphics().p("EicQBP+MAAAgumME4hAAAMAAAAumg");
	var mask_graphics_177 = new cjs.Graphics().p("EicMBP+MAAAgumME4ZAAAMAAAAumg");
	var mask_graphics_178 = new cjs.Graphics().p("EicIBP+MAAAgumME4RAAAMAAAAumg");
	var mask_graphics_179 = new cjs.Graphics().p("EicDBP+MAAAgumME4HAAAMAAAAumg");
	var mask_graphics_180 = new cjs.Graphics().p("Eib/BP+MAAAgumME3/AAAMAAAAumg");
	var mask_graphics_181 = new cjs.Graphics().p("Eib7BP+MAAAgumME33AAAMAAAAumg");
	var mask_graphics_182 = new cjs.Graphics().p("Eib3BP+MAAAgumME3vAAAMAAAAumg");
	var mask_graphics_183 = new cjs.Graphics().p("EibzBP+MAAAgunME3nAAAMAAAAung");
	var mask_graphics_184 = new cjs.Graphics().p("EibuBP+MAAAgunME3dAAAMAAAAung");
	var mask_graphics_185 = new cjs.Graphics().p("EibqBP+MAAAgunME3VAAAMAAAAung");
	var mask_graphics_186 = new cjs.Graphics().p("EibmBP9MAAAgumME3NAAAMAAAAumg");
	var mask_graphics_187 = new cjs.Graphics().p("EibiBP9MAAAgumME3FAAAMAAAAumg");
	var mask_graphics_188 = new cjs.Graphics().p("EibdBP9MAAAgumME27AAAMAAAAumg");
	var mask_graphics_189 = new cjs.Graphics().p("EibZBP9MAAAgumME2zAAAMAAAAumg");
	var mask_graphics_190 = new cjs.Graphics().p("EibVBP9MAAAgumME2rAAAMAAAAumg");
	var mask_graphics_191 = new cjs.Graphics().p("EiayBP9MAAAgumME1lAAAMAAAAumg");
	var mask_graphics_192 = new cjs.Graphics().p("EiaOBP9MAAAgumME0dAAAMAAAAumg");
	var mask_graphics_193 = new cjs.Graphics().p("EiZrBP9MAAAgumMEzXAAAMAAAAumg");
	var mask_graphics_194 = new cjs.Graphics().p("EiZIBP9MAAAgumMEyQAAAMAAAAumg");
	var mask_graphics_195 = new cjs.Graphics().p("EiYkBP9MAAAgumMExJAAAMAAAAumg");
	var mask_graphics_196 = new cjs.Graphics().p("EiY4BP9MAAAgumMExxAAAMAAAAumg");
	var mask_graphics_197 = new cjs.Graphics().p("EiZMBP9MAAAgumMEyZAAAMAAAAumg");
	var mask_graphics_198 = new cjs.Graphics().p("EiZgBP9MAAAgumMEzBAAAMAAAAumg");
	var mask_graphics_199 = new cjs.Graphics().p("EiZ0BP9MAAAgumMEzpAAAMAAAAumg");
	var mask_graphics_200 = new cjs.Graphics().p("EiaIBP9MAAAgunME0RAAAMAAAAung");
	var mask_graphics_201 = new cjs.Graphics().p("EiacBP9MAAAgunME05AAAMAAAAung");
	var mask_graphics_202 = new cjs.Graphics().p("EiawBP9MAAAgunME1hAAAMAAAAung");
	var mask_graphics_203 = new cjs.Graphics().p("EibEBP9MAAAgunME2JAAAMAAAAung");
	var mask_graphics_204 = new cjs.Graphics().p("EibYBP8MAAAgumME2xAAAMAAAAumg");
	var mask_graphics_205 = new cjs.Graphics().p("EibsBP8MAAAgumME3ZAAAMAAAAumg");
	var mask_graphics_206 = new cjs.Graphics().p("EicABP8MAAAgumME4BAAAMAAAAumg");
	var mask_graphics_207 = new cjs.Graphics().p("EicUBP8MAAAgumME4pAAAMAAAAumg");
	var mask_graphics_208 = new cjs.Graphics().p("EicoBP8MAAAgumME5RAAAMAAAAumg");
	var mask_graphics_209 = new cjs.Graphics().p("Eic8BP8MAAAgumME55AAAMAAAAumg");
	var mask_graphics_210 = new cjs.Graphics().p("EidQBP8MAAAgumME6hAAAMAAAAumg");
	var mask_graphics_211 = new cjs.Graphics().p("EifdBP7MAAAgunME+7AAAMAAAAung");
	var mask_graphics_212 = new cjs.Graphics().p("EihpBP5MAAAgumMFDTAAAMAAAAumg");
	var mask_graphics_213 = new cjs.Graphics().p("Eij2BP4MAAAgumMFHtAAAMAAAAumg");
	var mask_graphics_214 = new cjs.Graphics().p("EimDBP3MAAAgunMFMHAAAMAAAAung");
	var mask_graphics_215 = new cjs.Graphics().p("EioPBP1MAAAgumMFQfAAAMAAAAumg");
	var mask_graphics_216 = new cjs.Graphics().p("EiqcBP0MAAAgunMFU5AAAMAAAAung");
	var mask_graphics_217 = new cjs.Graphics().p("EispBPzMAAAgunMFZTAAAMAAAAung");
	var mask_graphics_218 = new cjs.Graphics().p("Eiu1BP0MAAAgumMFdrAAAMAAAAumg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-345.4,y:512}).wait(1).to({graphics:mask_graphics_1,x:-342,y:512}).wait(1).to({graphics:mask_graphics_2,x:-338.7,y:512}).wait(1).to({graphics:mask_graphics_3,x:-335.3,y:512}).wait(1).to({graphics:mask_graphics_4,x:-332,y:512}).wait(1).to({graphics:mask_graphics_5,x:-328.6,y:512}).wait(1).to({graphics:mask_graphics_6,x:-325.3,y:512}).wait(1).to({graphics:mask_graphics_7,x:-321.9,y:512}).wait(1).to({graphics:mask_graphics_8,x:-318.6,y:512}).wait(1).to({graphics:mask_graphics_9,x:-315.2,y:512}).wait(1).to({graphics:mask_graphics_10,x:-311.9,y:512}).wait(1).to({graphics:mask_graphics_11,x:-308.5,y:512}).wait(1).to({graphics:mask_graphics_12,x:-305.3,y:512}).wait(1).to({graphics:mask_graphics_13,x:-302.2,y:512}).wait(1).to({graphics:mask_graphics_14,x:-299,y:512}).wait(1).to({graphics:mask_graphics_15,x:-295.8,y:512}).wait(1).to({graphics:mask_graphics_16,x:-292.7,y:512}).wait(1).to({graphics:mask_graphics_17,x:-289.5,y:512}).wait(1).to({graphics:mask_graphics_18,x:-286.3,y:512}).wait(1).to({graphics:mask_graphics_19,x:-283.1,y:512}).wait(1).to({graphics:mask_graphics_20,x:-280,y:512}).wait(1).to({graphics:mask_graphics_21,x:-276.8,y:512}).wait(1).to({graphics:mask_graphics_22,x:-273.6,y:512}).wait(1).to({graphics:mask_graphics_23,x:-270.4,y:512}).wait(1).to({graphics:mask_graphics_24,x:-267.3,y:512}).wait(1).to({graphics:mask_graphics_25,x:-264.1,y:512}).wait(1).to({graphics:mask_graphics_26,x:-260.9,y:512}).wait(1).to({graphics:mask_graphics_27,x:-257.8,y:512}).wait(1).to({graphics:mask_graphics_28,x:-254.6,y:512}).wait(1).to({graphics:mask_graphics_29,x:-251.4,y:512}).wait(1).to({graphics:mask_graphics_30,x:-248.2,y:512}).wait(1).to({graphics:mask_graphics_31,x:-245.1,y:512}).wait(1).to({graphics:mask_graphics_32,x:-241.9,y:512}).wait(1).to({graphics:mask_graphics_33,x:-238.7,y:512}).wait(1).to({graphics:mask_graphics_34,x:-235.6,y:512}).wait(1).to({graphics:mask_graphics_35,x:-232.4,y:512}).wait(1).to({graphics:mask_graphics_36,x:-229.2,y:512}).wait(1).to({graphics:mask_graphics_37,x:-226,y:512}).wait(1).to({graphics:mask_graphics_38,x:-222.9,y:512}).wait(1).to({graphics:mask_graphics_39,x:-219.7,y:512}).wait(1).to({graphics:mask_graphics_40,x:-216.5,y:512}).wait(1).to({graphics:mask_graphics_41,x:-213.4,y:512}).wait(1).to({graphics:mask_graphics_42,x:-210.2,y:512.1}).wait(1).to({graphics:mask_graphics_43,x:-207,y:512.1}).wait(1).to({graphics:mask_graphics_44,x:-203.8,y:512.1}).wait(1).to({graphics:mask_graphics_45,x:-200.7,y:512.1}).wait(1).to({graphics:mask_graphics_46,x:-197.5,y:512.1}).wait(1).to({graphics:mask_graphics_47,x:-194.3,y:512.1}).wait(1).to({graphics:mask_graphics_48,x:-191.1,y:512.1}).wait(1).to({graphics:mask_graphics_49,x:-188,y:512.1}).wait(1).to({graphics:mask_graphics_50,x:-184.8,y:512.1}).wait(1).to({graphics:mask_graphics_51,x:-181.6,y:512.1}).wait(1).to({graphics:mask_graphics_52,x:-178.5,y:512.1}).wait(1).to({graphics:mask_graphics_53,x:-175.3,y:512.1}).wait(1).to({graphics:mask_graphics_54,x:-172.1,y:512.1}).wait(1).to({graphics:mask_graphics_55,x:-168.9,y:512.1}).wait(1).to({graphics:mask_graphics_56,x:-165.5,y:512}).wait(1).to({graphics:mask_graphics_57,x:-164.6,y:512}).wait(1).to({graphics:mask_graphics_58,x:-163.6,y:512}).wait(1).to({graphics:mask_graphics_59,x:-162.6,y:512}).wait(1).to({graphics:mask_graphics_60,x:-161.7,y:512}).wait(1).to({graphics:mask_graphics_61,x:-160.7,y:512}).wait(1).to({graphics:mask_graphics_62,x:-159.8,y:512}).wait(1).to({graphics:mask_graphics_63,x:-158.8,y:512}).wait(1).to({graphics:mask_graphics_64,x:-157.8,y:512}).wait(1).to({graphics:mask_graphics_65,x:-156.8,y:512}).wait(1).to({graphics:mask_graphics_66,x:-154.9,y:512}).wait(1).to({graphics:mask_graphics_67,x:-153.1,y:512}).wait(1).to({graphics:mask_graphics_68,x:-151.2,y:512}).wait(1).to({graphics:mask_graphics_69,x:-149.4,y:512.1}).wait(1).to({graphics:mask_graphics_70,x:-147.5,y:512.1}).wait(1).to({graphics:mask_graphics_71,x:-145.7,y:512.1}).wait(1).to({graphics:mask_graphics_72,x:-143.8,y:512.1}).wait(1).to({graphics:mask_graphics_73,x:-142,y:512}).wait(1).to({graphics:mask_graphics_74,x:-139.8,y:512}).wait(1).to({graphics:mask_graphics_75,x:-137.5,y:512}).wait(1).to({graphics:mask_graphics_76,x:-135.2,y:512}).wait(1).to({graphics:mask_graphics_77,x:-132.9,y:512}).wait(1).to({graphics:mask_graphics_78,x:-130.7,y:512}).wait(1).to({graphics:mask_graphics_79,x:-128.4,y:512}).wait(1).to({graphics:mask_graphics_80,x:-126.1,y:512}).wait(1).to({graphics:mask_graphics_81,x:-123.8,y:512}).wait(1).to({graphics:mask_graphics_82,x:-121.5,y:512}).wait(1).to({graphics:mask_graphics_83,x:-119.3,y:512}).wait(1).to({graphics:mask_graphics_84,x:-125.9,y:512}).wait(1).to({graphics:mask_graphics_85,x:-132.5,y:512}).wait(1).to({graphics:mask_graphics_86,x:-139.1,y:512}).wait(1).to({graphics:mask_graphics_87,x:-145.7,y:512}).wait(1).to({graphics:mask_graphics_88,x:-152.4,y:512.1}).wait(1).to({graphics:mask_graphics_89,x:-159,y:512.1}).wait(1).to({graphics:mask_graphics_90,x:-165.6,y:512.1}).wait(1).to({graphics:mask_graphics_91,x:-172.2,y:512.1}).wait(1).to({graphics:mask_graphics_92,x:-178.8,y:512.1}).wait(1).to({graphics:mask_graphics_93,x:-185.5,y:512.1}).wait(1).to({graphics:mask_graphics_94,x:-192.3,y:512}).wait(1).to({graphics:mask_graphics_95,x:-170,y:512}).wait(1).to({graphics:mask_graphics_96,x:-147.6,y:512}).wait(1).to({graphics:mask_graphics_97,x:-125.3,y:512.1}).wait(1).to({graphics:mask_graphics_98,x:-103,y:512.1}).wait(1).to({graphics:mask_graphics_99,x:-80.6,y:512}).wait(1).to({graphics:mask_graphics_100,x:-77.9,y:512}).wait(1).to({graphics:mask_graphics_101,x:-75.1,y:512}).wait(1).to({graphics:mask_graphics_102,x:-72.3,y:512}).wait(1).to({graphics:mask_graphics_103,x:-69.6,y:512}).wait(1).to({graphics:mask_graphics_104,x:-66.8,y:512}).wait(1).to({graphics:mask_graphics_105,x:-64,y:512}).wait(1).to({graphics:mask_graphics_106,x:-61.3,y:512}).wait(1).to({graphics:mask_graphics_107,x:-58.5,y:512}).wait(1).to({graphics:mask_graphics_108,x:-55.8,y:512}).wait(1).to({graphics:mask_graphics_109,x:-53,y:512}).wait(1).to({graphics:mask_graphics_110,x:-50.2,y:512}).wait(1).to({graphics:mask_graphics_111,x:-47.5,y:512}).wait(1).to({graphics:mask_graphics_112,x:-44.7,y:512}).wait(1).to({graphics:mask_graphics_113,x:-41.6,y:512}).wait(1).to({graphics:mask_graphics_114,x:-38.5,y:512}).wait(1).to({graphics:mask_graphics_115,x:-35.4,y:512}).wait(1).to({graphics:mask_graphics_116,x:-32.2,y:512}).wait(1).to({graphics:mask_graphics_117,x:-29.1,y:511.9}).wait(1).to({graphics:mask_graphics_118,x:-26,y:511.9}).wait(1).to({graphics:mask_graphics_119,x:-22.9,y:511.9}).wait(1).to({graphics:mask_graphics_120,x:-19.8,y:511.9}).wait(1).to({graphics:mask_graphics_121,x:-16.7,y:511.9}).wait(1).to({graphics:mask_graphics_122,x:-13.6,y:511.9}).wait(1).to({graphics:mask_graphics_123,x:-10.5,y:511.9}).wait(1).to({graphics:mask_graphics_124,x:-7.4,y:511.9}).wait(1).to({graphics:mask_graphics_125,x:-4.3,y:511.9}).wait(1).to({graphics:mask_graphics_126,x:-1.1,y:512}).wait(1).to({graphics:mask_graphics_127,x:3.6,y:511.7}).wait(1).to({graphics:mask_graphics_128,x:8.3,y:511.4}).wait(1).to({graphics:mask_graphics_129,x:13,y:511.2}).wait(1).to({graphics:mask_graphics_130,x:17.7,y:510.9}).wait(1).to({graphics:mask_graphics_131,x:22.6,y:510.5}).wait(1).to({graphics:mask_graphics_132,x:26.6,y:510.8}).wait(1).to({graphics:mask_graphics_133,x:30.6,y:511}).wait(1).to({graphics:mask_graphics_134,x:34.6,y:511.2}).wait(1).to({graphics:mask_graphics_135,x:38.6,y:511.5}).wait(1).to({graphics:mask_graphics_136,x:42.6,y:511.7}).wait(1).to({graphics:mask_graphics_137,x:46.6,y:512}).wait(1).to({graphics:mask_graphics_138,x:51.2,y:511.9}).wait(1).to({graphics:mask_graphics_139,x:55.8,y:511.9}).wait(1).to({graphics:mask_graphics_140,x:60.5,y:511.9}).wait(1).to({graphics:mask_graphics_141,x:65.1,y:511.9}).wait(1).to({graphics:mask_graphics_142,x:69.7,y:511.9}).wait(1).to({graphics:mask_graphics_143,x:74.3,y:511.9}).wait(1).to({graphics:mask_graphics_144,x:79,y:511.9}).wait(1).to({graphics:mask_graphics_145,x:83.6,y:511.9}).wait(1).to({graphics:mask_graphics_146,x:88.2,y:511.9}).wait(1).to({graphics:mask_graphics_147,x:92.8,y:511.9}).wait(1).to({graphics:mask_graphics_148,x:92.8,y:511.9}).wait(1).to({graphics:mask_graphics_149,x:92.8,y:511.9}).wait(1).to({graphics:mask_graphics_150,x:92.7,y:511.9}).wait(1).to({graphics:mask_graphics_151,x:92.7,y:511.9}).wait(1).to({graphics:mask_graphics_152,x:92.7,y:511.9}).wait(1).to({graphics:mask_graphics_153,x:92.6,y:511.9}).wait(1).to({graphics:mask_graphics_154,x:92.6,y:511.9}).wait(1).to({graphics:mask_graphics_155,x:92.6,y:511.9}).wait(1).to({graphics:mask_graphics_156,x:92.8,y:511.9}).wait(1).to({graphics:mask_graphics_157,x:94.8,y:511.9}).wait(1).to({graphics:mask_graphics_158,x:96.8,y:511.9}).wait(1).to({graphics:mask_graphics_159,x:98.8,y:511.9}).wait(1).to({graphics:mask_graphics_160,x:100.8,y:511.9}).wait(1).to({graphics:mask_graphics_161,x:102.7,y:512}).wait(1).to({graphics:mask_graphics_162,x:101.2,y:511.9}).wait(1).to({graphics:mask_graphics_163,x:99.6,y:511.9}).wait(1).to({graphics:mask_graphics_164,x:98.1,y:511.9}).wait(1).to({graphics:mask_graphics_165,x:96.5,y:511.9}).wait(1).to({graphics:mask_graphics_166,x:95,y:511.9}).wait(1).to({graphics:mask_graphics_167,x:93.5,y:511.9}).wait(1).to({graphics:mask_graphics_168,x:91.9,y:511.9}).wait(1).to({graphics:mask_graphics_169,x:90.4,y:511.9}).wait(1).to({graphics:mask_graphics_170,x:89.1,y:511.9}).wait(1).to({graphics:mask_graphics_171,x:98.3,y:511.8}).wait(1).to({graphics:mask_graphics_172,x:107.4,y:511.8}).wait(1).to({graphics:mask_graphics_173,x:116.6,y:511.8}).wait(1).to({graphics:mask_graphics_174,x:125.8,y:511.8}).wait(1).to({graphics:mask_graphics_175,x:134.9,y:511.8}).wait(1).to({graphics:mask_graphics_176,x:144.1,y:511.8}).wait(1).to({graphics:mask_graphics_177,x:153.3,y:511.8}).wait(1).to({graphics:mask_graphics_178,x:162.5,y:511.8}).wait(1).to({graphics:mask_graphics_179,x:171.6,y:511.8}).wait(1).to({graphics:mask_graphics_180,x:180.8,y:511.8}).wait(1).to({graphics:mask_graphics_181,x:190,y:511.8}).wait(1).to({graphics:mask_graphics_182,x:199.1,y:511.8}).wait(1).to({graphics:mask_graphics_183,x:208.3,y:511.8}).wait(1).to({graphics:mask_graphics_184,x:217.5,y:511.8}).wait(1).to({graphics:mask_graphics_185,x:226.6,y:511.8}).wait(1).to({graphics:mask_graphics_186,x:235.8,y:511.8}).wait(1).to({graphics:mask_graphics_187,x:245,y:511.7}).wait(1).to({graphics:mask_graphics_188,x:254.1,y:511.7}).wait(1).to({graphics:mask_graphics_189,x:263.3,y:511.7}).wait(1).to({graphics:mask_graphics_190,x:272.3,y:511.7}).wait(1).to({graphics:mask_graphics_191,x:282.9,y:511.7}).wait(1).to({graphics:mask_graphics_192,x:293.4,y:511.7}).wait(1).to({graphics:mask_graphics_193,x:304,y:511.7}).wait(1).to({graphics:mask_graphics_194,x:314.5,y:511.7}).wait(1).to({graphics:mask_graphics_195,x:325.1,y:511.7}).wait(1).to({graphics:mask_graphics_196,x:330.9,y:511.7}).wait(1).to({graphics:mask_graphics_197,x:336.7,y:511.7}).wait(1).to({graphics:mask_graphics_198,x:342.5,y:511.7}).wait(1).to({graphics:mask_graphics_199,x:348.3,y:511.7}).wait(1).to({graphics:mask_graphics_200,x:354.1,y:511.7}).wait(1).to({graphics:mask_graphics_201,x:359.9,y:511.7}).wait(1).to({graphics:mask_graphics_202,x:365.7,y:511.7}).wait(1).to({graphics:mask_graphics_203,x:371.5,y:511.7}).wait(1).to({graphics:mask_graphics_204,x:377.3,y:511.7}).wait(1).to({graphics:mask_graphics_205,x:383.1,y:511.6}).wait(1).to({graphics:mask_graphics_206,x:388.9,y:511.6}).wait(1).to({graphics:mask_graphics_207,x:394.7,y:511.6}).wait(1).to({graphics:mask_graphics_208,x:400.5,y:511.6}).wait(1).to({graphics:mask_graphics_209,x:406.3,y:511.6}).wait(1).to({graphics:mask_graphics_210,x:412.1,y:511.6}).wait(1).to({graphics:mask_graphics_211,x:404.9,y:511.5}).wait(1).to({graphics:mask_graphics_212,x:397.7,y:511.3}).wait(1).to({graphics:mask_graphics_213,x:390.5,y:511.2}).wait(1).to({graphics:mask_graphics_214,x:383.2,y:511.1}).wait(1).to({graphics:mask_graphics_215,x:376,y:510.9}).wait(1).to({graphics:mask_graphics_216,x:368.8,y:510.8}).wait(1).to({graphics:mask_graphics_217,x:361.6,y:510.7}).wait(1).to({graphics:mask_graphics_218,x:353.7,y:510.9}).wait(1));

	// Calque_14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4599D1").ss(4).p("EhqbANxMAoUAAAIThmOIPkDHITFjHIJtmqIPEoaIKNiOIMbj/IRWLiITEH7IONICIUZAA");
	this.shape_1.setTransform(766.2,884.6,1.062,1.062);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(219));

	// Calque 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4599D1").s().p("AgBDjIgBgCIAAgeIABgCIABAAIACAAIABACIAAAeIgBACIgCABIgBgBgAgBCnIgBgCIAAgeIABgCIABgBIACABIABACIAAAeIgBACIgCABIgBgBgAgBBrIgBgCIAAgeIABgCIABgBIACABIABACIAAAeIgBACIgCAAIgBAAgAgBAvIgBgCIAAgeIABgCIABAAIACAAIABACIAAAeIgBACIgCABIgBgBgAgBgMIgBgCIAAgeIABgCIABgBIACABIABACIAAAeIgBACIgCABIgBgBgAgBhIIgBgCIAAgeIABgCIABgBIACABIABACIAAAeIgBACIgCAAIgBAAgAgBiEIgBgCIAAgeIABgCIABAAIACAAIABACIAAAeIgBACIgCABIgBgBgAgBjAIgBgCIAAgeIABgCIABgBIACABIABACIAAAeIgBACIgCABIgBgBg");
	this.shape_2.setTransform(1006.8,952.7,6.029,6.029);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4599D1").s().p("AgBByIgBgCIAAgZIABgBIABgBIACABIABABIAAAZIgBACIgCABIgBgBgAgBBFIgBgCIAAgdIABgCIABgBIACABIABACIAAAdIgBACIgCABIgBgBgAgBATIgBgCIAAgdIABgBIABgBIACABIABABIAAAdIgBACIgCABIgBgBgAgBgeIgBgBIAAgeIABgCIABgBIACABIABACIAAAeIgBABIgCABIgBgBgAgBhQIgBgCIAAgeIABgBIABgBIACABIABABIAAAeIgBACIgCABIgBgBg");
	this.shape_3.setTransform(683.3,1020.7,6.029,6.029);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4599D1").s().p("AgBBQIgBgCIAAgHIABgBIABgBIACABIABABIAAAHIgBACIgCABIgBgBgAgBA1IgBgCIAAgdIABgCIABgBIACABIABACIAAAdIgBACIgCABIgBgBgAgBADIgBgCIAAgdIABgBIABgBIACABIABABIAAAdIgBACIgCABIgBgBgAgBguIgBgBIAAgeIABgCIABgBIACABIABACIAAAeIgBABIgCABIgBgBg");
	this.shape_4.setTransform(42.7,1041.2,6.029,6.029);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4599D1").s().p("AgBBQIgBgCIAAgHIABgBIABgBIACABIABABIAAAHIgBACIgCABIgBgBgAgBA1IgBgCIAAgdIABgCIABgBIACABIABACIAAAdIgBACIgCABIgBgBgAgBADIgBgCIAAgdIABgBIABgBIACABIABABIAAAdIgBACIgCABIgBgBgAgBguIgBgBIAAgeIABgCIABgBIACABIABACIAAAeIgBABIgCABIgBgBg");
	this.shape_5.setTransform(317,1041.2,6.029,6.029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(219));

	// Calque 10
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4599D1").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_6.setTransform(316.1,979.6,3.287,3.287);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4599D1").s().p("AgeBeQglgLgWglQgTgmANgkQAOgoAkgUQAlgTAmANQAnAMAVAkQATAmgOAlQgNApgkATQgVALgXAAQgPAAgRgGg");
	this.shape_7.setTransform(1006.7,791.2,1.062,1.062);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4599D1").s().p("AgHAZQgKgDgFgKQgFgJADgKQADgKAKgFQAKgFAJADQAKAEAFAJQAFAKgDAJQgDAKgKAFQgGADgGAAIgHgBg");
	this.shape_8.setTransform(683.2,937.4,3.526,3.526);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4599D1").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_9.setTransform(42.2,979.6,3.287,3.287);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(219));

	// Calque_13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCDCDC").s().p("EhqbAT9IAAtTMApsAAAISUl6IQSC/IS5i2IINl5IQUpAIKBh3ILlkFIQSKVIUtInINAHqIVmAAIAANTg");
	this.shape_10.setTransform(766.2,952.8,1.062,1.062);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(219));

	// compteur
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("AhpCWIAAgnIAnAAIAAAngAhpBqIAAgnIAnAAIAAAngAhpA/IAAgnIAnAAIAAAngAAYAUIAAgnIAnAAIAAAngAgTAUIAAgnIAmAAIAAAngAg+AUIAAgnIAnAAIAAAngAhpAUIAAgnIAnAAIAAAngAhpgXIAAgnIAnAAIAAAngAhphCIAAgnIAnAAIAAAngABDhuIAAgnIAnAAIAAAngAAYhuIAAgnIAnAAIAAAngAgThuIAAgnIAmAAIAAAngAg+huIAAgnIAnAAIAAAngAhphuIAAgnIAnAAIAAAng");
	this.shape_11.setTransform(1221.7,228.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("AhpCWIAAgnIAnAAIAAAngAhpBqIAAgnIAnAAIAAAngAhpA/IAAgnIAnAAIAAAngAAYAUIAAgnIAnAAIAAAngAgTAUIAAgnIAmAAIAAAngAg+AUIAAgnIAnAAIAAAngAhpAUIAAgnIAnAAIAAAngAhpgXIAAgnIAnAAIAAAngAhphCIAAgnIAnAAIAAAngABDhuIAAgnIAnAAIAAAngAAYhuIAAgnIAnAAIAAAngAgThuIAAgnIAmAAIAAAngAg+huIAAgnIAnAAIAAAngAhphuIAAgnIAnAAIAAAng");
	this.shape_12.setTransform(1196.3,228.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161616").s().p("AAYCWIAAgnIAnAAIAAAngAgTCWIAAgnIAmAAIAAAngAg+CWIAAgnIAnAAIAAAngABDBqIAAgnIAnAAIAAAngAhpBqIAAgnIAnAAIAAAngABDA/IAAgnIAnAAIAAAngAhpA/IAAgnIAnAAIAAAngABDAUIAAgnIAnAAIAAAngAhpAUIAAgnIAnAAIAAAngABDgXIAAgnIAnAAIAAAngAhpgXIAAgnIAnAAIAAAngABDhCIAAgnIAnAAIAAAngAhphCIAAgnIAnAAIAAAngAAYhuIAAgnIAnAAIAAAngAgThuIAAgnIAmAAIAAAngAg+huIAAgnIAnAAIAAAng");
	this.shape_13.setTransform(1170.9,228.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6F6F6").s().p("Ag5ATIAAglIBzAAIAAAlg");
	this.shape_14.setTransform(1196.1,227.2,11.457,13.366);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AAhDRIAAg3IA3AAIAAA3gAgaDRIAAg3IA1AAIAAA3gAhXDRIAAg3IA3AAIAAA3gAgaCUIAAg2IA1AAIAAA2gAgaBYIAAg3IA1AAIAAA3gAgaAbIAAg1IA1AAIAAA1gAgaggIAAg3IA1AAIAAA3gAgahdIAAg2IA1AAIAAA2gAhXhdIAAg2IA3AAIAAA2gAgaiZIAAg3IA1AAIAAA3g");
	this.shape_15.setTransform(1119.8,223);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_16.setTransform(1117.5,226.1,1.949,1.949);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("ABeDRIAAg3IA2AAIAAA3gAAhDRIAAg3IA3AAIAAA3gAgaDRIAAg3IA1AAIAAA3gAhXDRIAAg3IA3AAIAAA3gAiTDRIAAg3IA2AAIAAA3gAhXCUIAAg2IA3AAIAAA2gAgaBYIAAg3IA1AAIAAA3gAAhAbIAAg1IA3AAIAAA1gABeggIAAg3IA2AAIAAA3gABehdIAAg2IA2AAIAAA2gAiThdIAAg2IA2AAIAAA2gAAhiZIAAg3IA3AAIAAA3gAgaiZIAAg3IA1AAIAAA3gAhXiZIAAg3IA3AAIAAA3g");
	this.shape_17.setTransform(1156.8,223);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_18.setTransform(1117.5,226.1,1.949,1.949);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1C").s().p("AAhDRIAAg3IA3AAIAAA3gAgaDRIAAg3IA1AAIAAA3gAhXDRIAAg3IA3AAIAAA3gABeCUIAAg2IA2AAIAAA2gAiTCUIAAg2IA2AAIAAA2gABeBYIAAg3IA2AAIAAA3gAAhAbIAAg1IA3AAIAAA1gAgaAbIAAg1IA1AAIAAA1gAhXAbIAAg1IA3AAIAAA1gAgaggIAAg3IA1AAIAAA3gAAhhdIAAg2IA3AAIAAA2gABeiZIAAg3IA2AAIAAA3gAAhiZIAAg3IA3AAIAAA3gAgaiZIAAg3IA1AAIAAA3gAhXiZIAAg3IA3AAIAAA3gAiTiZIAAg3IA2AAIAAA3g");
	this.shape_19.setTransform(1199.9,223);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_20.setTransform(1117.5,226.1,1.949,1.949);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1C").s().p("AAhDRIAAg3IA3AAIAAA3gAAhCUIAAg2IA3AAIAAA2gABeBYIAAg3IA2AAIAAA3gAAhBYIAAg3IA3AAIAAA3gAgaBYIAAg3IA1AAIAAA3gAhXBYIAAg3IA3AAIAAA3gAiTBYIAAg3IA2AAIAAA3gAAhAbIAAg1IA3AAIAAA1gAiTAbIAAg1IA2AAIAAA1gAAhggIAAg3IA3AAIAAA3gAhXggIAAg3IA3AAIAAA3gAAhhdIAAg2IA3AAIAAA2gAgahdIAAg2IA1AAIAAA2gAAhiZIAAg3IA3AAIAAA3g");
	this.shape_21.setTransform(1240.1,223);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_22.setTransform(1117.5,226.1,1.949,1.949);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1C").s().p("AAhDRIAAg3IA3AAIAAA3gAgaDRIAAg3IA1AAIAAA3gAhXDRIAAg3IA3AAIAAA3gABeCUIAAg2IA2AAIAAA2gAiTCUIAAg2IA2AAIAAA2gABeBYIAAg3IA2AAIAAA3gABeAbIAAg1IA2AAIAAA1gAAhggIAAg3IA3AAIAAA3gAgaggIAAg3IA1AAIAAA3gAhXggIAAg3IA3AAIAAA3gAiTggIAAg3IA2AAIAAA3gAiThdIAAg2IA2AAIAAA2gABeiZIAAg3IA2AAIAAA3gAAhiZIAAg3IA3AAIAAA3gAgaiZIAAg3IA1AAIAAA3gAhXiZIAAg3IA3AAIAAA3gAiTiZIAAg3IA2AAIAAA3g");
	this.shape_23.setTransform(1280,223);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhcCjIAAlFIC5AAIAAFFg");
	this.shape_24.setTransform(1117.5,226.1,1.949,1.949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_16,p:{x:1117.5}},{t:this.shape_15}]},41).to({state:[{t:this.shape_18,p:{x:1117.5}},{t:this.shape_15},{t:this.shape_16,p:{x:1158.4}},{t:this.shape_17}]},57).to({state:[{t:this.shape_20,p:{x:1117.5}},{t:this.shape_15},{t:this.shape_18,p:{x:1158.4}},{t:this.shape_17},{t:this.shape_16,p:{x:1199.3}},{t:this.shape_19}]},18).to({state:[{t:this.shape_22,p:{x:1117.5}},{t:this.shape_15},{t:this.shape_20,p:{x:1158.4}},{t:this.shape_17},{t:this.shape_18,p:{x:1199.3}},{t:this.shape_19},{t:this.shape_16,p:{x:1239.7}},{t:this.shape_21}]},13).to({state:[{t:this.shape_24},{t:this.shape_15},{t:this.shape_22,p:{x:1158.4}},{t:this.shape_17},{t:this.shape_20,p:{x:1199.3}},{t:this.shape_19},{t:this.shape_18,p:{x:1239.7}},{t:this.shape_21},{t:this.shape_16,p:{x:1279.5}},{t:this.shape_23}]},10).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},23).wait(57));

	// Batterie
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_25.setTransform(1197.3,591.4,11.066,11.066);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.5).p("AArATIhVAAIAAglIBVAAg");
	this.shape_26.setTransform(1144.2,591.4,11.066,11.066);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_27.setTransform(1175.5,590.9,11.066,11.066);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_28.setTransform(1159.2,590.9,11.066,11.066);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEALIAAgVIAKAAIAAAVg");
	this.shape_29.setTransform(1142.8,590.9,11.066,11.066);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_30.setTransform(1126.8,590.9,11.066,11.066);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_31.setTransform(1110.8,590.9,11.066,11.066);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30,p:{x:1126.8}},{t:this.shape_29},{t:this.shape_28,p:{x:1159.2}},{t:this.shape_27,p:{x:1175.5}},{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_30,p:{x:1110.8}},{t:this.shape_28,p:{x:1126.8}},{t:this.shape_29},{t:this.shape_27,p:{x:1159.2}},{t:this.shape_26},{t:this.shape_25}]},126).wait(93));

	// km/h
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA0ByIAAgeIAdAAIAAAegAhQByIAAgeIAeAAIAAAegAA0BSIAAgfIAdAAIAAAfgAhQBSIAAgfIAeAAIAAAfgAA0AwIAAgeIAdAAIAAAegAhQAwIAAgeIAeAAIAAAegAA0APIAAgdIAdAAIAAAdgAgOAPIAAgdIAdAAIAAAdgAhQAPIAAgdIAeAAIAAAdgAA0gRIAAgeIAdAAIAAAegAgOgRIAAgeIAdAAIAAAegAhQgRIAAgeIAeAAIAAAegAA0gzIAAgdIAdAAIAAAdgAASgzIAAgdIAeAAIAAAdgAgvgzIAAgdIAeAAIAAAdgAhQgzIAAgdIAeAAIAAAdgAA0hUIAAgdIAdAAIAAAdgAhQhUIAAgdIAeAAIAAAdg");
	this.shape_32.setTransform(1275.4,514.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA0ByIAAgeIAdAAIAAAegAhQByIAAgeIAeAAIAAAegAASBSIAAgfIAeAAIAAAfgAhQBSIAAgfIAeAAIAAAfgAgOAwIAAgeIAdAAIAAAegAhQAwIAAgeIAeAAIAAAegAgvAPIAAgdIAeAAIAAAdgAhQAPIAAgdIAeAAIAAAdgAgOgRIAAgeIAdAAIAAAegAhQgRIAAgeIAeAAIAAAegAASgzIAAgdIAeAAIAAAdgAhQgzIAAgdIAeAAIAAAdgAA0hUIAAgdIAdAAIAAAdgAhQhUIAAgdIAeAAIAAAdg");
	this.shape_33.setTransform(1256.1,514.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA0ByIAAgeIAdAAIAAAegAhQByIAAgeIAeAAIAAAegAA0BSIAAgfIAdAAIAAAfgAhQBSIAAgfIAeAAIAAAfgAA0AwIAAgeIAdAAIAAAegAhQAwIAAgeIAeAAIAAAegAA0APIAAgdIAdAAIAAAdgAASAPIAAgdIAeAAIAAAdgAgOAPIAAgdIAdAAIAAAdgAgvAPIAAgdIAeAAIAAAdgAhQAPIAAgdIAeAAIAAAdgAA0gRIAAgeIAdAAIAAAegAhQgRIAAgeIAeAAIAAAegAA0gyIAAgeIAdAAIAAAegAhQgyIAAgeIAeAAIAAAegAA0hUIAAgeIAdAAIAAAegAhQhUIAAgeIAeAAIAAAeg");
	this.shape_34.setTransform(1276.5,441.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgvByIAAgeIAeAAIAAAegAgvBSIAAgfIAeAAIAAAfgAgOAwIAAgeIAdAAIAAAegAgOAPIAAgdIAdAAIAAAdgAgOgRIAAgeIAdAAIAAAegAASgyIAAgeIAeAAIAAAegAAShUIAAgeIAeAAIAAAeg");
	this.shape_35.setTransform(1260.5,441.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA0ByIAAgeIAdAAIAAAegAhQByIAAgeIAeAAIAAAegAA0BSIAAgfIAdAAIAAAfgAhQBSIAAgfIAeAAIAAAfgAA0AwIAAgeIAdAAIAAAegAhQAwIAAgeIAeAAIAAAegAA0APIAAgdIAdAAIAAAdgAgOAPIAAgdIAdAAIAAAdgAhQAPIAAgdIAeAAIAAAdgAA0gRIAAgeIAdAAIAAAegAgOgRIAAgeIAdAAIAAAegAhQgRIAAgeIAeAAIAAAegAA0gyIAAgeIAdAAIAAAegAASgyIAAgeIAeAAIAAAegAgvgyIAAgeIAeAAIAAAegAhQgyIAAgeIAeAAIAAAegAA0hUIAAgeIAdAAIAAAegAhQhUIAAgeIAeAAIAAAeg");
	this.shape_36.setTransform(1244.4,441.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AA0ByIAAgeIAdAAIAAAegAhQByIAAgeIAeAAIAAAegAASBSIAAgfIAeAAIAAAfgAhQBSIAAgfIAeAAIAAAfgAgOAwIAAgeIAdAAIAAAegAhQAwIAAgeIAeAAIAAAegAgvAPIAAgdIAeAAIAAAdgAhQAPIAAgdIAeAAIAAAdgAgOgRIAAgeIAdAAIAAAegAhQgRIAAgeIAeAAIAAAegAASgyIAAgeIAeAAIAAAegAhQgyIAAgeIAeAAIAAAegAA0hUIAAgeIAdAAIAAAegAhQhUIAAgeIAeAAIAAAeg");
	this.shape_37.setTransform(1225,441.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhvELIAAhFIBFAAIAABFgAgiC+IAAhGIBFAAIAABGgAgiBwIAAhFIBFAAIAABFgAgiAjIAAhFIBFAAIAABFgAgigqIAAhFIBFAAIAABFgAgih3IAAhGIBFAAIAABGgAhvh3IAAhGIBFAAIAABGgAgijFIAAhFIBFAAIAABFg");
	this.shape_38.setTransform(1210.2,499.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBGAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAAqAjIAAhFIBGAAIAABFgAgiAjIAAhFIBFAAIAABFgAhwAjIAAhFIBGAAIAABFgAgigqIAAhFIBFAAIAABFgAAqh3IAAhGIBGAAIAABGgAB4jFIAAhFIBGAAIAABFgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFgAhwjFIAAhFIBGAAIAABFgAi8jFIAAhFIBFAAIAABFg");
	this.shape_39.setTransform(1172,499.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigABjG6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigABjEFIAAiiICiAAIAACigAhQEFIAAiiICiAAIAACigAkFEFIAAiiICjAAIAACigAm5EFIAAiiICiAAIAACigABjBRIAAihICiAAIAAChgAm5BRIAAihICiAAIAAChgABjhiIAAijICiAAIAACjgAkFhiIAAijICjAAIAACjgABjkXIAAiiICiAAIAACigAhQkXIAAiiICiAAIAACigABjnLIAAiiICiAAIAACig");
	this.shape_40.setTransform(1250.4,351.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AEYJuIAAiiICiAAIAACigABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAm5JuIAAiiICiAAIAACigAkFG6IAAiiICjAAIAACigAhQEFIAAiiICiAAIAACigABjBRIAAihICiAAIAAChgAEYhiIAAijICiAAIAACjgAEYkXIAAiiICiAAIAACigAm5kXIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACig");
	this.shape_41.setTransform(1142.5,351.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBHAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAi8BwIAAhFIBFAAIAABFgAAqAjIAAhFIBGAAIAABFgAgiAjIAAhFIBFAAIAABFgAhwAjIAAhFIBHAAIAABFgAB4gqIAAhFIBGAAIAABFgAi8gqIAAhFIBFAAIAABFgAB4h3IAAhGIBGAAIAABGgAi8h3IAAhGIBFAAIAABGgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFgAhwjFIAAhFIBHAAIAABFg");
	this.shape_42.setTransform(1217.9,499.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAEYG6IAAiiICiAAIAACigAm5G6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigAEYBRIAAihICiAAIAAChgABjhiIAAijICiAAIAACjgAhQhiIAAijICiAAIAACjgAkFhiIAAijICjAAIAACjgAm5hiIAAijICiAAIAACjgAm5kXIAAiiICiAAIAACigAEYnLIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACigAm5nLIAAiiICiAAIAACig");
	this.shape_43.setTransform(1250.4,351.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AB4ELIAAhFIBGAAIAABFgAAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBHAAIAABFgAi8ELIAAhFIBFAAIAABFgAhwC+IAAhGIBHAAIAABGgAgiBwIAAhFIBFAAIAABFgAAqAjIAAhFIBGAAIAABFgAB4gqIAAhFIBGAAIAABFgAB4h3IAAhGIBGAAIAABGgAi8h3IAAhGIBFAAIAABGgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFgAhwjFIAAhFIBHAAIAABFg");
	this.shape_44.setTransform(1217.9,499.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAAqC+IAAhGIBGAAIAABGgAB4BwIAAhFIBGAAIAABFgAAqBwIAAhFIBGAAIAABFgAgiBwIAAhFIBFAAIAABFgAhwBwIAAhFIBGAAIAABFgAi8BwIAAhFIBFAAIAABFgAAqAjIAAhFIBGAAIAABFgAi8AjIAAhFIBFAAIAABFgAAqgqIAAhFIBGAAIAABFgAhwgqIAAhFIBGAAIAABFgAAqh3IAAhGIBGAAIAABGgAgih3IAAhGIBFAAIAABGgAAqjFIAAhFIBGAAIAABFg");
	this.shape_45.setTransform(1172,499.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBHAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAi8BwIAAhFIBFAAIAABFgAAqAjIAAhFIBGAAIAABFgAgiAjIAAhFIBFAAIAABFgAhwAjIAAhFIBHAAIAABFgAi8AjIAAhFIBFAAIAABFgAi8gqIAAhFIBFAAIAABFgAhwh3IAAhGIBHAAIAABGgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFg");
	this.shape_46.setTransform(1217.9,499.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBGAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAB4AjIAAhFIBGAAIAABFgAAqgqIAAhFIBGAAIAABFgAgigqIAAhFIBFAAIAABFgAhwgqIAAhFIBGAAIAABFgAi8gqIAAhFIBFAAIAABFgAi8h3IAAhGIBFAAIAABGgAB4jFIAAhFIBGAAIAABFgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFgAhwjFIAAhFIBGAAIAABFgAi8jFIAAhFIBFAAIAABFg");
	this.shape_47.setTransform(1172,499.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAEYG6IAAiiICiAAIAACigAm5G6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigAm5EFIAAiiICiAAIAACigABjBRIAAihICiAAIAAChgAhQBRIAAihICiAAIAAChgAkFBRIAAihICjAAIAAChgAm5BRIAAihICiAAIAAChgAm5hiIAAijICiAAIAACjgAkFkXIAAiiICjAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACig");
	this.shape_48.setTransform(1250.4,351.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhQJuIAAiiICiAAIAACigAhQG6IAAiiICiAAIAACigAhQEFIAAiiICiAAIAACigAhQBRIAAihICiAAIAAChgABjhiIAAijICiAAIAACjgAEYkXIAAiiICiAAIAACigAEYnLIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACigAm5nLIAAiiICiAAIAACig");
	this.shape_49.setTransform(1250.4,351.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBHAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAB4AjIAAhFIBGAAIAABFgAAqAjIAAhFIBGAAIAABFgAgiAjIAAhFIBFAAIAABFgAhwAjIAAhFIBHAAIAABFgAB4gqIAAhFIBGAAIAABFgAi8gqIAAhFIBFAAIAABFgAB4h3IAAhGIBGAAIAABGgAi8h3IAAhGIBFAAIAABGgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFgAhwjFIAAhFIBHAAIAABFg");
	this.shape_50.setTransform(1217.9,499.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAEYG6IAAiiICiAAIAACigAm5G6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigAm5EFIAAiiICiAAIAACigABjBRIAAihICiAAIAAChgAhQBRIAAihICiAAIAAChgAkFBRIAAihICjAAIAAChgAEYhiIAAijICiAAIAACjgAm5hiIAAijICiAAIAACjgAEYkXIAAiiICiAAIAACigAm5kXIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACig");
	this.shape_51.setTransform(1250.4,351.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAEYG6IAAiiICiAAIAACigAm5G6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigAEYBRIAAihICiAAIAAChgABjBRIAAihICiAAIAAChgAhQBRIAAihICiAAIAAChgAkFBRIAAihICjAAIAAChgAEYhiIAAijICiAAIAACjgAm5hiIAAijICiAAIAACjgAEYkXIAAiiICiAAIAACigAm5kXIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACig");
	this.shape_52.setTransform(1250.4,351.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBHAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAhwBwIAAhFIBHAAIAABFgAi8BwIAAhFIBFAAIAABFgAB4AjIAAhFIBGAAIAABFgAgiAjIAAhFIBFAAIAABFgAi8AjIAAhFIBFAAIAABFgAB4gqIAAhFIBGAAIAABFgAAqgqIAAhFIBGAAIAABFgAi8gqIAAhFIBFAAIAABFgAB4h3IAAhGIBGAAIAABGgAi8h3IAAhGIBFAAIAABGgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFgAhwjFIAAhFIBHAAIAABFg");
	this.shape_53.setTransform(1217.9,499.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAqELIAAhFIBGAAIAABFgAgiELIAAhFIBFAAIAABFgAhwELIAAhFIBGAAIAABFgAB4C+IAAhGIBGAAIAABGgAi8C+IAAhGIBFAAIAABGgAB4BwIAAhFIBGAAIAABFgAi8BwIAAhFIBFAAIAABFgAAqAjIAAhFIBGAAIAABFgAgiAjIAAhFIBFAAIAABFgAhwAjIAAhFIBGAAIAABFgAi8AjIAAhFIBFAAIAABFgAi8gqIAAhFIBFAAIAABFgAhwh3IAAhGIBGAAIAABGgAAqjFIAAhFIBGAAIAABFgAgijFIAAhFIBFAAIAABFg");
	this.shape_54.setTransform(1172,499.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAEYG6IAAiiICiAAIAACigAm5G6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigAkFEFIAAiiICjAAIAACigAm5EFIAAiiICiAAIAACigAEYBRIAAihICiAAIAAChgAhQBRIAAihICiAAIAAChgAm5BRIAAihICiAAIAAChgAEYhiIAAijICiAAIAACjgABjhiIAAijICiAAIAACjgAm5hiIAAijICiAAIAACjgAEYkXIAAiiICiAAIAACigAm5kXIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACig");
	this.shape_55.setTransform(1250.4,351.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ABjJuIAAiiICiAAIAACigAhQJuIAAiiICiAAIAACigAkFJuIAAiiICjAAIAACigAEYG6IAAiiICiAAIAACigAm5G6IAAiiICiAAIAACigAEYEFIAAiiICiAAIAACigABjBRIAAihICiAAIAAChgAhQBRIAAihICiAAIAAChgAkFBRIAAihICjAAIAAChgAhQhiIAAijICiAAIAACjgABjkXIAAiiICiAAIAACigAEYnLIAAiiICiAAIAACigABjnLIAAiiICiAAIAACigAhQnLIAAiiICiAAIAACigAkFnLIAAiiICjAAIAACigAm5nLIAAiiICiAAIAACig");
	this.shape_56.setTransform(1142.5,351.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_41},{t:this.shape_43},{t:this.shape_39},{t:this.shape_42},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},30).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_45},{t:this.shape_44},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},29).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_45},{t:this.shape_46},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},39).to({state:[{t:this.shape_41},{t:this.shape_43},{t:this.shape_47},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},22).to({state:[{t:this.shape_41},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},41).to({state:[{t:this.shape_41},{t:this.shape_49},{t:this.shape_47},{t:this.shape_42},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},9).to({state:[{t:this.shape_41},{t:this.shape_51},{t:this.shape_47},{t:this.shape_50},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},20).to({state:[{t:this.shape_41},{t:this.shape_52},{t:this.shape_47},{t:this.shape_50},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},5).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},8).wait(16));

	// cadre
	this.instance_4 = new lib.Symbole4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1197.6,420.2,1.949,1.949,0,0,0,103.4,172.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",11,11,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219));

	// fond noir
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F6F6F6").s().p("AHXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAGjAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAFuAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAE6APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAEHAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgADSAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgACdAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgABoAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAA0APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAAAAPQgFAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAFAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAgzAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAhoAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAicAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAjRAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAkFAPQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAk4APQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAltAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAmiAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAnXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAg");
	this.shape_57.setTransform(1196.3,274.6,1.949,1.949);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F6F6F6").s().p("AHXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAGjAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAFuAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAE6APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAEHAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgADSAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgACdAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgABoAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAA0APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAgAAAAPQgFAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAFAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAgzAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAhoAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIADAAQAGAAAEAEQAEAFABAFQgBAGgEAFQgEAEgGAAgAicAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIABAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAjRAPQgGAAgEgEQgEgFgBgGQABgFAEgFQAEgEAGAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAkFAPQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIADAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAk4APQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAgAltAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAmiAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAgAnXAPQgHAAgEgEQgEgFgBgGQABgFAEgFQAEgEAHAAIACAAQAHAAAEAEQAEAFABAFQgBAGgEAFQgEAEgHAAg");
	this.shape_58.setTransform(1189,541.8,1.949,1.949);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0E0F0F").s().p("AqaVaMAAAgqzIU1AAMAAAAqzg");
	this.shape_59.setTransform(1193.7,420.9,1.949,1.949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(219));

	// Calque_1
	this.instance_5 = new lib.fillebike_big1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-108,-40,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(642,512,1599.6,1129.6);
// library properties:
lib.properties = {
	id: 'CB3FA102437E404EB5AD73440C70F02E',
	width: 1500,
	height: 1104,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/display_graphique_atlas_.png?1536258206449", id:"display_graphique_atlas_"}
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
an.compositions['CB3FA102437E404EB5AD73440C70F02E'] = {
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