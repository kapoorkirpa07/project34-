const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite =  Matter.Composite;
var engine, world;
var grounds;
var rope;
var ball;
var link;
var cutbtn;
var lvlGroup;

var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19,box20;
var box21;


function preload(){

}

function setup() {
  createCanvas(900,410);

  engine = Engine.create();
  world = engine.world;
  score = 0


  rope = new Rope(5,{x:100,y:100});
  grounds = new Ground(450,400,900,10);

  var options = {
    density:0.001
  }
  ball = Bodies.circle(200,200,20,options)
  Matter.Composite.add(rope.body,ball)
  link = new Link(rope,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //level 1
  box1 = createSprite(300,380,40,30);
  box1.shapeColor="green"
 // box1.debug=true

  
  
  box2 = createSprite(340,380,40,30);
  box2.shapeColor="green"
  box3 =  createSprite(380,380,40,30);
  box4 = createSprite (420,380,40,30);
  box5 = createSprite(460,380,40,30);
  box6 = createSprite(500,380,40,30);
  box3.shapeColor="green"
  box4.shapeColor="green"
  box5.shapeColor="green"
  box6.shapeColor="green"


  //level 2
  box7 = createSprite (320,350,40,30);
  box8 = createSprite (360,350,40,30);
  box9 = createSprite (400,350,40,30);
  box10 = createSprite (440,350,40,30);
  box11 = createSprite (480,350,40,30);
 /* lvlGroup.add(box7)
  lvlGroup.add(box8)
  lvlGroup.add(box9)
  lvlGroup.add(box10)
  lvlGroup.add(box11)*/
  box7.shapeColor="yellow"
  box8.shapeColor="yellow"
  box9.shapeColor="yellow"
  box10.shapeColor="yellow"
  box11.shapeColor="yellow"
//level 3
box12 = createSprite (340,320,40,30);
box13 = createSprite(380,320,40,30);
box14 = createSprite(420,320,40,30);
box15 = createSprite(460,320,40,30);
/*lvlGroup.add(box12)
lvlGroup.add(box13)
lvlGroup.add(box14)
lvlGroup.add(box15)*/
box12.shapeColor="red"
box13.shapeColor="red"
box14.shapeColor="red"
box15.shapeColor="red"

//level 4
box16 = createSprite(360,290,40,30);
box17 = createSprite(400,290,40,30);
box18 = createSprite(440,290,40,30);
box16.shapeColor="blue"
box17.shapeColor="blue"
box18.shapeColor="blue"



//level 5
box19 = createSprite(380,260,40,30);
box20 = createSprite(420,260,40,30);
box19.shapeColor="purple"
box20.shapeColor="purple"

//level 6

box21 =createSprite(400,230,40,30);
box21.shapeColor="brown"


cutbtn = createImg("cut_button.png");
cutbtn.position(80,75);
cutbtn.size(50,50);
cutbtn.mouseClicked(drop);
imageMode(CENTER)
}
function draw(){ 

  background("pink");
  Engine.update(engine);
 // drawSprites();
  ellipse(ball.position.x,ball.position.y,20,20);
  grounds.display();
  rope.show();
force()
textSize(20)
fill("black")
text("score:"+score,800,100)


  
  if(collide(ball,box1)==true)
  {
    box1.visible= false
    score= score+5
  }
  if(collide(ball,box2)==true)
  {
    box2.visible= false
    score= score+5
  }
  if(collide(ball,box3)==true)
  {
    box3.visible= false
    score= score+5
  }
  if(collide(ball,box4)==true)
  {
    box4.visible= false
    score= score+5
  }
  if(collide(ball,box5)==true)
  {
    box5.visible= false
    score= score+5
  }
  if(collide(ball,box6)==true)
  {
    box6.visible= false
    score= score+5
  }
  if(collide(ball,box7)==true)
  {
    box7.visible= false
    score= score+5
  }
  if(collide(ball,box8)==true)
  {
    box8.visible= false
    score= score+5
  }
  if(collide(ball,box9)==true)
  {
    box9.visible= false
    score= score+5
  }
  if(collide(ball,box10)==true)
  {
    box10.visible= false
    score= score+5
  }
  if(collide(ball,box11)==true)
  {
    box11.visible= false
    score= score+5
  }
  if(collide(ball,box12)==true)
  {
    box12.visible= false
    score= score+5
  }
  if(collide(ball,box13)==true)
  {
    box13.visible= false
    score= score+5
  }
  if(collide(ball,box14)==true)
  {
    box14.visible= false
    score= score+5
  }
  if(collide(ball,box15)==true)
    {
      b0x15.visible= false
      score= score+5
    }
    if(collide(ball,box16)==true)
    {
      box16.visible= false
      score= score+5
    }
    if(collide(ball,box1)==true)
  {
    box1.visible= false
    score= score+5
  }
  if(collide(ball,box17)==true)
  {
    box17.visible= false
    score= score+5
  }
  if(collide(ball,box18)==true)
  {
    box18.visible= false
    score= score+5
  }
  if(collide(ball,box19)==true)
  {
    box19.visible= false
    score= score+5
  }
  if(collide(ball,box20)==true)
  {
    box20.visible= false
    score= score+5
  }
  if(collide(ball,box21)==true)
  {
    box21.visible= false
    score= score+5
  }
  drawSprites()
}
 


function drop(){
  rope.break()
  link.detach()
  link =  null
}

function force(){
 
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
   
 }


//function collision(){
//  var Collision = Matter.SAT.collides(ball,box1)
 // if(Collision.collided){
  //  ball1.visible = false


function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,ball);
              
               return true; 
            }
            else{
              return false;
            }
         }
}