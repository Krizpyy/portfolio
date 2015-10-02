// ==================
//  Assignment 3
// ==================

var Yposition = 0;
  var Xposition = 0;
  function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {

    
    if (mouseIsPressed) {
       Xposition = Xposition + 100;

       if(Xposition > windowWidth)
          Xposition = 10 ;

           background("red");
           ellipse(Xposition, 200, 20, 20);
           ellipse(Xposition, 500, 50, 50);
           ellipse(Xposition, 30, 30, 300);
           for(var i = 0; i < 100; i=i+1){
        stroke(i*19,9,2);
        line(i*900, 1000, i*1, 22); }

           ellipse(300, 101, 100, 100);
  fill("black");
 ellipse(280, 90, 10, 10);
 ellipse(321, 90, 10, 10);


fill("white");
ellipse(300, 201, 100, 100);

fill("white");
ellipse(300, 301, 100, 100);

fill("black");
ellipse(300, 200, 5, 5);

fill("black");
ellipse(300, 220, 5, 5);

fill("black");
ellipse(300, 180, 5, 5);

 

  fill("brown"); 
  line(339, 190, 410, 125);
  fill("brown"); 
  line(259, 190, 170, 125);




  fill("orange");

  triangle(289, 112, 318, 103, 344, 150);




  point(300, 200);
  point(350, 250);
  } 
  else {
             Yposition = Yposition + 100;

         if (Yposition > windowHeight) 
             Yposition = 2;

               background("black");
               ellipse(200, Yposition, 20, 20);
    
    
  }

  
        for(var i = 0; i < 100; i=i+1){
        stroke(i*4,3,2);
        line(i*29, 0, i*1, 1000);
      }

      var count = 10;

      fill("white");

  
 


 

      
      
    
    
    }