const question = document.querySelector("#question");
let answer = document.getElementById("answer");
const submitButton = document.querySelector("#submitButton");
const maxStreak = document.querySelector("#maxStreak");
const currentStreak = document.querySelector("#currentStreak");

let firstNum, secondNum;
let currentStreakCount = 0;
let maxStreakCount = 0;

function handleAnswer() {
  // Check if the answer is correct
  if (parseInt(answer.value) === firstNum * secondNum) {
    currentStreakCount++;
    if (currentStreakCount > maxStreakCount) {
      maxStreakCount = currentStreakCount;
    }
    updateStreakDisplay();
    generateQuestion();
  }
  else {
    currentStreakCount = 0; // Reset streak on wrong answer
    updateStreakDisplay();
  }
  answer.value = "";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateQuestion() {
  firstNum = getRandomInt(10);
  secondNum = getRandomInt(98);
  question.textContent = `${firstNum} × ${secondNum}`;
}

function updateStreakDisplay() {
  currentStreak.textContent = `current: ${currentStreakCount}`;
  maxStreak.textContent = `max: ${maxStreakCount}`;
}

// Event listener for Enter key
answer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleAnswer();
  }
});

// Generate the first question and initialize streak display
generateQuestion();
updateStreakDisplay();
