"use strict"

let number = prompt ("Pick a number from zero to three")

let missed = "You missed the bird!";

let hit = "You hit the bird";

let zeroToThree = "Pick a number from zero to three"

let onlyNumbers = "Only numbers please!"

let grid = ("_|_|_\n _|_|_\n _|_|_\n")
console.log(grid)

let birdsPath = Math.floor(Math.random()*10)

let birdwas = " Bird was at " + birdsPath

for (let i = 1; i < 4; i++) { 
if (number==birdsPath) {
    alert(hit);
    break
} else {
    alert(missed + birdwas + "!"); 
} 
}

// math.floor(math.random()*4)
// (firstInput === secondInput) 

