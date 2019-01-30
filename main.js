"use strict"

let missed = "You missed the bird";

let hit = "You hit the bird";

let picknumber = prompt ("Pick a number between 0 and 10")

if (picknumber == "0") {
    alert(hit);
    document.getElementById("game").style.backgroundImage="url('img/home.gif')";
} else if (picknumber=="1") {
    alert(missed);
    document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
} else if (picknumber=="2") {
    alert(hit);
    document.getElementById("game").style.backgroundImage="url('img/home.gif')";
} else if (picknumber=="3") {
    alert(missed);
    document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
} else if (picknumber=="4") {
    alert(hit);
    document.getElementById("game").style.backgroundImage="url('img/home.gif')";
// } else if (picknumber < 8) {
//     alert(missed);
//     document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
// } else if (picknumber < 11) {
//     alert(hit); 
//     document.getElementById("game").style.backgroundImage="url('img/home.gif')";
// } else if (picknumber > 10) {
//     alert(missed);
//     document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
// } else (alert ("Enter a number, please")) 
//     document.getElementById("game").style.backgroundImage="url('img/dead.png')";

} else if (picknumber == "5") {
    alert(missed); 
    document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
} else if (picknumber == "6") {
    alert(hit)
}
