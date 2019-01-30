"use strict"

let missed = "You missed the bird!";

let hit = "You hit the bird";

let zeroToNine = "Pick a number from zero to nine"

let onlyNumbers = "Only numbers please!"

let grid = ("_|_|_\n _|_|_\n _|_|_\n")
console.log(grid)


for (let i = 3; i > 0; i--) { 
    let number = prompt ("Pick a number from zero to nine")
    let birdsPath = Math.floor(Math.random()*10)
    let birdwas = " Bird was at " + birdsPath
    let attempts = i 
    let remainding = "You have " + (attempts-1) + " attempts remainding!"

if (number==birdsPath) {
    alert(hit);
    document.getElementById("game").style.backgroundImage="url('img/up.gif'";
    break
} else {
    alert(missed + birdwas + "!"); 
    alert (remainding)
    document.getElementById("game").style.backgroundImage="url('img/down.gif'";
} 
}


display()
function display() {
    document.getElementById("game").style.backgroundRepeat="no-repeat";
}


// math.floor(math.random()*4)
// (firstInput === secondInput) 

