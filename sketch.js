var base, fan1, fan2,fan3;
var gameState;
function setup() {
  createCanvas(400, 400);
  base = createSprite(200,220,15,150);
  base.shapeColor ="turquoise";
  
  fan1 = createSprite(200,150,120,10);
  fan1.shapeColor = 'lightpink';
  
  fan4 = createSprite(200,150,10,120);
  fan4.shapeColor = 'lightyellow';
  
  fan2 = createSprite(200,150,10,120);
  fan2.shapeColor = 'lightblue';
  
  fan3 = createSprite(200,150,10,120);
  fan3.shapeColor = 'lightgreen';
  
  
  
  fan3.rotation = 45;
  fan4.rotation = 310;
  
  gameState = "start";
  
}

function draw() {
  background("lavender");
  drawSprites();
  fill("black");
  textSize(13);
  text("Press 'E' to End Rotation",200,320);
  text("Press 'Space' to Start Rotation",200,340);
  text("Press 'F' to Speed Rotation",200,360);
  text("Press 'S' to Slow Rotation",200,380);
  
  //WHEN THE GAMESTATE IS START MAKE THE FANS ROTATE WITH A SPEED OF 5
  if(gameState ==="start"){
    fan1.rotationSpeed = 5;
    //fan1 is done so do it foe the rest fans
  }
  else if(gameState ==="stop"){
    fan1.rotationSpeed = 0;
    //stop rotating the fans
    
    
  }
  else if(gameState === "fast"){
    fan1.rotationSpeed = 25;
   //increase all fans speed to 25-30
  }
  else if(gameState === "slow"){
   //decrease all the fans speed to 2-5
  }
  //change the game states according to the keboard movement
  //for the fast gamestate it is done
  
  if(keyDown("f")){
   gameState = "fast"; 
  }
  //for stop
 
  //for start
  
  
  //for slow

}
