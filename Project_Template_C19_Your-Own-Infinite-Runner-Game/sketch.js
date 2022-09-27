var ship;
var shipImg;
var meteor;
var meteorImg;
var explosion;
var explosionImg;
var gameOver;
var gameOverImg;
var meteorGroup;
var background, backgroundImg;
var meteor2, meteor2Img;
var meteors;

function preload(){
shipImg = loadImage("spaceship.png");
meteorImg = loadImage ("meteoro.png");
explosionImg = loadImage("explosion.png");
gameOverImg = loadImage ("gameover.png");
backgroundImg = loadImage("background.jpg");
meteor2Img= loadImage("meteoro2.png");

}

function setup() {
 createCanvas (windowWidth, windowHeight)
 ship = createSprite (width/2, height/2, 50, 50);
 ship.addImage("spaceship", shipImg);
 ship.setCollider ('circle', 0,0,31);
 ship.scale = 0.5;
 meteorGroup = new Group(); 
 
}

function draw() {
 background(backgroundImg);
 spawnmeteors();
 if (meteorGroup.isTouching(ship)) {
    ship.destroy();
    explosion = createSprite(ship.x,ship.y,50,40);
    explosion.addImage("explosion", explosionImg);
    }
  if (keyDown("RIGHT_ARROW")) {
    ship.velocityX = +1.75;

  }
  if (keyDown("LEFT_ARROW")) {
    ship.velocityX = -1.75;
  }
drawSprites();
}


function spawnmeteors () {
if (frameCount % 60 === 0) {
var meteor = createSprite (200,50);
meteor.velocityY = 1;
meteor.addImage("Meteoro",meteorImg);
meteor.x = Math.round (random (0,windowWidth)); 
meteor.scale= 0.5;

var rand = Math.round(random(1,2));
switch(rand) {
  case 1: meteor.addImage(meteorImg);
  default: break;
}
meteorGroup.add(meteor);
}


}
