function initClock() {

	// init
	renderClock();

	// elke seconde
	setInterval(renderClock, 1000);
}

function renderClock() {

	// elemnten uit html halen
	var clock = document.getElementById('time');
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	// hoe de klok eruit komt te zien
	clock.innerHTML = time['hours'] + sep +  time['minutes'];
	var x = 20


		if (time['hours'] > 5) {
			TweenMax.to("#bg-night", 4, {opacity:0});

			TweenMax.to("#bg-day", 4, {opacity:1});

			TweenMax.to("#date", 6, {color:"#000000"});

			TweenMax.to("#clock", 6, {backgroundColor:"#ffffff"});

			TweenMax.to("#time", 6, {color: "#000000"});

			TweenMax.to("#sun", 1, {opacity:1});

			TweenMax.to("#moon", 1, {opacity:0});

		}

		if (time['hours'] > 17) {
			TweenMax.to("#bg-day", 4, {opacity:0});

			TweenMax.to("#bg-night", 4, {opacity:1});

			TweenMax.to("#date", 6, {color:"#FFFFFF"});

			TweenMax.to("#clock", 6, {backgroundColor:"#000000"});

			TweenMax.to("#time", 6, {color: "#FFFFFF"});

			TweenMax.to("#sun", 1, {opacity:0});

			TweenMax.to("#moon", 1, {opacity:1});
		}

		
		
}

// de : die wordt gebruikt zorgt ervoor dat de seconden bij worden gehouden
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}


function getCurrentTime(date) {
	var time = [];

	// tijd van laptop afhalen
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();
	// console.log(time['seconds']);

	// uur hoger dan 10
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minnuten hoger dan 10
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
	// console.log(time);



}



// start
initClock();