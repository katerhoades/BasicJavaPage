var img1;

function preload() {
img1 = loadImage("images/computer3.png")
}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(0, 0, 0);
  imageMode(CENTER);
  image(img1, mouseX, mouseY);
}
