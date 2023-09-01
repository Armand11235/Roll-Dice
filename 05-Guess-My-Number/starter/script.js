'use strict';
/*
document.querySelector('.message');
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17;
document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
/*let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};
const displayColor = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};
const displayStyle = function (value) {
  document.querySelector('.number').style.width = value;
};
const displayScore = function (value){
  document.querySelector('.score').textContent= value;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  if (guess > 20 || guess < 0) {
    displayMessage('Please select a number between 1 and 20');
    // document.querySelector('.message').textContent =
    //   'Please select a number between 1 and 20';
  } else {
    if (!guess) {
      displayMessage('No number');
      //document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
      displayMessage('Correct Number');
      //document.querySelector('.message').textContent = 'Correct Number';
      displayNumber(secretNumber);
      //document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
      displayColor('#60b347');
      //document.querySelector('body').style.backgroundColor = '#60b347';
      displayStyle('30rem');
      //document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber
            ? 'The number is smaller'
            : 'The number is bigger';
        score--;
        displayScore(score);
        //document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You did not find the number');
        // document.querySelector('.message').textContent =
        //   'You did not find the number';
        displayScore(0);
        //document.querySelector('.score').textContent = 0;
      }

      // } else if (guess > secretNumber) {
      //     if (score > 1) {
      //         document.querySelector('.message').textContent =
      //             'The number is smaller';
      //         score--;
      //         document.querySelector('.score').textContent = score;
      //     } else {
      //         document.querySelector('.message').textContent =
      //             'You did not find the number';
      //         document.querySelector('.score').textContent = 0;
      //     }
      // } else if (guess < secretNumber) {
      //     if (score > 1) {
      //         document.querySelector('.message').textContent = 'The number is bigger';
      //         score--;
      //         document.querySelector('.score').textContent = score;
      //     } else {
      //         document.querySelector('.message').textContent =
      //             'You did not find the number';
      //         document.querySelector('.score').textContent = 0;
      //     }
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  //document.querySelector('.score').textContent = score;
  displayMessage(' Start guessing...');
  //document.querySelector('.highscore').textContent = 0;
  //document.querySelector('.message').textContent = ' Start guessing...';
  displayColor('#222');
  //document.querySelector('body').style.backgroundColor = '#222';
  displayStyle('15rem');
  //document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  displayNumber('?');
  //document.querySelector('.number').textContent = '?';
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (value) {
  document.querySelector('.message').textContent = value;
};
const displayNumber = function (value) {
  document.querySelector('.number').textContent = value;
};
const displayColor = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};
const displayStyle = function (value) {
  document.querySelector('.number').style.width = value;
};
const displayScore = function (value) {
  document.querySelector('.score').textContent = value;
};
const displayHighscore = function (value) {
  document.querySelector('.highscore').textContent = value;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (guess > 20 || guess < 0) {
    displayMessage('Please select a number between 1 and 20');
  } else {
    if (!guess) {
      displayMessage('No number');
    } else if (guess === secretNumber) {
      displayMessage('Correct Number');
      displayNumber(secretNumber);
      if (score > highscore) {
        highscore = score;
      }
      displayHighscore(highscore);
      displayColor('#60b347');
      displayStyle('30rem');
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guess > secretNumber
            ? 'The number is smaller'
            : 'The number is bigger'
        );
        score--;
        displayScore(score);
      } else {
        displayMessage('You did not find the number');
        displayScore(0);
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage(' Start guessing...');
  displayColor('#222');
  displayStyle('15rem');
  document.querySelector('.guess').value = ' ';
  displayNumber('?');
});
