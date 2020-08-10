let bodies;

let sunTexture;
let earthTexture;
let moonTexture;
function preload(){
  sunTexture = loadImage('textures/sun.jpeg');
  earthTexture = loadImage('textures/earth.jpeg');
  moonTexture = loadImage('textures/moon.jpg');
}

function setup(){
  createCanvas(1200, 900, WEBGL);
  bodies = [
    new Body(createVector(300,200), 400, 25, createVector(-1.5, 1.5), earthTexture),
    new Body(createVector(270,170), 1, 5, createVector(1.5, -2.2), moonTexture),
    new Body(createVector(600, 450), 900, 90, createVector(0, 0), sunTexture, true)
  ];
}

function draw(){
  background(10,10,10);
  rotateX(20);
  rotateZ(20);
  pointLight(255,255,255, 0, 0, 0);
  simulateGravity(bodies);
}

function simulateGravity(bodies){
  
  bodies.forEach(body => {
    body.move();
    body.applyGForce(bodies);
  });
}