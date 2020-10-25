
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , dustbin , ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 20);
	paper = new Paper(100 , 650, 30);
	dustbin = new Dustbin(600, 660);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  ground.display();
  paper.display();
  dustbin.display();
 
}

 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-110});
	 }
 }

