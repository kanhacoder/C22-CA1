class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    console.log(this.angle);
    this.cannonImg = loadImage("assets/canon.png");
    this.cannonbaseImg = loadImage("assets/cannonBase.png");
  }
 display()
 {
   console.log(this.angle);
   if(keyIsDown(RIGHT_ARROW) && this.angle < 0.35) 
   {
    this.angle += 0.02;
   }
   if(keyIsDown(LEFT_ARROW) && this.angle > -10.38)
   {
    this.angle -= 0.02;
   }
   push();
   translate(this.x,this.y);
   rotate(this.angle)
   imageMode(CENTER)
   image(this.cannonImg,0,0,this.width,this.height);
   pop();
   image(this.cannonbaseImg,70,25,200,200);
 }
 
}
