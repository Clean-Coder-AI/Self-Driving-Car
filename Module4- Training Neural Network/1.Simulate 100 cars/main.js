const carCanvas=document.getElementById("carCanvas");
carCanvas.width=200;
const networkCanvas=document.getElementById("networkCanvas");
networkCanvas.width=300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road=new Road(carCanvas.width/2,carCanvas.width*0.9);

// generating 100 cars for picking the best one out of them
const N=100;
const cars=gernerateCars(N);

const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2)
];

animate();

// create an empty array of cars and pushing them in a loop with "AI" brain
function gernerateCars(N){
    const cars=[];
    for(let i=1;i<N;i++){
        cars.push(new Car(road.getLaneCenter(1),100,30,50,"AI"));
    }
    return cars;
}

function animate(time){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }
    for(let i=0;i<cars.length;i++){   
        cars[i].update(road.borders,traffic);
    }

    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;

    carCtx.save();
    carCtx.translate(0,-cars[0].y+carCanvas.height*0.7); //take the first car in the array

    road.draw(carCtx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(carCtx,"red");
    }
    // better to draw rest of the 99 cars semi-transparent for visual ease.
    carCtx.globalAlpha=0.2;
    for(let i=0;i<cars.length;i++){   
        cars[i].draw(carCtx,"blue");
    }

    carCtx.globalAlpha=1;
    cars[0].draw(carCtx,"blue",true); // lets add a parameter to draw the sensor of only the first car.
    carCtx.restore();

    networkCtx.lineDashOffset=-time/50;
    Visualizer.drawNetwork(networkCtx,cars[0].brain); //visualizing brain of the first car in the array
    requestAnimationFrame(animate);
}