"use strict"


let game = document.getElementById("game");
document.addEventListener("mousemove", getMouse); 


game.style.position = "absolute"; //css		
let gamepos = {x:0, y:0};

setInterval(followMouse, 50);

let mouse = {x:0, y:0}; //mouse.x, mouse.y

let dir = "right";
function getMouse(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
//Checking directional change
if(mouse.x > gamepos.x){
  dir = "right";
} else {
  dir = "left";
}
}

function followMouse(){
    //1. find distance X , distance Y
    let distX = mouse.x - gamepos.x;
    let distY = mouse.y - gamepos.y;
    //Easing motion
//Progressive reduction of distance 
    gamepos.x += distX/5;
    gamepos.y += distY/2;
    
    game.style.left = gamepos.x + "px";
    game.style.top = gamepos.y + "px";


//Apply css class 
if (dir == "right"){
  game.setAttribute("class", "right");
} else {
  game.setAttribute("class", "left");        
}
    
}