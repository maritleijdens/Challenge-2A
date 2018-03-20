TweenMax.to("#bg-day", 4, {opacity:0});

TweenMax.to("#bg-night", 4, {opacity:1});

TweenMax.to("#date", 6, {color:"#FFFFFF"});

TweenMax.to("#clock", 6, {backgroundColor:"#000000"});

TweenMax.to("#time", 6, {color: "#FFFFFF"});

TweenMax.to("#sun", 3, {opacity:0});

TweenMax.to("#moon", 3, {opacity:1, delay: 3});





TweenMax.to("#bg-night", 4, {opacity:0, delay:60});

TweenMax.to("#bg-day", 4, {opacity:1, delay:60});

TweenMax.to("#date", 6, {color:"#000000", delay:60});

TweenMax.to("#clock", 6, {backgroundColor:"#ffffff", delay:60});

TweenMax.to("#time", 6, {color: "#000000", delay:60});

TweenMax.to("#sun", 3, {opacity:1, delay:63});

TweenMax.to("#moon", 3, {opacity:0, delay:60});
