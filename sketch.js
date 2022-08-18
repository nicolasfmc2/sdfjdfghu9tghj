var mar 
var navio
function preload(){
  navio = loadAnimation("ship-1.png","ship-2.png","ship-3.png,","ship-4.png")
  mar = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite (0,200,400,400)
  navio = createSprite(10,10,30,30)
  mar.addImage("mar",mar);
  mar.velocityX=4;
  navio.addAnimation("navio",navio);
}

function draw() {
  background("blue");
    drawSprites();
    if(mar.x < 0 ){
      mar.x = mar.width/2;
     }
    
}


