const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/3DitpF.jpg");
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand = new Ground(700,300,450,20)
    ground= new Ground(width/2, height,width,20);
   
    box0 = new Box(590,260,60,60);
    box1 = new Box(620,260,60,60);
    box2 = new Box(670,260,60,60);
    box4 = new Box(700,260,60,60);
    box3 = new Box(740,260,60,60);
    box5 = new Box(770,260,60,60);
    box6 = new Box(800,260,60,60);

    //second row
    box7 = new Box(620,230,60,60);
    box8 = new Box(670,230,60,60);
    box9 = new Box(700,230,60,60);
    box10 = new Box(740,230,60,60);
    box11 = new Box(770,230,60,60);

    //third row
    box12 = new Box(670,200,60,60);
    box13 = new Box(700,200,60,60);
    box14= new Box(740,200,60,60);
    
    //top
    box15 = new Box(700,170,60,60);

    polygon= Bodies.circle(50,200,6,20, {density: 1});
    World.add(world,polygon);
   
    slingshot = new Slingshot(this.polygon,{x: 200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine)
    strokeWeight(2);

  
    ground.display();

    box0.display()
    box1.display()
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    stand.display()
    

    slingshot.display();

    ellipseMode(CENTER)
    ellipse(polygon.position.x,polygon.position.y,50)
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
