const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var myEngine, myWorld

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var ball, ground, chain;

function setup(){
    createCanvas(1600,800)
    myEngine=Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(800, 790, 1600, 20);

    b1=new Blueblock(900, 700, 75, 100);
    b2=new Redblock(975, 700, 75, 100);
    b3=new Greenblock(1050, 700, 75, 100);
    b4=new Blueblock(1125, 700, 75, 100);
    b5=new Greenblock(1200, 700, 75, 100);
    b6=new Redblock(1275, 700, 75, 100);
    b7=new Blueblock(1350, 700, 75, 100);
    b8=new Redblock(975, 600, 75, 100);
    b9=new Greenblock(1050, 600, 75, 100);
    b10=new Blueblock(1125, 600, 75, 100);
    b11=new Greenblock(1200, 600, 75, 100);
    b12=new Redblock(1275, 600, 75, 100);
    b13=new Greenblock(1050, 500, 75, 100);
    b14=new Blueblock(1125, 500, 75, 100);
    b15=new Greenblock(1200, 500, 75, 100);
    b16=new Blueblock(1125, 400, 75, 100);

    ball=new Ball(300, 500, 50);

    chain= new Slingshot(ball.body,{x:300, y:400})
}

function draw(){
    background(0)
    Engine.update(myEngine);
    show();
}
function show(){
    ground.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    ball.display();

    chain.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
    chain.fly();
  }
  
  function keyPressed(){
    if(keyCode===32){
    chain.attach(ball.body);
    }
  }
  