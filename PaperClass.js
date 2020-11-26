class Paper {
   constructor(x,y,radius){
    var options={
        'restitution':0.3,
        'friction': 1.0,
         'density': 1
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
   }
   display(){
       var pos = this.body.position;
       
       push();
     translate(pos.x,pos.y); 
     fill("white");
     stroke("green");
     rect(0,0, this.width, this.height);
     pop();
   }
}