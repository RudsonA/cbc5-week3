"use strict"

let missed = "You missed the bird";

let hit = "You hit the bird";

let game = prompt ("Do you want to shoot the birds?")

if (game == "yes") {
    alert(hit);
    document.getElementById("game").style.backgroundImage="url('img/home.gif')";
} else {
    alert(missed);
    document.getElementById("game").style.backgroundImage="url('img/flyaway.gif')";
}


