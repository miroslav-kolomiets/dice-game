/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
import showResults from './components/ShowResults'
import Player from './components/Player'

import dice_1 from './images/dice-1.png';
import dice_2 from './images/dice-2.png';
import dice_3 from './images/dice-3.png';
import dice_4 from './images/dice-4.png';
import dice_5 from './images/dice-5.png';
import dice_6 from './images/dice-6.png';

import './style.css';

const diceElement1 = document.querySelector('#dice1');
const diceElement2 = document.querySelector('#dice2');

let scores = [0, 0];
let activePlayer = 0;
let maxValue = 100;
let current = 0;

const player1 = new Player(prompt('Введите имя первого игрока', 'Игрок 1'));
const player2 = new Player(prompt('Введите имя второго игрока', 'Игрок 2'));

const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  document.querySelector('#name-0').textContent = player1.name;
  document.querySelector('#name-1').textContent = player2.name;
  diceElement1.style.display = 'none';
  diceElement2.style.display = 'none';
}

initGame();

document.querySelector('.btn-roll').addEventListener('click', () => {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  diceElement1.src = `dice-${dice1}.png`;
  diceElement1.style.display = 'block';

  diceElement2.src = `dice-${dice2}.png`;
  diceElement2.style.display = 'block';

  if (dice1 !== dice2 && dice1 !== 2 && dice2 !== 2) {
    current += (dice1 + dice2);
    document.getElementById(`current-${activePlayer}`).textContent = current;

    if (scores[activePlayer] + current >= maxValue) {
      alert(`Player ${activePlayer} won!!!`);
    
      player1.setScore(activePlayer.toString(), 1);

      initGame();
    }
    
  } else {
    changePlayer();
  }
});

const changePlayer = () => {
  current = 0;
  document.getElementById('current-'+activePlayer).textContent = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
  activePlayer = +!activePlayer;
  diceElement1.style.display = 'none';
  diceElement2.style.display = 'none';
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}

document.querySelector('.btn-hold').addEventListener('click', () => {
  scores[activePlayer] += current;
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  changePlayer();
})

document.querySelector('.btn-result').addEventListener('click', showResults)

document.querySelector("#max-limit-form").addEventListener("submit", e => {
  e.preventDefault()
  maxValue = document.querySelector('.field-limit').value;
})

document.querySelector('.btn-new').addEventListener('click', initGame)
