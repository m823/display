var imgs = [];
var timer = 0;
var reset = 600;
var numImgs = 5;

function preload() {
	for(var i = 1; i < numImgs + 1; i++){
		imgs.push(loadImage("images/" + str(i) + ".jpg"));
	}	
};

function setup() {
  	createCanvas(windowWidth,windowWidth * 0.5625);
};

function draw() {
	timer++;
	if(timer === reset){
		timer = 0;
	}
	
	image(imgs[floor(timer/(reset/numImgs))],0,0,width,height);
	
	for(var i = 0; i < numImgs; i++){
		noStroke();
		if(i === floor(timer/(reset/numImgs))){
			fill(0,0,0,180);
		} else {
			fill(255);
		}
		ellipse( (width * 0.42) + (i*58),height-30,20,20);	
	}
};

mousePressed = function(){
	for(var i = 0; i < numImgs; i++){
		distance = dist( (width * 0.42) + (i*58),height-30, mouseX,mouseY );
		if(distance < 10){
			timer = (reset/numImgs)*i;
		}
	}
};