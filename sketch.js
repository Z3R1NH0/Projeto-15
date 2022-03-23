var flor,florImg;
var boy,boyImg;
var cash,cashImg;
var diamonds,diamondsImg;
var jewelry,jewelryImg;
var swords,wordImg;
var cashG,diamondsG,jewelryG,swordGroup;

var score = 0;

//Estados do Jogo
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  florImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("fimdeJogo.png");
}

function setup(){
  
  createCanvas(400,600);
// Movendo fundo
flor=createSprite(200,200);
flor.addImage(florImg);
flor.velocityY = 4;


//criando menino correndo
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar o fundo
  if(flor.y > 400 ){
    flor.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      score=score+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      score=score+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();
      
      score= score + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {

        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
       

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        

        cashG.destroyEach();
        diamondsG.destroyEach();
        jewelryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jewelryG.destroyEach();
        swordGroup.destroyEach();
        
       
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Dinheiro 💰: "+ score + "R$💸",10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
