
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var fan1
var fan2
var fan3
var fan4

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

fan1= new Ground(50,370,80,30)
fan2= new Ground(150,370,80,30)
fan3= new Ground(250,370,80,30)
fan4= new Ground(350,370,80,30)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 ground=Bodies.rectangle(200,390,400,20,ground_options)
World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rect (ground.position.x,ground.position.y,400,20)
 

 

  ellipse(ball.position.x,ball.position.y,20);
 
 fan1.display()
fan2.display()
  fan3.display()
  fan4.display()




//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  