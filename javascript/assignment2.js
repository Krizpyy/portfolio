// ===============================================================
//  sketch.js
// ---------------------------------------------------------------
// Draw something recognizable. It must use at least 4 different 
// types of shapes.
// ===============================================================


function setup() {

  //==============================
  //  START writing your code here
  //==============================
// ===============================================================
//  drawing shape.js
// ===============================================================

  //make the canvas the full size of the window
  createCanvas(700, 500);

  //set the background color
  background('black');


 // ellipse:
  // (coorditante, y coordinate, width, height)
  fill('lightpink')
  ellipse(510, 350, 60, 80);

  fill('lightpink')
  ellipse(293, 350, 60, 80);


  // rectangle:
  // (x coorditante, y coordinate, width, height)
  fill('lightpink');
  rect(300,300,200,200);


  // square: is a rectangle with equal width and height
  // (x coorditante, y coordinate, width, height)
  fill('lightblue');
  rect(377,435,50,65);

  rect(400,370,5,30)
  // line
  // coordinates of points: x1,y1,x2,y2
  //line(100, 300, 120, 380);

  // triangle
  // coordinates of points: x1,y1,x2,y2,x3,y3
  fill('lightyellow')
  triangle(300, 300, 400, 200, 502, 300);


  // circle: is an ellipses with equal width and height
  // (coorditante, y coordinate, width, height)
  
  strokeWeight(3);
  fill('lightgreen');
  ellipse(350, 350, 40, 40);

  fill('lightgreen');
  ellipse(455, 350, 40, 40);

  // points
  // (x coordinate, y coordinate)
  //point(300, 200);
  //point(350, 250);

  // arc 
  //arc(500, 300, 80, 80, 0, PI+QUARTER_PI, CHORD);


}


  //==============================
  //  STOP writing your code here
  //==============================
