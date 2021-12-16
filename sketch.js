const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, backgroundImg,towerImg,cannonImg,cannonbaseImg,cannonball,cannonballimg,angle;
var balls = []
function preload()
{
  backgroundImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
}

function setup()
{
  createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world;
  
  var options = {isStatic:true}
  ground = Bodies.rectangle(0,height-10,width*2,10,options);
  World.add(world,ground)
  tower = Bodies.rectangle(80,200,160,310,options);
  World.add(world,tower);

  angleMode(RADIANS)
  angle = -PI/4
  console.log(angle)
  cannon = new Cannon(180,110,130,100,20,angle);
}

function draw()
{
  background("yellow");
  image(backgroundImg,0,0,1200,600);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,2400,10);
  // rect(tower.position.x,tower.position.y,160,310);
  image(towerImg,tower.position.x,tower.position.y,160,310);

  cannon.display();
  // cannonball.display();
  for(i=0;i<balls.length;i++)
  {
    showCannonBalls(balls[i])
  }

}

function keyReleased()
{
  if (keyCode === DOWN_ARROW)
  {
    balls[balls.length-1].shoot()
  }
}

function keyPressed()
{
  if(keyCode === DOWN_ARROW)
 {
  cannonball = new CannonBall(cannon.x,cannon.y,30);
  balls.push(cannonball);
  cannonball.trajectory = []; 
  Matter.Body.setAngle(cannonball.body, cannon.angle);
 }
}

function showCannonBalls(cannonBall)
{
  if(cannonBall)
  {
    cannonBall.display();
  }
}
























// var canvas, angle, tower, ground, cannon;

// function preload() {
//   backgroundImg = loadImage("./assets/background.gif");
//   towerImage = loadImage("./assets/tower.png");
// }

// function setup() {

//   canvas = createCanvas(1200, 600);
//   engine = Engine.create();
//   world = engine.world;
  
//   var options = {
//     isStatic: true
//   }

//   ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
//   World.add(world, ground);

//   tower = Bodies.rectangle(160, 350, 160, 310, options);
//   World.add(world, tower);

// }

// function draw() {
//   image(backgroundImg,0,0,1200,600)
//   Engine.update(engine);

  
//   rect(ground.position.x, ground.position.y, width * 2, 1);
  

//   push();
//   imageMode(CENTER);
//   image(towerImage,tower.position.x, tower.position.y, 160, 310);
//   pop();  
// }
