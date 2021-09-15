var iss, spacecraft,spc,spcimg;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  spcImg = loadImage("spacecraft.png")
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  spacecraft = createSprite(width/2,height-150);
  spacecraft.addImage(scimg1);
  spacecraft.scale = 0.3;
  
  iss = createSprite(width/2,height-400);
  iss.addImage(issimg);
  iss.scale = 0.5;

  spc = createSprite(width/2,height-750);
  spc.addImage(spcImg);
  spc.scale = 0.2;


}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg1);
  if(!hasDocked){

    // spacecraft = spacecraftx + random(-1,1);
    // spacecraft.x = spacecraft.x + Random(-1,1);
    // spacecraft.x = spacecraft.x + randomNumbers(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
    
  }
  if(keyDown("w")){
    spc.y = spc.y -2;
    
  }
  if(keyDown("a")){
    spc.x = spc.x-1;
    
  }
  if(keyDown("d")){
    spc.x = spc.x+1;
    
  }
  if(keyDown("s")){
    spc.y = spc.y+2;
    
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

  // if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);
  // }

   //if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
     //hasDocked = true;
     //textSize(25);
     //fill("white")
    // text("Docking Successful!", 200, 300);
  // }

  // if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking UnSuccessful!", 200, 300);
  // }

   if(spacecraft.y <= (iss.y+215) && spacecraft.x <= (iss.x-50) && spc.y <= (iss.y+100) && spc.x <= (iss.x-90)){
     hasDocked = true;
    textSize(25);
    fill("yellow")
    text("Docking Successful!", 200, 150);
    
  }

  drawSprites();
}

