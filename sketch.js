var alien;

function preload(){
    alienImg=loadImage("images/Alien1.png.png")
}

function setup(){
   createCanvas(800,800)
    
   for(var r1=50; r1<800; r1= r1+50){
       alien=createSprite(r1,50,20,20)
       alienImg.addImage(alienImg)
   }
}

function draw(){
   background(0) 
   
   drawSprites();
}   

