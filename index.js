/*jshint esversion: 8 */
var player1 = prompt("Player 1, What is your name?");
var player2 = prompt("Player 2, What is your name?");

document.querySelector("p.Player1").innerHTML = player1;
document.querySelector("p.Player2").innerHTML = player2;

window.addEventListener('load', () => {
  rollTheDice();
  registerSW();
});


function rollTheDice() {
  playSound();
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = (player2 + " WINS! 🚩");
    } else {
      document.querySelector("h1").innerHTML = (player1 + " WINS! 🚩");
    }
  }, 2500);
}

function playSound() {
  var audio = new Audio("sounds/dice.mp3");
  audio.play();
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}