var img;
function preload() {
  img = loadImage("Scribble.png");
}

function setup () {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  rect (10,10,200,10)
  fill (3,85,3)
  image(img,mouseX,mouseY)
}
