class Hammer {
    constructor(x,y,width,height){
      var options = {
          'restitution':0.5,
          'density':2,
          'friction':1.0
      }  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("orange");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }  
}

    

