import Particle from "./particle.js";

export default class Firework extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = this.x + (Math.random() * 100 - 10);
    this.y = this.y + (Math.random() * 100 - 10);
    this.velocity = 0.2 + Math.random();
    this.life = 20;
    this.maxLife = 80 + Math.floor(Math.random() * 80);
  }
  update() {
    this.y = this.y - this.velocity;
    this.velocity = this.velocity * 0.4;
    this.life = this.life + 2;
  }
  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 0, 255, 60);
    star(0, 0, 10, 30, 6);
    pop();
  }

  isDead() {
    if (this.life < this.maxLife) {
      return true;
    } else {
      return false;
    }
  }
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
