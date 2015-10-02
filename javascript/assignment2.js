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

  //make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);

  //set the background color
  background('#FF0034');

//Shape starts here:
  fill('yellow');
  stroke('black');
  strokeWeight('10');
  ellipse(900,250,250,250);

  fill('white');
  strokeWeight('1');
  ellipse(850, 230, 40, 70);
  ellipse(940, 230, 40, 70);
  
  fill('black');
  ellipse(840, 230, 20, 30);
  ellipse(930, 230, 20, 30);

  arc(900, 310, 80, 70, 100, PI+QUARTER_PI, CHORD);

  strokeWeight('15');
  line(770, 160, 1030, 160);

  triangle(810, 160, 990, 160, 900, 50);

  noStroke('');
  fill('blue');
  rect(870,100,60,40);

  fill('white');
  rect(870,100,28, 18);
  rect(902,100,28, 18);
  rect(870,122,28, 18);
  rect(902,122,28, 18);

  fill('red');
  rect(870,100,25, 15);
  rect(905,100,25, 15);
  rect(870,125,25, 15);
  rect(905,125,25, 15);


	//==============================
  //  STOP writing your code here
  //==============================
}