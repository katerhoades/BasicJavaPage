var img;
function preload() {
  img = loadImage("images/Scribble.png"); 
}

function setup () {  
  createCanvas(400, 400);
}

function draw() {
  background(50,50,100);
  rect (10,10,200,10)
  fill (20,15,60)
  image(img,mouseX,mouseY)
}
