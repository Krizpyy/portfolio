// ===============
//  Assignment 2
// ===============
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

createCanvas(windowWidth, windowHeight);
  background('lightblue');
  fill('green');
  rect(0,480,windowWidth,windowHeight);
  strokeWeight(0);
  fill('white');

//clouds
  ellipse(300,100,100,50);
  ellipse(320,120,60,40);
  ellipse(260,121,100,40);

  ellipse(1000,140,130,80);
  ellipse(930,150,80,40);
  ellipse(1050,150,100,30);

//cats

  stroke('black');
  fill('black');
  ellipse(600,270,40,50);

  triangle(582,263,595,250,590,235);
  triangle(618,263,605,250,610,235);


  ellipse(910,460,40,50);
  triangle(892,453,905,440,900,425);
  triangle(928,453,915,440,920,425);

  ellipse(200,490,40,50);
  triangle(182,483,195,470,190,455);
  triangle(218,483,205,470,210,455);


  strokeWeight(4);
  stroke('white');
  point(595,264);
  point(610,264);

  point(914,448);
  point(900,448);

  point(190,485);
  point(210,485);

  fill('black');
  stroke('black');
  triangle(320,400,290,540,360,490);
  triangle(480,400,440,490,510,540);
  ellipse(400,640,300,350);
  fill('white');
  ellipse(350,570,30,30);
  ellipse(450,570,30,30);



//house and that head

  strokeWeight(2);
  stroke('#99997A');
  fill('#FFFFE6');
  rect(600,300,300,200);
  
  strokeWeight(2);
  stroke('#CC0000');
  fill('#FF3300');
  triangle(550,300,950,300,750,250);

  stroke('#4C331A');
  fill('#704B25');
  rect(650,360,80,140);

  stroke('#996600');
  fill('#FFCC00');
  ellipse(720,430,10,10);

  stroke('black');
  fill('#CCFFFF');
  ellipse(820,395,80,80);

  stroke('#FFC2A3');
  fill('#FFE6CC');
  ellipse(815,415,35,35);

  strokeWeight(4);
  stroke('black');
  point(805,410);
  point(825,410);

  strokeWeight(2);
  line(820,355,820,435);
  line(780,395,860,395);

  //==============================
  //  STOP writing your code here
  //==============================
}
