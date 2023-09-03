const carCanvas=document.getElementById("carCanvas");
carCanvas.width=200;
const networkCanvas=document.getElementById("networkCanvas");
networkCanvas.width=300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road=new Road(carCanvas.width/2,carCanvas.width*0.9);


const N=100;
const cars=gernerateCars(N);

// let initially bestCar be the first car, which will update later
let bestCar=cars[0];
//if there is a "bestBrain" saved in local storage, use that.
if(localStorage.getItem("bestBrain")){
    for (let i=0;i<cars.length;i++){
        cars[i].brain=JSON.parse(localStorage.getItem("bestBrain"));
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0.1)  //for 99 cars besides bestCar, mutate by an amount of 10% 
        }
    }
}

const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(0),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2),
    new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2),
];

animate();

//to save the brain of the bestCar
function save(){
    localStorage.setItem("bestBrain", JSON.stringify(bestCar.brain));
}
//to destroy the brain 
function discard(){
    localStorage.removeItem("bestBrain");

}

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

    bestCar=cars.find(
        //the Math.min method doesnt work with arrays, it works with multiple values. 
        // So '...' is used to spread the arrays
        c=>c.y==Math.min(
            ...cars.map(c=>c.y) //creating a new array with only the Y-axis value of cars
    ));

    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;

    carCtx.save();
    carCtx.translate(0,-bestCar.y+carCanvas.height*0.7); 

    road.draw(carCtx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(carCtx,"red");
    }
    
    carCtx.globalAlpha=0.2;
    for(let i=0;i<cars.length;i++){   
        cars[i].draw(carCtx,"blue");
    }

    carCtx.globalAlpha=1;
    bestCar.draw(carCtx,"blue",true); 
    carCtx.restore();

    networkCtx.lineDashOffset=-time/50;
    Visualizer.drawNetwork(networkCtx,bestCar.brain); 
    requestAnimationFrame(animate);
}