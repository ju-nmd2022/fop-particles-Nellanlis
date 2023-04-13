import Firework from "./fireworks.js";
import Barcode from "./barcode.js";

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.draw();
    particle.update();
    if (particle.isDead()) {
      const particleIndex = particles.indexOf(particle);
      particles.splice(particleIndex, 1);
    }
  }
}
window.draw = draw;

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    if (mouseX < innerWidth / 2) {
      let particle = new Firework(mouseX, mouseY);
      particles.push(particle);
    } else {
      let particle = new Barcode(mouseX, mouseY);
      particles.push(particle);
    }
  }
}
window.mousePressed = mousePressed;
