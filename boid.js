class boid {// https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiX24PJ58PjAhUNmI8KHV_VCq8QjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fhentai-porn-blog.com%252Fpeitoes%252Fhentai-goblin-slayer-onna-shinkan%252F%26psig%3DAOvVaw3iNpi6Jxn72i2StuQ39Li4%26ust%3D1563722666029874&psig=AOvVaw3iNpi6Jxn72i2StuQ39Li4&ust=1563722666029874
	
	constructor() {
		this.position = createVector(random(width), random(height));
		this.velocity = p5.Vector.random2D();
		this.velocity.setMag(random(1, 2));
		this.acceleration = createVector();		
		this.max_acc = 1	;
		this.max_v = 50;
		this.radius_sight_cohesion = 50000;
		this.radius_sight = 0;
		this.alpha = width/2
		this.beta = height/2
	} 
	edges(){
		var x = this.position.x;
		var vx = this.velocity.x;
		var vy = this.velocity.y;
		var y = this.position.y;
		if(x>=width && vx!=0){
			this.position.x = 0;
		}
		else if(x<=0 && vx!=0){
			this.position.x = width;			
		}
		if(y>=height && vy!=0){
			this.position.y = 0;
		}
		else if(y<=0 && vy!=0){
			this.position.y = height;
		}
		
		// return this.position;
	}
	
	flock(boids){
		let allignment = this.align(boids);
		let cohesion = this.cohesion(boids);
		this.acceleration.add(cohesion);
		this.acceleration.add(allignment);
	}
	
	cohesion(boids){
		let avg = createVector();// this shall store the supposed allignment of the considered boid
		let total = 0;
		//let perception = 100;
		
		for(let other of boids){
			
			let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
			if(other!=this && d <= this.radius_sight_cohesion){
				avg.add(other.position);
				total ++;
			}
			
			
		}
		
		if(total>0){
			avg.div(total );
			
			avg.sub(this.position);
			avg.setMag(this.max_v);
			avg.sub(this.velocity);
			
			// avg.limit(this.max_acc);
		}
		return avg;	
	}
	
	align(boids){
		let avg = createVector();// this shall store the supposed allignment of the considered boid
		let total = 0;
		//let perception = 100;
		
		for(let other of boids){
			
			let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
			if(other!=this && d <= this.radius_sight){
				avg.add(other.velocity);
				total ++;
			}
			
			
		}
		
		if(total>0){
			avg.div(total );
			avg.sub(this.velocity);		
			// avg.limit(this.max_acc);
		}
		return avg;	
		
	}
	update(){
		// print(this.acceleration);
		// print(this.acceleration.div(2));
		this.velocity.limit(this.max_v);
		this.acceleration.limit(this.max_acc);
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration.div(1));
		//this.acceleration.mult(0);
		
	}
	show(){
		var v = this.velocity
				
		strokeWeight(8);
		
			var r = random(0, 255);
			var g = random(0, 255);
			var b = random(0, 255);
		
		//else
		//	stroke(255);
		
		var x1 = this.position.x
		var y1 = this.position.y
		strokeWeight(20)
		stroke(r, g, b, 255)
		fill(255, 255, 255)
		if (x1 > 5 && x1 < width * 0.95 && y1> 5 && y1<height * 0.95){
			line(this.alpha, this.beta, x1, y1)
		}
		strokeWeight(10)
		stroke(255, 255, 255, 255)
		fill(255, 255, 255)
		point(x1, y1)
		
		this.alpha = x1
		this.beta = y1
	}
}