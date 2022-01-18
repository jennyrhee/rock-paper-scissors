function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
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
    'scissors': 'rock',
    'rock': 'paper',
    'paper': 'scissors'
  }

  if (playerChoice === computerChoice) {
    showResults('Tie!');
  } else {
    results = playerChoice === beats[computerChoice];
    results ? playerScore++ : computerScore++;
    showResults(`Winner: ${results}`);
  }
}

function updateScores(playerScore, computerScore) {
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function determineWinner() {
  if (playerScore === 1) {
    showResults('You win the game!');
  } else if (computerScore === 1) {
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
}

function showPlayAgain() {
  const container = document.querySelector('.results-container');
  const btn = document.createElement('button');
  btn.classList.add('play-again-btn');
  btn.textContent = 'PLAY AGAIN';
  btn.addEventListener('click', reset);
  container.appendChild(btn);
}

function disableRpsButtons() {
  const container = document.querySelector('.button-container');
  container.classList.add('disabled');
}

function playRound(e) {
  clearResults();

  let playerChoice = e.target.className.replace('-btn', '');
  let computerChoice = computerPlay();
  showChoices(playerChoice, computerChoice);
  determineRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);

  if (playerScore === 1 || computerScore === 1) {
    determineWinner();
    showPlayAgain();
    disableRpsButtons();
  }
}

let playerScore = 0;
let computerScore = 0;
updateScores(playerScore, computerScore);
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));