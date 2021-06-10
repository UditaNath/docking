var iss, spacecraft;
var hasDocked=false;
var issImg,spacebgImg;
var spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img
function preload(){
  issImg=loadAnimation("Images/iss.png");
  spacebgImg=loadImage("Images/spacebg.jpg");
  spacecraft1Img=loadImage("Images/spacecraft1.png")
  spacecraft2Img=loadImage("Images/spacecraft2.png");
  spacecraft3Img=loadImage("Images/spacecraft3.png");
  spacecraft4Img=loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addAnimation("iss image",issImg);
  iss.scale=0.5;

  spacecraft=createSprite(400,300,50,50);
  spacecraft.addAnimation("spaceCraft up",spacecraft1Img);
  spacecraft.addAnimation("spaceCraft down",spacecraft2Img);
  spacecraft.addAnimation("spaceCraft left",spacecraft3Img);
  spacecraft.addAnimation("spaceCraft right",spacecraft4Img);
  spacecraft.scale=0.1;
}

function draw() {
  background(spacebgImg); 
  //console.log(spacecraft.x,spacecraft.y) 
  if(!hasDocked){
    spacecraft.x=random(367,372);
    if(keyCode==LEFT_ARROW){
      spacecraft.changeAnimation("spaceCraft left",spacecraft3Img);
      spacecraft.x-=1;
    }
    if(keyCode==RIGHT_ARROW){
      spacecraft.changeAnimation("spaceCraft right",spacecraft3Img);
      spacecraft.x+=1;
    }
    if(keyCode==DOWN_ARROW){
      spacecraft.changeAnimation("spaceCraft down",spacecraft3Img);
      spacecraft.y+=1;
    }
    if(keyCode==UP_ARROW){
      spacecraft.changeAnimation("spaceCraft up",spacecraft3Img);
      spacecraft.y-=1;
    }
    if(spacecraft.x==370 && spacecraft.y==217){
      hasDocked=true;
      
    }
    
  }
  drawSprites();
  if(hasDocked==true){
    textSize(22);
    text ("Docking Successful!",400,300);
  }
}