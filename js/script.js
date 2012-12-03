function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function initAnimation() {
	console.log("Start Animation");

	// objects
	var box = document.getElementById("box");
	var sq = document.getElementById("square");
	var txt = sq.getElementsByTagName("span");
	var txtEl = txt[0];	
	var squareTxt = txt[0].firstChild.nodeValue;
	var revSquareTextElem = squareTxt.split("").reverse().join("");

	console.log("----> " + txt.length);
	console.log("----> " + txt[0].firstChild.nodeValue);
	console.log("----> " + squareTxt);
	console.log("----> " + revSquareTextElem);
	txt[0].firstChild.nodeValue = revSquareTextElem;

	// centered box
	var xc = window.innerWidth * 0.5 - 100;
	var yc = window.innerHeight * 0.5 - 100;

	// element styles
	box.style.display = "block";
	box.style.top = yc + "px";
	box.style.left = -500 + "px";
	sq.style.top = (50 + yc) + "px";
	sq.style.left = (50 + xc) + "px";

	// GSAP tweens to run based on delayed timing
	TweenMax.to(box, 1, {css:{left:xc}, ease:Back.easeInOut});
	TweenMax.to(box, 1, {css:{width:400, height:400, x:"-100", y:"-100"}, ease:Elastic.easeIn, delay:1});
	TweenMax.to(box, 0.5, {css:{rotation:360, backgroundColor:"#3b3b3b"}, ease:Quad.easeInOut, delay:1.5});
	TweenMax.to(document.body, 1, {css:{backgroundColor:"#ff6600"}, delay:2.0});
	TweenMax.delayedCall(2, animateSquare);

	// GSAP timeline tween created and paused and set. this will play based on a delayed call
	tl = new TimelineMax({paused:true});
	tl.to(txtEl, 2, {css:{marginTop:-40, color:"#fff"}, ease:Elastic.easeInOut});
	tl.to(txtEl, 1, {css:{color:"#ff6600"}, ease:Quad.easeOut});
	tl.to(sq, .25, {onStart:revSquareText, css:{rotation:360}, ease:Quad.easeOut}, -1);

	// show the little square with a GSAP delayed function call
	function animateSquare() {
		console.log("YO!");
		sq.style.display = "block";
		TweenMax.from(sq, 1, {css:{top:-100}, ease:Elastic.easeOut});
		TweenMax.to(sq, 1, {css:{backgroundColor:"#ff6600"}, ease:Quad.easeOut, delay:1});
		tl.play();
}
	// when the tl:TimelineMax runs, display the string in reverse.
	function revSquareText() {
		txt[0].firstChild.nodeValue = squareTxt;
	}

}
