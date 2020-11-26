var car, wall;
var speed,weight;
var deformation

function setup() {
  createCanvas(800,400);
 
 wall=createSprite(750,200,30,150);
 car=createSprite(50, 200, 20, 20);
speed=Math.round(random(25,50))
weight=Math.round(random(2000,3000));
wall.shapeColor="blue"
car.depth=car.depth+1;
wall.depth=car.depth+1;
}

function draw() {
  background(0);
  car.debug=false;
  wall.debug=false;

  

  car.velocityX=speed;
  car.weight=weight;
  if (wall.x-car.x<=car.width/2+wall.width/2)  {
    car.velocityX=0
     deformation=(0.5*weight*speed*speed)/22509
     if (deformation>180){
       car.shapeColor="red"
     }
     if (deformation<180 && deformation>80){
       car.shapeColor="yellow"
     }
     if (deformation<80){
       car.shapeColor="green"
     }

  }
  drawSprites();
}