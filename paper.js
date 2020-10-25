class Paper {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{restitution:0.3,density:1.2});
        World.add(world,this.body);
        this.r = r;
        this.image = loadImage("paper.png");

    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);

    }

}