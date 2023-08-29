class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.controls=new Controls();
    }

    update(){
        if(this.controls.forward){
            // the y axis on computer starts from top to bottom
            // So, going forward means decreasing the Y coordinate from top
            this.y-=2; 
        }
        if(this.controls.reverse){
            // similarly, reverse is increasing Y coordinate
            this.y+=2;
        }
        if(this.controls.left){
            this.x-=2;
        }
        if(this.controls.right){
            this.x+=2;
        }
    }


    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            // X and Y coordinate of car is going to be the center, inside the car
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}