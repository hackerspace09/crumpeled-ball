
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()

{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper();
	ground = new Ground(1000,680,2000,20)
	binBase = new Ground(1600,660,300,15)
	binLeft = new Ground(1457,552,15,200)
	binRight = new Ground(1742,552,15,200)

	//Create the Bodies Here.
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 2000, 
			height: 700, 
			showAngleIndicator: true 
		} 
	}); 
	
	Render.run(render);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  ground.display()
  binBase.display()
  binLeft.display()
  binRight.display()
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-85})
	}
}

