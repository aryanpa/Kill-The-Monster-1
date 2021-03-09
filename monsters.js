class Monster{
    constructor(x,y,r){
     var options = {
         isStatic: false,
         density: 1,
         frictionAir: 0.005    
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        this.image1 = loadImage("Monster-01.png");

        World.add(world,this.body);

    }

    display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image1,0,0,this.r+40,this.r+40);
    pop();

    }

}