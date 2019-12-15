function Vehicle(mass,strength) {
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);
  this.pos = createVector(width/2, height/2);
  this.followVec = createVector(0,0);
  this.mass = mass;
  this.ellipseWidth = 2 * sqrt((this.mass/PI));
  this.ellipseHeight = this.ellipseWidth;
  this.maxSpeed = 20;
  this.strength = strength;
   
  this.osc = new p5.Oscillator('sawtooth');
  this.osc.amp(0.0);
  this.filt = new p5.LowPass(1000);
  this.filt.process(this.osc);
  
  

  
  this.display = function(){
  	fill(this.pos.x/width*255, this.pos.y/height*255, this.pos.x+this.pos.y/(width+height));
    ellipse(this.pos.x, this.pos.y, this.ellipseWidth, this.ellipseHeight);
  }
  this.update = function() {
  	this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);  
  }
  this.follow = function(target){
      //find the displacement vector between the disired point and the current point of the vehicle
      this.followVec = p5.Vector.sub(target, this.pos);
      /* if the vehicle is within set units then scale the displacement vector down, 
      if it's not run at max speed until in range this allows us to get a velocity 
      vector in the correct direction and scale it to a max speed */
      if (this.followVec.mag() < 50){
        this.followVec.setMag(map(target.mag(), 0, 100, 0, this.maxSpeed));
      } else {
        this.followVec.setMag(this.maxSpeed);
      }
      //subtract the follow vector with new magnitude limited to a maximum speed;
      this.followVec.sub(this.vel);
      this.applyForce(this.followVec);
  }
  
  this.applyGravity = function(gravity) {
    this.acc.add(gravity);
  }
  this.applyForce = function(force){
    var f = force.copy();
    f.div(mass / this.strength);
  	this.acc.add(f);
  }
  
  this.bounceY = function() {
    this.vel.y = -this.vel.y;
  }
  this.bounceX = function() {
  	this.vel.x = -this.vel.x;
  }
  
  this.borders = function(){
    if(this.pos.x > width){
      this.pos.x = 0;
    } else if(this.pos.x<0){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    } else if(this.pos.y<0){
      this.posy = height;
    }
  }
}