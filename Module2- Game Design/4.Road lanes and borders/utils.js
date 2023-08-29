//if t is 0, it returns A
//if t is 1, it returns B
//if t is between 1 and 0,say 0.5, it is going to move half (0.5) away from A.
function lerp(A,B,t){
    return A+(B-A)*t;
}

