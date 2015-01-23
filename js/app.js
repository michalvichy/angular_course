// window.onload = setColor;
var body = document.getElementsByTagName('body')[0];

function bgcColor(r, g, b) {
	body.style.backgroundColor = 'rgb(' + r +',' + g + ',' + b + ')';
}

function setColor() {
		var r = 0;
		var g = 255;
		var b = 10;
		var rFlaga = true;
		var gFlaga;
	setInterval(function(){
		if( r < 255 & rFlaga == true ) {
			r++;
			if(r == 255) {
				console.log(r);
				rFlaga = false;
			}
		}
		if( rFlaga == false) r--;
		g--;
		bgcColor(r, g, 0);
	}, 10);
}