const flock = [];
var n =0;
var speed = 1;
var r = random(0, 255);
var g = random(0, 255);
var b = random(0, 255);

function setup() {
	createCanvas(800, 600);
	for(i = 0; i<10; i++){
		flock.push(new boid());
	}
	flock.push(new boid());
	frameRate(30)
}

function draw() {
	// if (frameCount % 10 == 0){
	// 	 r = random(0, 255);
	// 	 g = random(0, 255);
	// 	 b = random(0, 255);
		
	// }
	
	background(204, 0, 153);
	 	
	
		
		for(let boid of flock){
			boid.edges();
			boid.flock(flock);
			boid.show();
			boid.update(); 
				
		}
		
// print(flock[0]);
}
	
	
