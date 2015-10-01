// ==================
//  Assignment 3
// ==================
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() 

{if (mouseIsPressed) {
    background('lightgreen');
    fill("pink")

  ellipse(mouseX, mouseY, 100, 100);
  rect(mouseX, mouseY,100,200);
  line(mouseX, mouseY, 125, 100);
   line(mouseX, mouseY, 150, 100);
  line(mouseX, mouseY, 175, 100);
  ellipse(mouseX, mouseY, 80, 80);
rect(mouseX, mouseY,25,25);
rect(mouseX, mouseY,25,25);
  rect(mouseX, mouseY,150,20);
  rect(mouseX, mouseY,150,20);
ellipse(mouseX, mouseY, 40, 27);
ellipse(mouseX, mouseY, 80, 57);
rect(mouseX, mouseY,25,55);
rect(mouseX, mouseY,25,55);
rect(mouseX, mouseY,95,25);
rect(mouseX, mouseY,25,85);
  ellipse(mouseX, mouseY, 110, 115);
triangle(mouseX, mouseY,400,180,400,220)
triangle(mouseX, mouseY,295,220,280,285)
ellipse(mouseX, mouseY, 12, 8);
line(mouseX, mouseY,437,219);
ellipse(mouseX, mouseY, 7, 7);
 

 fill("orange")


var shapes = [
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  ["circle","circle","circle","circle", "circle","circle","circle","circle"],
  
  ];


for(var row = 0; row < shapes.length; row++){
    for(var column = 0; column < shapes[row].length;column++){
      if (shapes[row][column] == "circle"){
        ellipse(row*100, column*100, 100, 100);
      }

      else if (shapes[row][column] == "line")
        
        line(row*100, column*100, row*100+100 , column*100+100);

    }
   
  }


}
}
