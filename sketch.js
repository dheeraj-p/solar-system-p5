let bodies;

function setup(){
  createCanvas(1200, 900, WEBGL);
  bodies = [
    new Body(createVector(300,200), 400, 20, createVector(-1.5, 1.5), 'skyblue'),
    new Body(createVector(270,170), 1, 5, createVector(1.5, -2.2), '#fff'),
    new Body(createVector(600, 450), 900, 70, createVector(0, 0), '#ffcc00')
  ];
}

function draw(){
  background(10,10,10);
  lights();
  rotateX(20);
  rotateZ(20);
  pointLight(250,250,250, 0, 0, 0);
  simulateGravity(bodies);
}

function simulateGravity(bodies){
  
  bodies.forEach(body => {
    body.move();
    body.applyGForce(bodies);
  });
}