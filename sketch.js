
/*var r = 0;
var g = 50;
var b=255;

var ball;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(600,400);
  
 ball=createSprite(200,200,50,50);
 
  

}


function draw(){
  background(250,250,100);
  //ball=createSprite(200,200,50,50);
  //ball=ellipse(200,200,40,40);
  
  ball.x=World.mouseX;
  ball.y=World.mouseY;

  
  drawSprites();

  // if (ball.x>0 && ball.x<=canvas.width){
  
  //   background(250, 250, 100);
  //   drawSprites();
  //   ball.visible=true;
  //  } 
   
 
  // if(ball.y>0 && ball.y <=canvas.height){
  
    // background(250, 250, 100);
    // ball.visible=true;
  // }
    // drawSprites();
  // }

}

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
*/

var colx=0
var b=255
function setup(){
  createCanvas(600,400)
}
function draw(){
  colx=map(mouseX,0,600,0,255);
  background(colx);
  ellipse(mouseX,200,64,64);
b=map(mouseY,0,400,255,0)
background(colx,0,b);
ellipse(mouseY,200,64,64)
}
