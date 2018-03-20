
/**
 * Start clock
 */
function initClock() {

	// init
	renderClock();

	// run every second
	setInterval(renderClock, 1000);

	// changeBackground();
}

/**
 * Render clock
 */
function renderClock() {

	// get HTML elements
	var clock = document.getElementById('time');
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	// display time
	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	// fill array
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();

	// hours: add leading zero
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minutes: add leading zero
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
}

// function changeBackground(background) {
// 	var time = [];

// 	// fill array
// 	time['seconds'] = background.getSeconds();
// 	time['minutes'] = background.getMinutes(),
// 	time['hours']   = background.getHours();

// 	// hours: add leading zero
// 	if (time['minutes'] < 50) {
// 		TweenMax.to("#bg-day", 4, {opacity:0});

// 		TweenMax.to("#bg-night", 4, {opacity:1});

// 		TweenMax.to("#date", 6, {color:"#FFFFFF"});

// 		TweenMax.to("#clock", 6, {backgroundColor:"#000000"});

// 		TweenMax.to("#time", 6, {color: "#FFFFFF"});

// 		TweenMax.to("#sun", 6, {opacity:0});

// 		TweenMax.to("#moon", 6, {opacity:1});

// 	}

// 	// minutes: add leading zero
// 	if (time['minutes'] < 48) {
// 		TweenMax.to("#bg-night", 4, {opacity:0, delay:7});

// 		TweenMax.to("#bg-day", 4, {opacity:1, delay:7});

// 		TweenMax.to("#date", 6, {color:"#000000", delay:7});

// 		TweenMax.to("#clock", 6, {backgroundColor:"#ffffff", delay:7});

// 		TweenMax.to("#time", 6, {color: "#000000", delay:7});

// 		TweenMax.to("#sun", 6, {opacity:1, delay:7});

// 		TweenMax.to("#moon", 6, {opacity:0, delay:7});
// 	}

// 	return time;
// }


// start
initClock();