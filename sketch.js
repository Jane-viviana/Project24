
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin,dustbin2,dustbin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(650,650,100,20);
	dustbin2 = new Dustbin(665,650,20,100);
	dustbin3 = new Dustbin(645,650,20,100);
  ground = new Ground(width/2,height-35,800,15);
  paper = new Paper(200,630,5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  //keyPressed();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  drawSprites();
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
 }


