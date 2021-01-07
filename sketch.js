const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

}

function setup(){
    var canvas = createCanvas(600,300);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,300,600,50)
    box1 = new Box(300,280,30,30)
    box2 = new Box(310,280,30,30)
    box3 = new Box(350,290,30,30)
    box4 = new Box(380,286,30,30)
    box5 = new Box(410,285,30,30)
    box6 = new Box(440,285,30,30)
    box7 = new Box(470,285,30,30)
    box8 = new Box(305,243,30,30)
    box9 = new Box(335,243,30,30)
    box10 = new Box(365,243,30,30)
    box11 = new Box(395,243,30,30)
    box12 = new Box(425,243,30,30)
    box13 = new Box(455,243,30,30)
    box14 = new Box(320,212,30,30)
    box15 = new Box(350,212,30,30)
    box16 = new Box(380,212,30,30)
    box17 = new Box(410,212,30,30)
    box18 = new Box(440,212,30,30)
    box19 = new Box(350,180,50,30)
    box20 = new Box(400,180,50,30)
    box21 = new Box(374,150,50,30)

    polygon = new Polygon(50,200,20)
   


}


function draw(){
    background("aqua");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    polygon.display();
}
