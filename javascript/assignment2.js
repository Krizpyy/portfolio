// ===============
//  Assignment 2
// ===============
function setup() {

  //==============================
  //  START writing your code here
  //==============================
  createCanvas(windowWidth, windowHeight);

  background('lightpink');

  //flower
  //stick
  rect(365,300,10,150);

  rect(345,400,50,50);

  ellipse (395, 285, 40, 40);

  ellipse (395, 315, 40, 40);

  ellipse (370, 325, 40, 40);

  ellipse (345, 315, 40, 40);
  
  ellipse (345, 285, 40, 40);

  ellipse (370, 270, 40, 40);
  //center
  ellipse (370, 300, 50, 50);
  
  point(370, 300);

  line(365, 400, 345, 380);

  line(375, 400, 395, 380);

//Bear
  //right ear
  ellipse(640, 160, 50, 50);
  //left ear
  ellipse(560, 160, 50, 50);
  //head
  ellipse(600, 200, 100, 100);
  //let arm
  ellipse(550, 290, 110, 25);
  //right arm
  ellipse(650, 290, 110, 25);
  //left leg
  ellipse(570, 420, 30, 100);
  //right leg
  ellipse(630, 420, 30, 100);
  //body
  ellipse(600, 325, 130, 150);

  triangle(575, 330, 625, 330, 600, 350);

  fill('black')
  //nose
  ellipse(600, 210, 15, 10);
  //left eye
  ellipse(580, 190, 10, 10);
  //right eye
  ellipse(620, 190, 10, 10);
  fill('white')
  ellipse(580, 190, 5, 5);
  ellipse(620, 190, 5, 5);
}