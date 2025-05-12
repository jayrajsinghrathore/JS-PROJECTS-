const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const restartButton = document.querySelector("#restart");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("emoji");
  });

  let randomSqaure = squares[Math.floor(Math.random() * 9) + 1];
  randomSqaure.classList.add("emoji");
  hitPosition = randomSqaure.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveEmoji() {
  timerId = setInterval(randomSquare, 500);
}

moveEmoji();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Game Over! Your final Score Is ${result}`);
  }
}

function startGame() {
    result = 0;
    score.textContent = result;
    currentTime = 60;
    timeLeft.textContent = currentTime;
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    moveEmoji();
    countDownTimerId = setInterval(countDown, 1000);
  }

  restartButton.addEventListener("click", startGame);


  startGame();

