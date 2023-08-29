class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            // X and Y coordinate of car is going to be the center, inside the car
            this.x-this.width/2,
            this.y=this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}