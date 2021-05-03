const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var ground;
var b1,b2,b3,b4,b5
var b6,b7,b8,b9 
var b10,b11,b12,b13,b14,b15
var sg,mons1;
var chain

function preload(){
  bg= loadImage("images/b.jpg");
}
  
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
 world= engine.world;

mons1=new Monster(800,100,150,150)

ground=new Ground(350,320,700,20)

sg=new Girl(200,300,200,100)

b1=new Block(450,310,50,50)
b2=new Block(500,310,50,50)
b3=new Block(550,310,50,50)
b4=new Block(600,310,50,50)
b5=new Block(650,310,50,50)

b6=new Block(475,270,50,50)
b7=new Block(525,270,50,50)
b8=new Block(575,270,50,50)
b9=new Block(625,270,50,50)

b10=new Block(500,220,50,50)
b11=new Block(550,220,50,50)
b12=new Block(600,220,50,50)

b13=new Block(525,170,50,50)
b14=new Block(575,170,50,50)

b15=new Block(550,120,50,50)

chain=new Chain(sg.body,{x:200,y:200})


}

function draw() {
  background(bg);  
  Engine.update(engine);

  ground.show()

  mons1.show()

  b1.show()
  b2.show()
  b3.show()
  b4.show()
  b5.show()

  b7.show()
  b8.show()
  b9.show()
  b6.show()

  b10.show()
  b11.show()
  b12.show()
 
  b13.show()
  b14.show()

  b15.show()
  
chain.show()

  sg.show()


}

function mouseDragged(){

      Matter.Body.setPosition(sg.body, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
    chain.fly();
    
}
function keyPressed(){
  if(keyCode === 32){
     chain.attach(sg.body);
  }}

  