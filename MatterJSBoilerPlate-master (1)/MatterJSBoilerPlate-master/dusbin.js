class Dustbin{
    constructor (x,y){
        var options = {isStatic:true}
        this.base = Bodies.rectangle(x,y, 200, 20 ,options);
        World.add(world,this.base);
   
        this.left = Bodies.rectangle(x-100,y-25, 20, 50 ,options);
        World.add(world,this.left);
   
        this.right = Bodies.rectangle(x+100,y-25, 20, 50 ,options);
        World.add(world,this.right);
    }
    display(){
     var posb = this.base.position;
     var posr = this.right.position;
     var posl = this.left.position;

        rectMode (CENTER)
        rect(posb.x,posb.y,200,20);
        rect(posr.x,posr.y,20,50);
        rect(posl.x,posl.y,20,50);
    }
        

}
