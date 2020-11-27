class Mango {
  constructor(x, y, radius) {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
    };

    this.r = radius;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("Images/mango.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
