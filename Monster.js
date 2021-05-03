class Monster{ 
  constructor(x,y,width,height){
    var options ={
       isStatic: true,
      restitution:0.5,
    friction:1.0
    }
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
   
    this.width = width;
    this.height = height;
    this. image=loadImage("images/monster.jpg")

    World.add(world,this.body);
  }
  show()
  {
    push()
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
      pop()
  }


}