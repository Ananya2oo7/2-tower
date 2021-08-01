class Polygon{
    constructor(x, y,r) {

        var options = {
            restitution:0.5,
            friction :1,
            density:1

                     
        }
        this.body = Bodies.circle(x, y,r, options);
        this.image = loadImage("polygon.png");
        this.r = r;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
      }
}
