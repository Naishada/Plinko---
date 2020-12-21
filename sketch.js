const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 200;
function setup() {
  createCanvas(600,800);
  engine = Engine.create()
  world = engine.world;

  for(var k = 20;k <width; k = k  + 80){
    divisions.push(new Division(k, height - divisionHeight/2,10, divisionHeight));
  }

  for(var j = 30 ; j < width ; j = j + 50){
    plinkos.push(new Plinko(j,150));
  }
  for(var j = 30 ; j < width ; j = j + 50){
    plinkos.push(new Plinko(j,250));
  }

  for(var j = 30 ; j < width ; j = j + 50){
    plinkos.push(new Plinko(j,350));
  }

  for(var j = 30 ; j < width ; j = j + 50){
    plinkos.push(new Plinko(j,450));
  }  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  ground1 = new Ground(300,790,600,10);

  Engine.run(engine);
 
}

function draw() {
  background("pink");  
  drawSprites();
  console.log(frameCount);
  ground1.display();
  for( var i = 0 ; i <divisions.length ; i++){
    divisions[i].display();
  }
  for (var j = 0 ; j<width;j++){
    plinkos[j].display();
  }
  for (var j = 0 ; j<width;j++){
    plinkos[j].display();
  }
  for (var j = 0 ; j<width;j++){
    plinkos[j].display();
  }

  for(var j = 0 ; j < particles.lenght ; j++){
    particals[j].display();
  }

}