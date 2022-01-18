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
  content.classList.add('results');
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

function updateScores(playerScore, computerScore) {
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
  updateScores(playerScore, computerScore);
  showChoices('', '');
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
  clearResults();

  let playerChoice = e.target.className.replace('-btn', '').toUpperCase();
  let computerChoice = computerPlay();
  showChoices(playerChoice, computerChoice);
  determineRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);

  if (playerScore === 5 || computerScore === 5) {
    determineWinner();
    showPlayAgain();
    interactRpsButtons();
  }
}

let playerScore = 0;
let computerScore = 0;
updateScores(playerScore, computerScore);
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));