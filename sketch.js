var bgImg;
var cat;
var mouse;



function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat_sit = loadAnimation("images/cat1.png");
    mouse_stand = loadAnimation("images/mouse1.png");

    cat_moving = loadAnimation("images/cat3.png","images/cat2.png");
    mouse_moving = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat_caught = loadAnimation("images/cat4.png");
    mouse_caught = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,650,50,50)
    cat.addAnimation("cat_sitting",cat_sit);
    cat.scale = 0.3;

    mouse = createSprite(100,650,50,50)
    mouse.addAnimation("mouse_stand",mouse_stand);
    mouse.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2)
{
    cat.addAnimation("cat_caught",cat_caught)   
    cat.changeAnimation("cat_caught") 
    cat.velocityX = 0;

    mouse.addAnimation("mouse_caught",mouse_caught)
    mouse.changeAnimation("mouse_caught")
    
} 

    keyPressed();
    
    drawSprites();
}
 


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX =  -5;
     cat.addAnimation("cat_moving",cat_moving);
      cat.changeAnimation("cat_moving")

      mouse.addAnimation("mouse_moving",mouse_moving);
      mouse.changeAnimation("mouse_moving")


  }


}
