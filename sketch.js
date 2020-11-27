const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy;
var rope;
var mango1, mango2, mango3, mango4, mango5;
var boyImage;
var treeImage;
function preload() {
  boyImage = loadImage("Images/boy.png");
  treeImage = loadImage("Images/tree.png");
}

function setup() {
  createCanvas(1300, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  mango1 = new Mango(1100, 200, 50);
  mango2 = new Mango(1170, 230, 50);
  mango3 = new Mango(1010, 240, 50);
  mango4 = new Mango(1000, 170, 50);
  mango5 = new Mango(1000, 330, 50);

  ground = new Ground(650, 600, 1300, 20);
  stone = new Stone(240, 420, 100);

  rope = new Rope(stone.body, { x: 240, y: 420 });
}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  image(boyImage, 200, 340, 200, 300);
  imageMode(CENTER);
  image(treeImage, 1050, 350, 500, 500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  rope.display();
  stone.display();
  text(mouseX + " ," + mouseY, mouseX, mouseY);

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  rope.fly();
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );

  if (distance <= lmango.r + lstone.r) {
    console.log("HI");
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed(){
  if (keyCode === 32 && stone.body.velocity.x<1){ 
      
      rope.attach(stone.body);

  }
}

