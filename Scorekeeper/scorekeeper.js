var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numOfGames = document.querySelector("#numOfGames");
var playingTo = document.querySelector("#playingTo");
var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// score logic
p1button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    if (p1Score == winningScore) {
      p1Display.classList.add("winner");
      alert("Player One wins!");
      gameOver = true;
    }
  }
});

p2button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score == winningScore) {
      p2Display.classList.add("winner");
      alert("Player Two wins!");
      gameOver = true;
    }
  }
});

// number of games to play to
numOfGames.addEventListener("change", function() {
  if (this.value > 0) {
    playingTo.textContent = this.value;
    winningScore = this.value;
  } else {
    alert("Please choose a number above 0. Games to win remains 5");
  }
  reset();
});

// reset logic
resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
