class Dustbin{
    constructor (x,y){
        var options = {isStatic:true}
        this.base = Bodies.rectangle(x,y, 200, 20 ,options);
        World.add(world,this.base);
   
        this.left = Bodies.rectangle(x-100,y-25, 20, 50 ,options);
        World.add(world,this.left);
   
        this.right = Bodies.rectangle(x+100,y-25, 20, 50 ,options);
        World.add(world,this.right);
        this.image = loadImage("dustbingreen.png")
    }
    display(){
     var posb = this.base.position;
     var posr = this.right.position;
     var posl = this.left.position;

        imageMode (CENTER)
        image(this.image,posb.x,posb.y-40,200,100);
    }
        

}
