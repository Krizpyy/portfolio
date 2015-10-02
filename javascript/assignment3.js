var Xposition = 0;
var Yposition = 0;
var Ybottom = 400;

function setup() {
  createCanvas(1440, 900);
  background (0);


}

function draw() {



    stroke(mouseX,mouseY,Ybottom);
    line(mouseX, mouseY, Yposition, Ybottom);

  if (mouseIsPressed) {
  Yposition = Yposition - 6;
  Ybottom = Ybottom + 6;
  } else {
Yposition = Yposition + 3;
  }

  if (Yposition > 1440) {
   Yposition = 0;
   Xposition = 0;
    clear();
  background(0);
  }


}
