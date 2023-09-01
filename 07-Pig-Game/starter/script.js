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

const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let current = 0;
let total = 0;
let activePlayer = 0;

function switchPlayer() {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

rollDice.addEventListener('click', () => {
  let random = Number(Math.trunc(Math.random() * 6)) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${random}.png`;
  if (random !== 1) {
    current += random;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  } else {
    switchPlayer();
  }
});
hold.addEventListener('click', function () {
  scores[activePlayer] += current;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    console.log(
      `You did win the game with a total of ${scores[activePlayer]} points`
    );
  } else {
    switchPlayer();
  }
});
newGame.addEventListener('click', function () {
  total = 0;
  current = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  activePlayer = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;

  //player0El.classList.add('player--active');
  //player0El.classList.add('player--active');
  //player1El.classList.remove('player--active');
  //activePlayer = 1;
});
