class Dustbin {
  constructor(x,y,width,height){

      var options={
          'friction': 1.0,
           'density': 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    //var angle = this.body.angle;
    rectMode(CENTER);
    push();
     translate(pos.x,pos.y); 
     //angleMode(RADIANS);
    //rotate(angle);
    fill("white");
    stroke("green");
    rect(0,0, this.width, this.height);
    pop();
  }
}