//Global Variables
var monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8,monkey9,monkey10;

var ground,ground_running;

var banana, banana_running;

var jungle,jungle_running;

var gameover,gameove_running;

var restari,restart_running;



function preload(){
  ground_running=loadImage("ground.jpg");
  
  monkey1=loadImage("Monkey_01.png");
  monkey2=loadImage("Monkey_02.png");
  monkey3=loadImage("Monkey_03.png");
  monkey4=loadImage("Monkey_04.png");
  monkey5=loadImage("Monkey_05.png");
  monkey6=loadImage("Monkey_06.png");
  monkey7=loadImage("Monkey_07.png");
  monkey8=loadImage("Monkey_08.png");
  monkey9=loadImage("Monkey_09.png");
  monkey10=loadImage("Monkey_10.png");
  
  gameover_running=loadImage("gameOver.png");
  
  restart_running=loadImage("restart.png");
  
  banana_running=loadImage("Banana.pnh");
  
  jungle_running=loadImage("jungle.jpg");
}

function setup() {
  createCanvas(600,300);
  
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  
  score=0
  
  player=createSprites(200,300,85,75);
  player.addImage("monkey",monkey_running);
  player.scale=0.5;
   
  gameover =createSprites(200,200,97,50);
  gameover.addImage("gameover",gameover_running);
  gameover.scale=0.5;
  gameover.visible=false;
  
  jungle=createSprites(200,200,50,60);
  jungle.addImage("jungle",jungle_running);
  jungle.scale=0.5;
  jungle.x = ground.width /2;
  jungle.velocityX = -2;
  
  ground = createSprite(200,390,400,10);
  
  invisibleground=createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bananasGroup=createGroup();
  stonesGroup=createGroup();
}



function draw(){
  stroke("white");
textSize(20);
text("Score: "+ count, 250, 100);
fill("white");
  
 background(255);
  if(gamestate === play){
    
  if(keyDown("space")&&monkey.y>161) {
    monkey.velocityY = -10;
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(bananasGroup.isTouching(monkey)){
    score=score+1;
  }
    
    if(stonesGroup.isTouching(monkey)){
    gamestate=END;
  }
  else if(gamestate===END){
    gameover.visible=true;
    stonesGroup.setVelocityXEach(0);
    bananasGroup.setVelocityXEach(0);
    stonesGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
  }
  monkey.collide(ground); 
  drawSprites();
  text("Score: "+ count, 250, 100);
}

function spawnBanana() {
  if (frameCount % 60 === 0) {
    var Banana = createSprite(600,220,40,10);
    Banana.y = Math.round (random(80,120));
    Banana.addImage(banana_running);
    Banana.scale = 0.5;
    Banana.velocityX = -3;
    Banana.lifetime = 200;
    bananasGroup.add(Banana);
  }
  
}

function spawnstone() {
  if (frameCount % 300 === 0) {
    var stone = createSprite(600,265,10);
    stone.y = Math.round (random(80,120));
    stone.addImage(banana_running);
    stone.scale = 0.5;
    stone.velocityX = -10;
    stone.lifetime = 200;
    stonesGroup.add(stone);
  }
  
}
}

function spawnmonkey() {
  if(frameCount % 60 === 0) {
    var monkey = createSprite(600,160,10,40);
    monkey.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
  switch(score){
    case 10:player.scale=0.12;
    break;
    case 2:player.scale=0.14;
    break;
    case 3:player.scale=0.16;
    break;
    case 4:player.scale=0.18;
    break;
    default:break;
  }
    
    switch(rand){
        case 1:monkey.addImage(monkey1);
        break;
        case 2:monkey.addImage(monkey2);
        break;
        case 3:monkey.addImage(monkey3);
        break;
        case 4:monkey.addImage(monkey4);
        break;
        case 5:monkey.addImage(monkey5);
        break;
        case 6:monkey.addImage(monkey6);
        break;
        case 7:monkey.addImage(monkey7);
        break;
        case 8:monkey.addImage(monkey8);
        break;
        case 9:monkey.addImage(monkey9);
        break;
        case 10:monkey.addImage(monkey10);
        break;
        default:break;
    }     
    monkey.scale = 0.5;
    monkey.lifetime = 100;
  }
}