'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayGrayscale = function (x) {
  document.querySelector(x).style.filter = 'grayscale(100%)';
};

const removeGrayscale = function (x) {
  document.querySelector(x).style.filter = 'grayscale(0%)';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!');

    // When the player Win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundImage =
      "url('gif-backgraund/gif-bg.gif')";

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high...' : 'Too low...');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
      // document.querySelector(".label-score").style.backgroundColor = "red"

      displayGrayscale('main');
      displayGrayscale('.btn');
      displayGrayscale('.line');
      displayGrayscale('.number');
      displayGrayscale('.between');

      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('.message').style.color = 'red';
      document.querySelector('.message').style['-webkit-text-stroke'] =
        'calc(0.2rem + 0.1vw) rgb(136, 0, 0)';
    }
  }
});

//When the user click again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Guess My Number!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundImage = 'none';

  removeGrayscale('main');
  removeGrayscale('.btn');
  removeGrayscale('.line');
  removeGrayscale('.number');
  removeGrayscale('.between');

  document.querySelector('body').style.backgroundColor = 'rgb(31, 2, 78)';
  document.querySelector('.message').style.color = 'rgb(113, 113, 248)';
  document.querySelector('.message').style['-webkit-text-stroke'] =
    'calc(0.2rem + 0.1vw) rgb(81, 81, 212)';
});
