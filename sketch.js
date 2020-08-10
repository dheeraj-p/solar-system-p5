let bodies;

function setup(){
  createCanvas(1000, 900);
  bodies = [
    new Body(createVector(300,200), 300, 30, createVector(-1.5, 1.5), 'skyblue'),
    new Body(createVector(280,180), 1, 10, createVector(2, -2), 'gray'),
    new Body(createVector(500, 400), 1000, 80, createVector(0, 0), 'orange')
  ];
}

function draw(){
  background(0);
  simulateGravity(bodies);
}

function simulateGravity(bodies){
  
  bodies.forEach(body => {
    body.move();
    body.applyGForce(bodies);
  });
}