let rad = 100;
let xpos, ypos;

let xspeed = 2.8;
let yspeed = 2.2;

let xdirection = 1; 
let ydirection = 1;

function setup() {
  createCanvas(400, 400);
  fill('red');
  frameRate(30);
  ellipseMode(RADIUS);
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(220);
  
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
  
  fill('green');
  stroke('blue')
  circle(100, 100, rad);
  
  fill('#1aff1a');
  stroke('black')
  rect(0,200,200,200);
  
  fill('blue');
  stroke('pink')
  circle(100, 300, rad);
  
  fill('#ff6666');
  stroke('green')
  rect(200,0,200,200);
  
  fill('red')
  stroke('black')
  circle(xpos, ypos, rad);
  
  fill('white')
  strokeWeight(10)
  ellipse(xpos,ypos,rad, 50)
}