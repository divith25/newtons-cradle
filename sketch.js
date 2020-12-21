
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,roof1,chain1,chain2,chain3,chain4,chain5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1=new bob(300,300,50,50)
ball2=new bob(360,300,50,50)
ball3=new bob(420,300,50,50)
ball4=new bob(480,300,50,50)
ball5=new bob(540,300,50,50)

roof1=new roof(400,100,20,700)

chain1 = new rope(ball1.body,{x:400, y:100});
chain2 = new rope(ball2.body,{x:400, y:100});
chain3 = new rope(ball3.body,{x:400, y:100});
chain4 = new rope(ball4.body,{x:400, y:100});
chain5 = new rope(ball5.body,{x:400, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
  roof1.display();
  drawSprites();
 
}

function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
  //  }
}


