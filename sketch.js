var img;
function preload() {
  img = loadImage("/images/Scribble.png");
}

function setup () {
  createCanvas(400, 400);
}

function draw() {
  background(0,100,10,30);
  rect (10,10,200,10)
  fill (3,85,3)
  image(img,mouseX,mouseY)
}
