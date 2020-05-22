var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80,80,80);

  speed = random(0,300);
  weight = random(400,1500);
}  

function draw() {
  background(255,255,255);
  
  car.velocityX = speed;

  if(car.isTouching(wall)){
     car.velocityX = 0;
     if(speed < 100){
      car.shapeColor = "green";
   }

   if(speed > 100){
    car.shapeColor = "yellow";
 }

 if(speed > 180){
  car.shapeColor = "red";
}
  }

  

  
  drawSprites();
}