const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var balloptions = {
        restitution : 0.8,
        density : 1,
        friction : 0.8
    }
    ball = Bodies.circle(200,50,30,balloptions);
    World.add(world,ball);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,10,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,30,30);
}