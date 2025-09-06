let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevguess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid Number');
  } else if (guess < 1) {
    alert('Please Enter Number Greater than 1');
  } else if (guess > 100) {
    alert('Please Enter Number Smaller than 100');
  } else {
    prevguess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random No is ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`CONGRATS !!! You Guessed Correct Number`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Nope You Need To Go High `);
  } else if (guess > random) {
    displayMessage(`Nope You Need To Go Low `);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesses.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    prevguess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guesses.innerHTML = '';
    userInput.removeAttribute('disabled');
    random = parseInt(Math.random() * 100 + 1);
    startOver.removeChild(p);
    playGame = true;
  });
}
