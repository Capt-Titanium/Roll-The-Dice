var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
  player1 = prompt("Player 1, What is your name?");
  player2 = prompt("Player 2, What is your name?");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}


function rollTheDice() {
  playSound();
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "assets/images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "assets/images/dice" + randomNumber2 + ".png");

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
  var audio = new Audio("assets/audio/dice.mp3");
  audio.play();
}