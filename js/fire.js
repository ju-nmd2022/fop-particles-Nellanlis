import Particle from "./particle.js";

export default class Fire extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = this.x + (Math.random() * 20 - 10);
    this.velocity = 0.2 + Math.random();
    this.life = 0;
    this.maxLife = 60 + Math.floor(Math.random() * 60);
  }

  update() {
    this.y = this.y - this.velocity;
    this.velocity = this.velocity * 0.99;
    this.life = this.life + 1;
  }

  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 255, 0, 20);
    ellipse(0, 0, 6);
    pop();
  }

  isDead() {
    if (this.life > this.maxLife) {
      return true;
    } else {
      return false;
    }
  }
}
