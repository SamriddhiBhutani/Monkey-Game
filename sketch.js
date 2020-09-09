var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var suvival = 0;
var ground;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
createCanvas(600,400);  

   monkey = createSprite(80,320,10,10);
   monkey.addAnimation("running",monkey_running);
   monkey.scale = 0.2;
  
   ground = createSprite(200,370,600,10);
   ground.velocityX = -4;
  
   FoodGroup = createGroup ();
   obstacleGroup = createGroup ();
}
function draw() {
 background ("pink");
  ground.shapeColor = "skyblue";
 monkey.collide(ground);
  
  stroke("green");
  textSize(20);
  survival = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survival, 100,50);
  if (ground.x < width/2) {
    ground.x = 300;
  }
  
  if(keyWentDown("space")) {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (FoodGroup.isTouching(monkey)) {
    FoodGroup.destroyEach();
  }
  if (obstacleGroup.isTouching(monkey)) {
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
  }
 Food ();
 Obstacle ();
 drawSprites();
}

function Food () {
  if (frameCount % 80 === 0) {
    banana = createSprite(80,0,10,10);
    banana.y = Math.round(random(120,390));
    banana.velocityY = 4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    lifetime = 150;
    FoodGroup.add(banana);
  }
}

function Obstacle () {
 if (frameCount % 300 === 0) {
   obstacle = createSprite(600,320,10,10);
   obstacle.velocityX = -5;
   obstacle.lifetime = 150;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacleGroup.add(obstacle);
 }
}
