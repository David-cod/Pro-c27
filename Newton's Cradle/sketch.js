
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject1,rope1,rope2,rope3,rope4,rope5,bobpos,bobDiameter;

/*function preload()
{
	
}
*/
function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

	roofObject1=new Roof(width/2,height/4,width/5,30);

	bobDiameter=30;
	bobposX=width/2;
	bobposY=height/4+200;

	bobObject1=new Bob(bobposX-bobDiameter*2,bobposY,bobDiameter);
	bobObject2=new Bob(bobposX-bobDiameter,bobposY,bobDiameter);
	bobObject3=new Bob(bobposX,bobposY,bobDiameter);
	bobObject4=new Bob(bobposX+bobDiameter,bobposY,bobDiameter);
	bobObject5=new Bob(bobposX+bobDiameter*2,bobposY,bobDiameter);

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			witdh:1200,
			height:700,
			wireFrames:false
		}
	});
	
	rope1=new Rope(bobObject1.body,roofObject1.body,-bobDiameter*2,0)
	rope2=new Rope(bobObject2.body,roofObject1.body,-bobDiameter,0)
	rope3=new Rope(bobObject3.body,roofObject1.body,0,0)
	rope4=new Rope(bobObject4.body,roofObject1.body,-bobDiameter,0)
	rope5=new Rope(bobObject5.body,roofObject1.body,-bobDiameter*2,0)

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body.position,{x:-50, y:-50})


	}	

}
function drawLine(constraint){
	var roofOffset=constraint.pointB;
	var roofposX=constraint.bodyB.position.x+roofOffset.x;
	var roofposY=constraint.bodyB.position.y+roofOffset.y;

	line(constraint.bodyA.position.x,constraint.bodyA.position.y,roofposX,roofposY);

}


