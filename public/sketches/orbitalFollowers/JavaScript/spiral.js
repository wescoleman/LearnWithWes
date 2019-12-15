function Spiral() {
  this.angle = 2.0;
  this.scalar = 75;
  this.speed = 0.001;
  this.direction = 1;
  this.x = this.offset * this.scalar;
  this.y = this.offset * this.scalar;
  this.pos = createVector(this.x, this.y);
  this.col = {
    r: 255,
    g: 0,
    b: 0
  };
  this.update = function(){
    this.x = width/2 + cos(this.angle) * this.scalar;
    this.y = height/2 + sin(this.angle) * this.scalar;
    this.angle += this.speed*20;
    this.scalar += this.speed*this.direction;
    if(this.scalar >= 80) {
      this.direction = -1;
    } else if (this.scalar <= 5) {
      this.direction = 1;
    }
    this.pos.set(this.x, this.y)
  }
}