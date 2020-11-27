class Stone {
  constructor(x, y, radius) {
    var options = {
      restitution: 0.04,
      friction: 1,
      density: 0.5,
    };

    this.r = radius;

    this.body = Bodies.circle(x, y, this.r / 2, options);
    this.image = loadImage("Images/stone.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
    // rectMode(CENTER);
    // rect(pos.x,pos.y,this.w,this.h);
  }
}
