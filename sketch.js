var rect1,rect2;
function setup() {
  createCanvas(800,400);
 rect1=createSprite(100,300,50,50);
  rect1.shapeColor="red"
  rect2=createSprite(400,300,50,50);
  rect2.shapeColor="red"
rect1.velocityX=+2
rect2.velocityX=-2
}

function draw() {
  background(255,255,255);  
var distanceCenterY=rect1.height/2+rect2.height/2
if (rect1.y-rect2.y<distanceCenterY&&rect2.y-rect1.y<distanceCenterY){
  rect1.velocityY=rect1.velocityY*-1
  rect2.velocityY=rect2.velocityY*-1
}
var distanceCenterX=rect1.width/2+rect2.width/2;
if(rect1.x-rect2.x<distanceCenterX&&rect2.x-rect1.x<distanceCenterX){
  rect1.velocityX=rect1.velocityX*-1
  rect2.velocityX=rect2.velocityX*-1
}
  drawSprites();
}