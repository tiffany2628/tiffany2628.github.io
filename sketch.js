var dot = {
  x: 50,
  y: 50,
  diameter: 25,
  color: {
    r: 200,
    g: 0,
    b: 255
  }
}
function setup(){
// Draw a createCanvas
  createCanvas(window.innerWidth, window.innerHeight);
  background(255,0);
}

function draw() {

  dot.color.r = random(100, 196);
  dot.color.g = random(100, 198);
  dot.color.b = random(100, 198);

  noFill();
  stroke(dot.color.r, dot.color.g, dot.color.b);
  ellipse(dot.x, dot.y, dot.diameter, dot.diameter);

  dot.x = random(0, width);
// Math.random() gives us a number from 0 to 1, multiply by 400 to get numbers
//from 0 to 400
  dot.y = Math.random() * height;
}
