const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,ground;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
}
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  ground = new Ground(600,height,1200,20);

  porco1= new Pig(810,350);
  tronco1= new Log(810,260,300,PI/2);


  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  porco2= new Pig(810,220);
  tronco2= new Log(810,180,300,PI/2);

  box5 = new Box(820,160,70,70);
  tronco3= new Log(760,120,150,PI/7);
  tronco4= new Log(870,120,150,-PI/6);

  bird = new Bird(100,100);
}

function draw(){
  background(backgroundImg);

  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  porco1.display();
  tronco1.display();
  box3.display();
  box4.display();
  porco2.display();
  tronco2.display();
  box5.display();
  tronco3.display();
  tronco4.display();
  bird.display();
}