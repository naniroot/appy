var drawingApp = (function () {
	"use strict";

	var canvas,
		context,
		canvasWidth = window.innerWidth,
		canvasHeight = window.innerHeight-200,
		clickX = [],
		clickY = [],
		colorPurple = "#cb3594",
		colorGreen = "#659b41",
		colorYellow = "#ffcf33",
		colorBrown = "#986928",
		colorBlack = "#000000",
		x = canvasWidth/2,
		y = canvasHeight/2,
		len = 10,
	// clears the canvas.
	clearCanvas = function () {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
	},
	mainDraw = function(newX, newY, color){
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(newX, newY);
		x = newX;
		y = newY;
		context.lineWidth = 5;
		context.lineCap = 'square';
		if( !color){
			context.strokeStyle = colorBlack;
		} else {
			context.strokeStyle = color;
		}
		context.stroke();
		context.closePath();
	},
	up = function (color){
		var newY = Math.abs(y-len) % canvasHeight;
		mainDraw(x, newY, color);
	},
	down = function (color){
		var newY = Math.abs(y+len) % canvasHeight;
		mainDraw(x, newY, color);
	},
	left = function (color){
		var newX = Math.abs(x-len) % canvasWidth;
		mainDraw(newX, y, color);
	},
	right = function (color){
		var newX = Math.abs(x+len) % canvasWidth;
		mainDraw(newX, y, color);
	},
	init = function() {
		canvas = document.createElement('canvas');
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		canvas.setAttribute('id', 'canvas');

		document.getElementById('canvasDiv').appendChild(canvas);
		if (typeof G_vmlCanvasManager !== "undefined") {
			canvas = G_vmlCanvasManager.initElement(canvas);
		}
		context = canvas.getContext("2d"); 

		// up(140, colorYellow);
		// left(250);
		// down(160);
		// right(370);
		// down(500, colorBrown);
		up(colorBrown);
		up(colorBlack);
		up(colorYellow);
		up(colorGreen);
		up(colorPurple);
		up(colorBlack);
		up(colorYellow);
	};
	return {
		init: init
	};
}());