function Particle() {
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.pos = createVector(width / 2, height / 2);
    this.ellipseWidth = 50;
    this.ellipseHeight = 50;
    this.octaveOffset = int(random(1,3));

    this.osc = new p5.Oscillator('sawtooth');
    this.env = new p5.Envelope();
    this.filt = new p5.LowPass();
    this.att = 0.001;
    this.dec = 0.2;
    this.sus = 0.4;
    this.rel = 2;
    this.env.setRange(0.4, 0.0);

    this.audioBounce = function (note) {
        this.filt.freq(note * 1.5);
        this.osc.freq(note);
        this.osc.disconnect();
        this.filt.process(this.osc);
        this.env.setADSR(this.att, this.dec, this.sus, this.rel);
        this.env.scale(0,1,0,.05);
        this.osc.amp(this.env);
        this.osc.start();
        this.env.play();
  }

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