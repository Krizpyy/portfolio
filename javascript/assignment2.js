// ===============
//  Assignment 2
// ===============

function setup() {

  //make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);

  //set the background color
  background('green');

//color for fire hydrant
fill('red');

  // top ellipse:
  ellipse(150, 100, 100, 100);

   // base rectangle:
  rect(100,100,100,200);

  // lines parallel inside of fire hydrant
  line(125, 300, 125, 100);

   line(150, 300, 150, 100);

  line(175, 300, 175, 100);

// circle: is an ellipses with equal width and height
  ellipse(150, 200, 80, 80);

//bottom rectangle
rect(138,190,25,25);

//top retangle
rect(138,25,25,25);
  
 // base or body rectangle:
  rect(75,100,150,20);

 // top square :
  rect(75,300,150,20);

//color for dog
fill('gold');

//snout
ellipse(420, 215, 40, 27);

//head
ellipse(380, 205, 80, 57);

//front leg
rect(318,255,25,55);

//front leg 2
rect(255,255,25,55);

//leg 1
rect(155,205,95,25);

//leg 2
rect(300,275,25,85);

//body
  ellipse(295, 225, 110, 115);

//ear
triangle(370,210,400,180,400,220)

//tail
triangle(290,220,295,220,280,285)

//eye black
fill("black");

//eye
ellipse(410, 205, 12, 8);

//mouth
line(414,219,437,219);

//nose
ellipse(440, 211, 7, 7);

}