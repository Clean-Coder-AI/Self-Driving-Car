const canvas=document.getElementById("myCanvas");
canvas.width=200;

// using the HTML5 Canvas API to obtain a 2D rendering context (ctx) from a <canvas> element.
const ctx=canvas.getContext("2d"); 
const car=new Car(100,100,30,50);

animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    // requestAnimationFrame calls the animate method repeatedly many times per second giving illusion of the movement we want
    requestAnimationFrame(animate);
}
