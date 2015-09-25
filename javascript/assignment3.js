// ==================
//  Assignment 3
// ==================

function setup(){
  createCanvas(windowWidth, windowHeight);
  background("lightblue");

}
  

function draw() {

  var randomRed = random(0, 256);
  var randomGreen = random(0, 256);
  var randomBlue = random(0, 256);

for(var x = 0; x < windowWidth; x=x+10){
        line(x, 0, x, windowHeight);
        stroke(x,randomGreen,randomBlue);
      }

for(var y = 0; y < windowHeight; y=y+10){
        line(0, y, y, windowHeight);
        stroke(y,randomGreen,randomBlue);
      }

if(mouseX<windowWidth, mouseY<400){
  fill(2, randomGreen, 160);
  rect (mouseX, mouseY, 40, 40);
}else 

if(mouseX<windowWidth, mouseY>400){
  fill(randomRed, 3, 200);
  ellipse (mouseX, mouseY, 40, 40);
}



  

  //tree
  fill ("brown")
  rect (205, 420, 30, 200);
  fill ("green")
  triangle (140, 420, 300, 420, 220, 360);
  triangle (160, 360, 280, 360, 220, 300);
  triangle (180, 300, 260, 300, 220, 260);

  fill ("brown")
  rect (235, 420, 30, 200);
  fill ("green")
  triangle (170, 440, 330, 440, 250, 380);
  triangle (190, 380, 310, 380, 250, 320);
  triangle (210, 320, 290, 320, 250, 280);

  fill ("brown")
  rect (305, 420, 30, 200);
  fill ("green")
  triangle (240, 420, 400, 420, 320, 360);
  triangle (260, 360, 370, 360, 320, 300);
  triangle (280, 300, 360, 300, 320, 260);

  fill ("brown")
  rect (105, 390, 30, 200);
  fill ("green")
  triangle (40, 390, 200, 390, 120, 330);
  triangle (60, 330, 180, 330, 120, 270);
  triangle (80, 270, 160, 270, 120, 230);

  //Sun
  fill ("red");
  ellipse (1150, 100, 80, 80);
  line (1150, 50, 1150, 10);
  line (1150, 150, 1150, 190);
  line (1100, 100, 1060, 100);
  line (1200, 100, 1240, 100);
 
 if (mouseIsPressed){
  fill("hotpink");
  ellipse (60, 60, 40, 40);
  ellipse (110, 30, 40, 40);
  ellipse (100, 100, 50, 50);
  ellipse (180, 65, 30, 30);
  ellipse (135, 60, 30, 30);
  ellipse (155, 30, 20, 20);
  ellipse (155, 110, 40, 40);
  ellipse (230, 50, 50, 50);
  ellipse (200, 100, 30, 30);
  ellipse (260, 90, 40, 40);
  ellipse (290, 60, 30, 30);
  ellipse (270, 30, 20, 20);
  ellipse (300, 20, 20, 20);
  ellipse (340, 25, 30, 30);
  ellipse (330, 65, 35, 35);
  ellipse (300, 95, 20, 20);

 }else{
  //clouds
  fill("white");
  ellipse (60, 60, 40, 40);
  ellipse (110, 30, 40, 40);
  ellipse (100, 100, 50, 50);
  ellipse (180, 65, 30, 30);
  ellipse (135, 60, 30, 30);
  ellipse (155, 30, 20, 20);
  ellipse (155, 110, 40, 40);
  ellipse (230, 50, 50, 50);
  ellipse (200, 100, 30, 30);
  ellipse (260, 90, 40, 40);
  ellipse (290, 60, 30, 30);
  ellipse (270, 30, 20, 20);
  ellipse (300, 20, 20, 20);
  ellipse (340, 25, 30, 30);
  ellipse (330, 65, 35, 35);
  ellipse (300, 95, 20, 20);

  }

}