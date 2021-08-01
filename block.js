class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution : 0.5,
          friction :1,
          density :1
                     
        }
        this.image = loadImage("block.png");
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          //push();
          rectMode(CENTER);
          rect(pos.x,pos.y,this.width, this.height);
          //pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y,30,40);
           pop();
         }
      }
}
