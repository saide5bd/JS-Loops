var html = '';
var rgbColor;

function randomRGB() {
	// body...
	return Math.floor(Math.random() * 256 );
}

function randomColor() {
	var color = 'rgb(';
		color += randomRGB() + ',';
		color += randomRGB() + ',';
		color += randomRGB() + ')';
	return color;
}

function print(message){
	document.write(message);
} 

for (var i = 1; i <= 160; i += 1) {
	rgbColor = randomColor();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);


// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// document.write(html);