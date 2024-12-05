'use strict'

// Selecting elements
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions
score0El.innerHTML = 0
score1El.innerHTML = 0
diceEl.classList.add('hidden')

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  // 2. Display dice
  // 3. Check for rolled 1: if true, switch to the next player
})
