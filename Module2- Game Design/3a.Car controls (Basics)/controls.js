class Controls{
    constructor(){
        // setting these false initially which we will change later according to what is pressed on the keyboard
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(event)=>{ //when pressing any key
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
            // see the values on developer tools on pressing
            console.table(this);
        }

        document.onkeyup=(event)=>{ //when releasing any key
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
            // see the values on developer tools on releasing
            console.table(this);
        }
    }
}