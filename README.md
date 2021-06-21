# angry-bird
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine, world;
var box1;
var box2;
var bird;
var pig1;
var pig2;
var log1;
var box3;
var box4;
var log2;
var box5;
var log3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(720,320,70,70);
    box2=new Box(920,320,70,70);
    box3 = new Box (720,300,60,60);
    box4=new Box(920,300,60,60);
    box5 = new Box (820,280,80,80);
    ground=new GROUND(600,590,1200,20);
    console.log(ground);
    bird=new Bird(250,450);
    pig1=new Pig(820,320);
    pig2=new Pig(820,310);
    log=new Log(820,310,300,PI/2)
    log2=new Log(820,280,300,PI/2);
 log3=new Log(820,10,300,PI/2);

  

    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    bird.display();
    pig1.display();
    log.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    pig2.display();
   log3.display();
   
}
