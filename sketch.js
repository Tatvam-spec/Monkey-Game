
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x); 
  
  
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();

  
}


function draw() {
  background(255);
 
 
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100,50);
  
  

  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY= -12;
  }
  monkey.velocityY= monkey.velocityY+0.8;
  
  monkey.collide(ground); 
  
  //spawn bananas
  spawnBananas();
  
  //spawn obtacles
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount % 80 === 0) {
    var banana=createSprite(600,300,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifeTime=300;
    bananasGroup.add(banana)
  }
}

function spawnObstacles(){
  if(frameCount % 60 === 0) {
    var obstacle =createSprite(400,365,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.y = Math.round(random(310,340));
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacle.lifeTime=300;
    obstaclesGroup.add(obstacle)
  }
}





