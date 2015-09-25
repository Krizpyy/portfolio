var colorArray = ["blue","red","green","purple","yellow"];  
var Yposition = 0;
var Xposition = 0;

  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
    

  function draw() {
background("lightblue");
    Yposition = Yposition + 3;

    if (Yposition > windowHeight) {
      Yposition = 0 
    }

    //for (var x = 0; x < windowWidth; x++){
   
    //ellipse(x,0,50,50);
if (mouseIsPressed) {
  background(random(0,10));
  Yposition -=4;
  colorMode (HSB, 100);

      if (Yposition < 0) {
        Yposition = windowHeight+ random(-4);  
      }}
    for (var x=0;x<100;x++){
            fill(random(0,255),random(0,255),random(0,255));

    ellipse(x*100+1, Yposition, random(1,50),random(1,50));

  for(var y = 0; y<colorArray.length;y++){
        fill(colorArray[y]);
          rect(Yposition, x * 100+1, random(1,30),random(1,30));}

    //for (var y = 0; y < 5; y++) {
      //fill(y*30,150,200);
    //rect(x*100+10, Yposition, 70, 70);
}    
    //Xposition = Xposition +3
    //if (Xposition > windowHeight){
     // Xposition = 0;}
    //for (var x=0;x<100;x++){
    //ellipse(x*100+10, Xposition, random(1,50),random(1,50));
    //triangle(Xposition, 75, Xposition
      //, 20, Xposition, 75);

  }
