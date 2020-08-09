let bodies;

function setup(){
  createCanvas(1000, 900);
  bodies = [
    new Body(createVector(400,200), 10, 20, createVector(4, -1), 'skyblue'),
    new Body(createVector(608,706), 1, 15, createVector(2, -2.6), 'green'),
    new Body(createVector(500, 400), 3000, 50, createVector(0, 0), 'orange')
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