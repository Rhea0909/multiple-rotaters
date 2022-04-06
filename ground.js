class Ground{
    constructor(x,y,w,h){
    var options={
        isStatic:true
    }

        this.w=w
        this.h=h
        this.body= Bodies.rectangle(x,y,this.w,this.h,options)

        World.add(world,this.body)
    }
    display(){

        var pos=this.body.position
        Matter .Body.rotate(this.body,angle)
        push ()
        rectMode(CENTER)
        stroke(255)
        fill (127)
        translate (pos.x,pos.y)
        rotate (angle)

        rect(0,0,this.w,this.h)
        pop ()
        angle=angle+0.1
    }
}