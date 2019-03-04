function Particle() {
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.pos = createVector(width / 2, height / 2);
    this.ellipseWidth = 50;
    this.ellipseHeight = 50;
    this.octaveOffset = int(random(1,3));

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
    this.display = function() {
        fill(120);
        ellipse(this.pos.x, this.pos.y, this.ellipseWidth, this.ellipseHeight);
    }

    this.applyForce = function(Vector) {
        this.acc.add(Vector);
    }
    this.impulse = function(VelocityVector) {
        this.vel.add(VelocityVector);
    }
    this.bounceY = function() {
        this.vel.y = -(this.vel.y);
        this.update();
    }
    this.bounceX = function() {
        this.vel.x = -this.vel.x;
        this.update();
    }
}