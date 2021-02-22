class Rubber{
    constructor(x,y,radius){
        var options={
            density:1.0,
            friction:5,
            restitution:0.3
        }
        this.body=Bodies.circle(x,y,radius,options)
        
    }
    display(){
    var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("blue");
        ellipseMode(RADIUS);
        circle(0,0,40);
        pop();
}
}