
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world


function preload()
{
	bg=loadImage("camp.jpg")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	engine = Engine.create();
	world = engine.world;


speed=random(55,90);
weight=random(400,1500);

createCanvas(800, 700);
	
  createSprite(400, 200, 50, 50);
	
    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageBody= new RedBox(width/2,210,10,10)
  packageSprite.x=packageBody.body.position.x
  packageSprite.y=packageBody.body.position.y


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	/*packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	var pos = packageBody.position;
	var angle = packageBody.angle;*/
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	

	
	Engine.run(engine);


  

 





}


  



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x=packageBody.body.position.x
  packageSprite.y=packageBody.body.position.y
  drawSprites();
  

}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody.body, false);
  }
}

