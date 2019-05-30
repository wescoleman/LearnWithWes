var majScale;
var particles;
var oscils;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    var startButton = document.getElementById('startBtn');
    var stopButton = document.getElementById('stopBtn');
    startButton.onclick = function() {
        loop();
        draw();
    }
    stopButton.onclick = function() {
        noLoop();
    }
    noLoop();
    majScale = generateScale(random(50, 200));
    particles = new Array(12);
    oscils = new Array(particles.length);
    for (var i = 0; i < particles.length; i++) {
        particles[i] = new Particle();
        oscils[i] = new p5.Oscillator('sawtooth');
        initialImpulse = createVector(random(-4, 4), random(-4, 4));
        particles[i].impulse(initialImpulse);
    }
}

function draw() {
    background(220);
    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
        particles[i].update();
        if (particles[i].pos.x >= width - particles[i].ellipseWidth / 2 || particles[i].pos.x <= particles[i].ellipseWidth / 2) {
            particles[i].bounceX();
            particles[i].audioBounce(majScale[int(random(0, 7))] * particles[i].octaveOffset);
        } else if (particles[i].pos.y >= height - particles[i].ellipseHeight / 2 || particles[i].pos.y <= particles[i].ellipseHeight / 2) {
            particles[i].bounceY();
            particles[i].audioBounce(majScale[int(random(0, 7))] * particles[i].octaveOffset);
        }
    }
}