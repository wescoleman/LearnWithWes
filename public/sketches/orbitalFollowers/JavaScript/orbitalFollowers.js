var vehicles,
    gravCenter,
    majScale,
    chordTime,
    counter,
    wind,
    ampl,
    framesPerSecond;
function setup() {
  framesPerSecond = 60;
  createCanvas(window.innerWidth, window.innerHeight);
  noLoop();

  background (color(0,0,0));  
  noStroke();
  frameRate(framesPerSecond);
  chordTime = 10
  counter = 0;
  wind = createVector(0,0);
  majScale = generateScale(random(60, 400));
  vehicles = new Array(30);
  gravCenter = new Spiral();
  for (var i = 0; i < vehicles.length; i++){
    vehicles[i] = new Vehicle(random(100,1000), random(0.01, 0.5));
    vehicles[i].osc.freq(majScale[int(random(0,7))]);
    vehicles[i].osc.stop(0);
  }
  var startButton = document.getElementById('startBtn');
  var stopButton = document.getElementById('stopBtn');
  startButton.onclick = function() {
    loop();
    draw();
    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].osc.start();
    }
  }
  stopButton.onclick = function() {
    noLoop();
    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].osc.stop(0);
    }
  }
}

function draw() {
  background (color(0,0,0,50));
  gravCenter.col.r = random(0, 200);
  gravCenter.col.g = random(0, 250);
  gravCenter.col.b = random(100, 250);    
  fill(gravCenter.col.r, gravCenter.col.g, gravCenter.col.b);
  ellipse(gravCenter.x, gravCenter.y, 5, 5);
  gravCenter.update()
  for (var i = 0; i < vehicles.length; i++){
    if(mouseIsPressed){
      wind.set((width/2 - mouseX)/width, (height/2 - mouseY)/height);
      vehicles[i].applyForce(wind.mult(100));
    }
    ampl = 0.05*(1/p5.Vector.mag(p5.Vector.sub(vehicles[i].pos, gravCenter.pos)))
    vehicles[i].display();
    vehicles[i].update();
    vehicles[i].follow(gravCenter.pos);
    
    if(ampl>=0.05){
        ampl = 0.05;
    }
    vehicles[i].osc.amp(ampl);
  }
  
  if(counter >= chordTime*framesPerSecond){
    majScale = generateScale(random(60, 400));
    for (var i = 0; i < vehicles.length; i++){
      changeChord(vehicles[i], majScale[int(random(0,7))]);
    }
    counter = 0;
  }
  counter++;
}
function generateScale(f) {
    let a = pow(2, (1 / 12));
    let scaleFreqs = [f * pow(a, 0), f * pow(a, 4), f * pow(a, 7), f * pow(a, 11), f * pow(a, 14), f * pow(a, 24), f * pow(a, 36)];
    return scaleFreqs;
}

function changeChord(p, f) {
  p.osc.freq(f)
}



  
    