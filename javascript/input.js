// ===============================================================
//  input.js
// ---------------------------------------------------------------
// Draw something different based on what the user types.  
// - You must use 4 different types of shape
// - you must use random() in some way
// - you must accept 3 different types of responses
// - You can reuse what you drew for the sketch assigmnet if you want
// ===============================================================

function draw_assignment(userInput){

  //==============================
  //  START writing your code here
  //==============================


  // If you want to clear the canvas every time someone submits a new command
  // you can use clear(); to reset the canvas. Try uncommenting this line:
  //clear(); 

  var shapeSize = random(50, 300);
  var shapeX = random(100, 600);
  var shapeY = random(100, 600);

  var LineP1 = random (0,1000);
  var LineP2 = random (1,1000);
  var LineP3 = random (1,1000);
  var LineP4 = random (1,1000);

  var randomRed = random(0,256);
  var randomGreen = random(0,256);
  var randomBlue = random(0,256);


  if (userInput == "circle"){

    fill(randomRed, randomGreen, randomBlue);
    ellipse(shapeX, shapeY, shapeSize, shapeSize);

  } else if (userInput == "square"){

  	fill(randomRed, randomGreen, randomBlue);
    square(shapeX, shapeSize, shapeY, shapeSize);

  } else if (userInput == "line"){

  	fill(randomRed, randomGreen, randomBlue);
    line(LineP1, LineP2, LineP3, LineP3);

  } else if (userInput == "rectangle"){

  	fill(randomRed, randomGreen, randomBlue);
    rect(shapeX, shapeY, shapeX, shapeY);


  } else {
     
    greeting.html("I cannot immagine what a "+ userInput+ " is. Give me another chance?");

  }


  //==============================
  // STOP writing your code here
  //==============================
}