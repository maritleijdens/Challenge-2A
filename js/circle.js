// DRAAIEN ZON

TweenLite.set("#sun", {
	xPercent: -200, 
	yPercent: -50
});

//duurt 10 seconden
TweenMax.to("#sun", 10, {
	//grootte rondje
	bezier: getBezier(400, 400, 400, 400, true),
	//eindeloze door blijven gaan
	repeat: -1,
	ease:Linear.easeNone
});

function getBezier(cx, cy, rx, ry, autoRotate) {
  
	ry = ry || rx;
  
	var k = 0.551915024494;  
	var x = k * rx;
	var y = k * ry;
  
	return {
	autoRotate: autoRotate || false,
	type: "cubic",
	values: [
		{ x: cx + rx, y: cy },
		{ x: cx + rx, y: cy + y  }, { x: cx + x,  y: cy + ry }, { x: cx,      y: cy + ry },
		{ x: cx - x,  y: cy + ry }, { x: cx - rx, y: cy + y  }, { x: cx - rx, y: cy },
		{ x: cx - rx, y: cy - y  }, { x: cx - x,  y: cy - ry }, { x: cx,      y: cy - ry },
		{ x: cx + x,  y: cy - ry }, { x: cx + rx, y: cy - y  }, { x: cx + rx, y: cy }
	]
	};
}














// DRAAIEN MAAN


TweenLite.set("#moon", {
	xPercent: -500, 
	yPercent: -50
});

//duurt 10 seconden
TweenMax.to("#moon", 10, {
	//grootte cirkel
	bezier: getBezier(150, 150, 150, 150, true),
	//eindeloos blijven herhalen
	repeat: -1,
	ease:Linear.easeNone
});

function getBezier(cx, cy, rx, ry, autoRotate) {
  
	ry = ry || rx;
  
	var k = 0.551915024494;  
	var x = k * rx;
	var y = k * ry;
  
	return {
	autoRotate: autoRotate || false,
	type: "cubic",
	values: [
		{ x: cx + rx, y: cy },
		{ x: cx + rx, y: cy + y  }, { x: cx + x,  y: cy + ry }, { x: cx,      y: cy + ry },
		{ x: cx - x,  y: cy + ry }, { x: cx - rx, y: cy + y  }, { x: cx - rx, y: cy },
		{ x: cx - rx, y: cy - y  }, { x: cx - x,  y: cy - ry }, { x: cx,      y: cy - ry },
		{ x: cx + x,  y: cy - ry }, { x: cx + rx, y: cy - y  }, { x: cx + rx, y: cy }
	]
	};
}
