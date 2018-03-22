// DRAAIEN ZON

TweenLite.set("#sun", {
	xPercent: -400, 
	yPercent: -50
});

//duurt 10 seconden
TweenMax.to("#sun", 15, {
	//grootte rondje
	bezier: getBezier(160, -100, 140, 130, true),
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



// Media Query voor iPad

function myFunction(x) {
    if (x.matches) { // If media query matches
        TweenMax.to("#sun", 15, {
			//grootte rondje
			bezier: getBezier(325, -100, 300, 300, true),
			//eindeloze door blijven gaan
			repeat: -1,
			ease:Linear.easeNone
		});
    }
}

var x = window.matchMedia("(min-width: 760px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



// Media Query voor laptop

function myFunctionLaptop(x) {
    if (x.matches) { // If media query matches
        TweenMax.to("#sun", 15, {
			//grootte rondje
			bezier: getBezier(550, -200, 250, 200, true),
			//eindeloze door blijven gaan
			repeat: -1,
			ease:Linear.easeNone
		});
    }
}

var x = window.matchMedia("(min-width: 1204px)")
myFunctionLaptop(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




// Media Query voor desktop

function myFunctionDesktop(x) {
    if (x.matches) { // If media query matches
        TweenMax.to("#sun", 15, {
			//grootte rondje
			bezier: getBezier(650, -200, 250, 150, true),
			//eindeloze door blijven gaan
			repeat: -1,
			ease:Linear.easeNone
		});
    }
}

var x = window.matchMedia("(min-width: 1366px)")
myFunctionDesktop(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes








// DRAAIEN MAAN


TweenLite.set("#moon", {
	xPercent: -500, 
	yPercent: -50
});

//duurt 10 seconden
TweenMax.to("#moon", 15, {
	//grootte cirkel
	bezier: getBezier(130, -50, 150, 150, true),
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

// Media Query voor iPad

function myFunctionIpadMaan(x) {
    if (x.matches) { // If media query matches
        TweenMax.to("#moon", 15, {
			//grootte rondje
			bezier: getBezier(280, -50, 300, 300, true),
			//eindeloze door blijven gaan
			repeat: -1,
			ease:Linear.easeNone
		});
    }
}

var x = window.matchMedia("(min-width: 760px)")
myFunctionIpadMaan(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



// Media Query voor laptop

function myFunctionLaptopMaan(x) {
    if (x.matches) { // If media query matches
        TweenMax.to("#moon", 15, {
			//grootte rondje
			bezier: getBezier(180, -50, 250, 200, true),
			//eindeloze door blijven gaan
			repeat: -1,
			ease:Linear.easeNone
		});
    }
}

var x = window.matchMedia("(min-width: 1204px)")
myFunctionLaptopMaan(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




// Media Query voor desktop

function myFunctionDesktopMaan(x) {
    if (x.matches) { // If media query matches
        TweenMax.to("#moon", 15, {
			//grootte rondje
			bezier: getBezier(120, -50, 250, 150, true),
			//eindeloze door blijven gaan
			repeat: -1,
			ease:Linear.easeNone
		});
    }
}

var x = window.matchMedia("(min-width: 1366px)")
myFunctionDesktopMaan(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

