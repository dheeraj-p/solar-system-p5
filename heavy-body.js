const G_CONSTANT = 2;
let DRAW_ARROW = true;

class Body {
  constructor(pos, mass, radius, vel, color) {
    this.mass = mass;
    this.radius = radius;
    this.vel = vel;
    this.pos = pos;
    this.color = color;
  }

  move() {
    this.pos.add(this.vel);
    push();
    fill(this.color);
    noStroke();
    translate(this.pos.x - width/2, this.pos.y - height/2);
    sphere(this.radius);
    pop();
    // ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    // if (!this.vel.equals(createVector(0, 0)) && DRAW_ARROW)
    //   drawArrow(this.pos, p5.Vector.mult(this.vel, 5), 'white');
  }

  getMass() {
    return this.mass;
  }

  getPosition() {
    return this.pos;
  }

  applyGForce(otherBodies) {
    const netForce = otherBodies.reduce((acc, body) => {
      if (this.mass > body.mass) return acc;
      const force = p5.Vector.sub(body.getPosition(), this.pos);
      const rSq = force.magSq();
      force.setMag((G_CONSTANT * this.mass * body.getMass()) / rSq);
      return p5.Vector.add(force, acc);
    }, createVector(0, 0));

    const acceleration = p5.Vector.div(netForce, this.mass);
    this.vel.add(acceleration);
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(1);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
