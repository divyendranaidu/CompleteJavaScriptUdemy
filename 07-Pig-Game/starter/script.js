'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let activePlayer = 0;
let currentScore = 0;
const winningScore = 20;

init();
//Starting
function init() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');    
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    document.getElementById('current--0' ).textContent = currentScore;
    document.getElementById('current--1' ).textContent = currentScore;
    activePlayer = 0;
    currentScore = 0;
    btnRollDice.disabled = false;
    btnHold.disabled = false;
}


let diceRollValue = function () {
    return Math.trunc((Math.random() * 6) + 1);
}
btnNewGame.addEventListener('click', function() {
    init();
});

btnHold.addEventListener('click', function () {
    switchPlayer('hold');
});

btnRollDice.addEventListener('click', function () {
    let diceRoll = diceRollValue();
    diceEl.src = 'dice-' + diceRoll + '.png';
    if (diceRoll !== 6) {
        currentScore += diceRoll;
        document.getElementById('current--' + activePlayer).textContent = currentScore;
        diceEl.classList.remove('hidden');
    } else {
        switchPlayer();
    }

});

function switchPlayer(evt) {
    if (evt === 'hold') {
        document.getElementById('score--' + activePlayer).textContent = Number(document.getElementById('score--' + activePlayer).textContent) + currentScore;
        document.getElementById('current--' + activePlayer).textContent = 0;
    }
    if (Number(document.getElementById('score--' + activePlayer).textContent) >= winningScore) {
        document.querySelector('.player--active').classList.add('player--winner');
        document.querySelector('.player--active').classList.remove('player--active');
        document.getElementById('current--' + activePlayer).textContent = 0;
        btnRollDice.disabled = true;
        btnHold.disabled = true;

    } else {
        document.getElementById('current--' + activePlayer).textContent = 0;
        activePlayer = (activePlayer === 0) ? 1 : 0;
        document.querySelector('.player--active').classList.remove('player--active');
        document.querySelector('.player--' + activePlayer).classList.add('player--active');
    }
    currentScore = 0;
}
