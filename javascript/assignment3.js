// ==================
//  Assignment 3
// ==================



  //==========================================
  //Create a drawing that:

	// - Has 100 or more things (lines, circles, cats, snowflakes, etc)
	// - Is animated
	// - Changes when you click or move your mouse
	// You will also be graded based on your creativity and ability to do something that is different from any of the examples provided.
  //==========================================





Yposition = 0

 function setup(){
  createCanvas(windowWidth,windowHeight);
    background('green');

 }


 function draw(){
  if (mouseIsPressed){
  
    Yposition = Yposition - 30;
      if (Yposition < 0) {
        Yposition = windowHeight;
      }

      background('green');
      fill('black');
      ellipse(200, Yposition, 50, 100);
            ellipse(400, Yposition, 50, 100);

            ellipse(600, Yposition, 50, 100);

            ellipse(800, Yposition, 50, 100);

      fill('white');
      ellipse(230, Yposition, 60,20);
      ellipse(170, Yposition, 60,20);

       ellipse(430, Yposition, 60,20);
      ellipse(370, Yposition, 60,20);

          ellipse(630, Yposition, 60,20);
      ellipse(570, Yposition, 60,20);


          ellipse(830, Yposition, 60,20);
      ellipse(770, Yposition, 60,20);
     

    
  


  }else{

    strokeWeight(0.5);

    fill("green");
    rect(mouseX-5,mouseY+35,10,60);
    ellipse(mouseX+25,mouseY+70,40,5);
    ellipse(mouseX-25,mouseY+70,40,5);

    fill(mouseX/5,mouseY/5,120);
    ellipse(mouseX+30,mouseY,50,50);
    ellipse(mouseX-30,mouseY,50,50);
    ellipse(mouseX,mouseY+30,50,50);
    ellipse(mouseX,mouseY-30,50,50);

    fill('white');
    ellipse(mouseX+30,mouseY,30,5);
    ellipse(mouseX-30,mouseY,30,5);
    ellipse(mouseX,mouseY+30,5,30);
    ellipse(mouseX,mouseY-30,5,30);

    fill('yellow');
    ellipse(mouseX,mouseY,15,15);



    
  }
 }









