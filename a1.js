var time =0;
var limit = 5;
function setup(){
	var c = createCanvas(400, 400);
	c.position(500, 800);
	background(255, 65, 65);
	slider1 = createSlider(2, 10, 2, 1);
	slider2 = createSlider(0, TWO_PI, PI/4, 0.01);
	slider3 = createSlider(10, 250, 10, 1);
	
}
function draw() {
	//clear();
	//for(frame = 0; frame<limit; frame++){
		if (time % 10 == 0){
			//time = 0;
			background(255, 65, 65, 255);
		}
		/*if (time % 20 == 0){
			background(54, 56, 255, 255);
			//time = 0;
		}*/
		var n = 20;
		var angle = PI/4;
		var size = 0;

		stroke(255);
		translate(0, height);
		maple(slider1.value(), slider2.value(), slider3.value());
		time++;

	//}
}





