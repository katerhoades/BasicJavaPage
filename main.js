function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  strokeWeight(10);
  arc(90, 60, 80, 80, QUARTER_PI, PI + QUARTER_PI);
  strokeWeight(20);
  ellipse(20, 20, 120, 120)

}
