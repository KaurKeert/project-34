class Block{
    constructor(x,y,width,height){
        var options ={ 
            'density':3,
              
            isStatic: false
        }
        
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
      }
      show()
      {
          rectMode(CENTER);
          rect(this.body.position.x, this.body.position.y,this.width, this.height);
           fill("red")
           stroke("black")
           strokeWeight(3)
      }


}