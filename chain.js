class chain
{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09
        }
        this.chain = Constraint.create(options);
        this.pointB=pointB;
        
        World.add(world,this.chain);
    }
   fly()
   {
       
       this.chain.bodyA=null;
       
   }
   display()
   {
       if(this.chain.bodyA)
       {
           var pointA=this.chain.bodyA.position;
           var pointB=this.pointB;
           strokeWeight(4)
           stroke("red");
           line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
   }
}
