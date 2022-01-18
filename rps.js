function computerPlay() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function showChoices(playerChoice, computerChoice) {
  document.getElementById('player-choice').innerText = playerChoice;
  document.getElementById('computer-choice').innerText = computerChoice;
}

function showResults(results) {
  const container = document.querySelector('.results-container');
  const content = document.createElement('div');
  if (results === 'Tie!') {
    content.classList.add('results');
  } else if (results.search('win') > 0) {
    content.classList.add('results-win');
  } else {
    content.classList.add('results-lose');
  }
  content.textContent = results;
  container.appendChild(content);
}

function determineRound(playerChoice, computerChoice) {
  const beats = {
    'SCISSORS': 'ROCK',
    'ROCK': 'PAPER',
    'PAPER': 'SCISSORS'
  }

  if (playerChoice === computerChoice) {
    showResults('Tie!');
  } else {
    isWinner = playerChoice === beats[computerChoice];
    isWinner ? playerScore++ : computerScore++;
    if (isWinner) {
      showResults(`${playerChoice} beats ${computerChoice}! You win this round.`);
    } else {
      showResults(`${playerChoice} loses to ${computerChoice}. You lose this round.`);
    }
  }
}

function updateScores() {
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function determineWinner() {
  if (playerScore === 5) {
    showResults('You win the game!');
  } else if (computerScore === 5) {
    showResults('You lose the game!');
  }
}

function clearResults() {
  results = document.querySelector('.results-container');
  results.textContent = '';
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  showChoices('', '');
  round = 1;
  document.getElementById('round').innerText = '';
  clearResults();
  interactRpsButtons(disable=false);
}

function showPlayAgain() {
  const container = document.querySelector('.results-container');
  const btn = document.createElement('button');
  btn.classList.add('play-again-btn');
  btn.textContent = 'PLAY AGAIN';
  btn.addEventListener('click', reset);
  container.appendChild(btn);
}

function interactRpsButtons(disable=true) {
  const container = document.querySelector('.button-container');
  disable ? container.classList.add('disabled') :
    container.classList.remove('disabled');
}

function playRound(e) {
  document.getElementById('round').innerText = `Round: ${round}`;

  let playerChoice = e.target.className.replace('-btn', '').toUpperCase();
  let computerChoice = computerPlay();
  showChoices(playerChoice, computerChoice);
  determineRound(playerChoice, computerChoice);
  updateScores();

  if (playerScore === 5 || computerScore === 5) {
    determineWinner();
    showPlayAgain();
    interactRpsButtons();
  }
  round++;
}

let playerScore = 0;
let computerScore = 0;
let round = 1;
updateScores();
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));