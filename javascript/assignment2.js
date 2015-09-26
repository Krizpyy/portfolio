// ===============
//  Assignment 2
// ===============

function setup() {

  //==============================
  //  START writing your code here
  //==============================

  createCanvas(400, 300);

  //set the background color
  background('yellow');
  //background 2
  fill('lightblue');
  rect(10,10,230,350);
  //bunny head
  fill('clear');
  ellipse(100,100,30,100);
  ellipse(140,100,30,100);
  ellipse(120,190,100,100);
  //bunny eyes
  fill('pink');
  ellipse(105,180,5,5);
  ellipse(135,180,5,5);
  //bow
  rect(112,240,13,13);
  triangle(112,247,99,240,99,253);
  triangle(126,247,138,253,138,240);
  //bunny mouth
  fill('black');
  line(110,210,125,220);
  line(125,210,110,220);


  //==============================
  //  STOP writing your code here
  //==============================
}