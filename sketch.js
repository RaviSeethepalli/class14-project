var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
function preload(){
  
          backgroundImage = loadImage("background0.png");
          arrowImage = loadImage("arrow0.png");
          bowImage = loadImage("bow0.png");
          red_balloonImage = loadImage("red_balloon0.png");
          blueImage=loadImage("blue_balloon0.png")
          pImage=loadImage("pink_balloon0.png")
          gImage=loadImage("green_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   redb1 = new Group()

 pinkb1 = new Group()

  blueb1 = new Group()

 greenb1 = new Group()

 arrowattack = new Group()

}

function draw() {
 background(0);
 
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_balloon == 1) {
      redBalloon();
      
    }else if(select_balloon==2){
   
      pinkBalloon()
    }else if(select_balloon==3){
  
      blueBalloon()
    }else  {

      greenBalloon()
    
    }
  }
 


  if(redb1.isTouching(arrowattack)){
    redb1.destroyEach()
    arrowattack.destroyEach()
    score=score+1
   }  
   if(blueb1.isTouching(arrowattack)){
    blueb1.destroyEach()
    arrowattack.destroyEach()
    score=score+2
   }  
   if(greenb1.isTouching(arrowattack)){
    greenb1.destroyEach()
    arrowattack.destroyEach()
    score=score+3
   }  
   if(pinkb1.isTouching(arrowattack)){
    pinkb1.destroyEach()
    arrowattack.destroyEach()
    score=score+5
   }  
  drawSprites();

  text("SCORE:"+score,300,50);
 textSize(50)

 
}


// Creating  arrows for bow
 function createArrow() {
      var arrow= createSprite(100, 100, 60, 10);
      arrow.addImage(arrowImage);
      arrow.x = 360;
      arrow.y=bow.y;
      arrow.velocityX = -5;
      arrow.lifetime = 100;
      arrow.scale = 0.3;
      arrowattack.add(arrow)
  
}


function redBalloon() {
          var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
          red.addImage(red_balloonImage);
          red.velocityX = 5;
          red.lifetime = 100;
          red.scale = 0.1;
          redb1.add(red)

}

function blueBalloon() {
  //write code for spwaning blue balloons
        var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
        blue.addImage(blueImage);
        blue.velocityX=5
        blue.lifetime = 100;
        blue.scale=0.1
        blueb1.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
        var green = createSprite(0,Math.round(random(30, 370)), 10, 10);
        green.addImage(gImage);
        green.velocityX=5
        green.lifetime = 100;
        green.scale=0.1
        greenb1.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
      var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
      pink.addImage(pImage);
      pink.velocityX=5
      pink.lifetime = 100;
      pink.scale=1
      pinkb1.add(pink)
}
