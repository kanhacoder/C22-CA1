class CannonBall {
    constructor(x, y, r) 
    {
      this.r = r;
      var options = {isStatic:true}
      this.body = Bodies.circle(x,y,r,options);
      this.cannonballImg = loadImage("assets/cannonball.png");
      this.trajectory = []
      World.add(world,this.body);
    }
   display()
   { 
     var pos = this.body.position;
     push();
     imageMode(CENTER);
     image(this.cannonballImg,pos.x,pos.y,this.r,this.r)
     pop();
     if(this.body.velocity.x > 0 && this.body.position.x > 10)
     {
       var position = [pos.x,pos.y];
       this.trajectory.push(position);

     }
     for(i=0;i < this.trajectory.length;i++)
     {
       image(this.cannonballImg,this.trajectory[i][0],this.trajectory[i][1],5,5)
     }
   }
   shoot() 
   {
    var velocity = p5.Vector.fromAngle(cannon.angle); 
    velocity.mult(20); 
    Matter.Body.setStatic(this.body, false); 
    Matter.Body.setVelocity(this.body, { x: velocity.x , y: velocity.y });
 }
}
// Cannon Ball should be released at a angle which cannon is pointing to. So we need to capture the angle where the cannon is pointing to.
// For that we have a function in p5 library which helps us to capture the angle.
// Now it has to be multiplied by some constant to give some speed because the initial value captured from the vector will be very low.
// Cannon Ball was static body inside the cannon so now it has to move, so we are changing the static property of the body to false.
// Now we are giving same velocity which we have stored in a variable "velocity" to move it.