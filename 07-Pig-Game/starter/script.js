'use strict';
/*
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const currentEl1 = document.getElementById('current--0');
const currentEl2 = document.getElementById('current--1');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
let current = 0;
let total = 0;
let currentPlayer;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//function switchPlayer() {}
rollDice.addEventListener('click', function () {
  let random = Number(Math.trunc(Math.random() * 6)) + 1;
  current += random;
  if (random !== 1) {
    if (random === 2) {
      diceEl.classList.remove('hidden');
      diceEl.src = 'dice-2.png';
      currentEl1.textContent = current;
    } else if (random === 3) {
      diceEl.classList.remove('hidden');
      diceEl.src = 'dice-3.png';
      currentEl1.textContent = current;
    } else if (random === 4) {
      diceEl.classList.remove('hidden');
      diceEl.src = 'dice-4.png';
      currentEl1.textContent = current;
    } else if (random === 5) {
      diceEl.classList.remove('hidden');
      diceEl.src = 'dice-5.png';
      currentEl1.textContent = current;
    } else if (random === 6) {
      diceEl.classList.remove('hidden');
      diceEl.src = 'dice-6.png';
      currentEl1.textContent = current;
    }
    console.log(random);
  } else {
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-1.png';
    current = 0;
    currentEl1.textContent = current;
    console.log('Its other players turn');
  }
});
hold.addEventListener('click', function () {
  total += current;
  score0El.textContent = total;
  if (total >= 100) {
    console.log(`You did win the game with a total of ${total} points`);
  } else {
    console.log('Its other players turn');
  }
});
newGame.addEventListener('click', function () {
  total = 0;
  current = 0;
  currentEl1.textContent = 0;
  currentEl2.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
});*/

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let playing, current, activePlayer, scores;

const init = function () {
  playing = true;
  current = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = current;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
init();

function switchPlayer() {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

rollDice.addEventListener('click', () => {
  if (playing) {
    let random = Number(Math.trunc(Math.random() * 6)) + 1;
    //console.log(scores);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;
    if (random !== 1) {
      current += random;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener('click', init);
