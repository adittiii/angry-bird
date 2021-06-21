class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.6,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      Matter.Body.setAngle(this.body,angle);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle;
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  