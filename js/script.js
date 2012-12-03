function init() {
  console.log("INIT");
    
  // objects
	var box = document.getElementById("box");
	var sq = document.getElementById("square");
	var txt = sq.getElementsByTagName("span");
	var txtEl = txt[0];
	
	console.log("----> " + txt.length);
	console.log("----> " + txt[0].firstChild.nodeValue);
	txt[0].firstChild.nodeValue = "erauqs";
	
	// centered box
	var xc = window.innerWidth * 0.5 - 100;
	var yc = window.innerHeight * 0.5 - 100;
	
	box.style.display = "block";
	box.style.top = yc + "px";
	box.style.left = -500 + "px";
	sq.style.top = (50 + yc) + "px";
	sq.style.left = (50 + xc) + "px";
	
	TweenMax.to(box, 1, {css:{left:xc}, ease:Back.easeInOut});
	TweenMax.to(box, 1, {css:{width:400, height:400, x:"-100", y:"-100"}, ease:Elastic.easeIn, delay:1});
//	TweenMax.to(box, 1, {css:{scale:2}, ease:Elastic.easeIn, delay:1});

	TweenMax.to(box, 0.5, {css:{rotation:360, backgroundColor:"#3b3b3b"}, ease:Quad.easeInOut, delay:1.5});
	
	TweenMax.to(document.body, 1, {css:{backgroundColor:"#ff6600"}, delay:2.0});
	
	TweenMax.delayedCall(2, animateSquare);
	
	function animateSquare() {
	  console.log("YO!");
	  sq.style.display = "block";
    // WEIRD!!! it sees 'square' as what?? and works in Webkit, hmmm but not in FF!
    //TweenMax.from(square, 1, {css:{top:-100}, ease:Elastic.easeOut});
    TweenMax.from(sq, 1, {css:{top:-100}, ease:Elastic.easeOut});
    TweenMax.to(sq, 1, {css:{backgroundColor:"#ff6600"}, ease:Quad.easeOut, delay:1});
//    TweenMax.to(txtEl, 1, {css:{marginTop:-20, color:"#fff"}, ease:Elastic.easeOut, delay:.25});
    tl.play();
    
	}
	
	tl = new TimelineMax({paused:true});
	tl.to(txtEl, 2, {css:{marginTop:-20, color:"#fff"}, ease:Elastic.easeInOut});
	tl.to(txtEl, 1, {css:{color:"#ff6600"}, ease:Quad.easeOut});
	tl.to(sq, .25, {onStart:revSquareText, css:{rotation:360}, ease:Quad.easeOut}, -1);
	//tl.call(revSquareText);
	//	tl.play();
	
	function revSquareText() {
	  txt[0].firstChild.nodeValue = "square";
	}

}
