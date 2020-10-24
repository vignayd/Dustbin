class Paper {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{restitution:0.3,density:1.2});
        World.add(world,this.body);
        this.r = r;

    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);

    }

}