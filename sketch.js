
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;
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
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  var rock_option={
    restitution:0.85
  
  }

  rock=Bodies.circle(250,10,20,rock_option)
  World.add(world,rock)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
  wall=Bodies.rectangle(300,200,200,20,ground_options)
  World.add(world,wall)
}


function draw() 
{
  background(51);
  Engine.update(engine);
fill("red")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(rock.position.x,rock.position.y,20)
 rect(wall.position.x,wall.position.y,200,20);
}

