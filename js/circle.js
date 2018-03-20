TweenLite.set("#sun", {
	xPercent: -400, 
	yPercent: -50
});

TweenMax.to("#sun", 4, {
	bezier: getBezier(400, 400, 400, 400, true),
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
	xPercent: -400, 
	yPercent: -50
});

TweenMax.to("#moon", 4, {
	bezier: getBezier(400, 400, 400, 400, true),
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
