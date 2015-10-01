var Xposition = 0;
  function setup() {

      createCanvas(600, 400);

      background('lightgrey')

                    }

  function draw() {


                     if (mouseIsPressed){
                        Xposition = Xposition + 5;

                             if(Xposition > windowWidth)
                               Xposition = 0 ;

                              for (var y = 0; y < 30; y ++) {
                                for (var x = 0; x < 30; x++) {
                                   ellipse(x*Xposition+30, y*30+200, 50, 50);
                                    rect(x*Xposition+30, y*30+400, 60, 60);
                                  }

                                }

                            }
                  }
                              
              
// ==================
//  Assignment 3
// ==================

