class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      if(this.body.speed<7){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightGreen");
        rect(0,0, this.width, this.height);
        pop();
      } else {
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-50;
        tint(255,this.visiblity);
        pop();
      }
    }
    score(){
     if(this.visiblity<0 && this.visiblity>=-1000){
     score=score+1;
  }
}

  }; 