const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

// using the HTML5 Canvas API to obtain a 2D rendering context (ctx) from a <canvas> element.
const ctx=canvas.getContext("2d"); 

const car=new Car(100,100,30,50);
car.draw(ctx);
