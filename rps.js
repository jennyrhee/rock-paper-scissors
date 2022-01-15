function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScores(playerScore, computerScore) {
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function showResults(results) {
  const container = document.querySelector('.results-container');
  const content = document.createElement('div');
  content.classList.add('results');
  content.textContent = results;
  container.appendChild(content);
}

function determineWinner() {
  if (playerScore === 5) {
    alert('You win!');
    
  } else if (computerScore === 5) {
    alert('You lose!');
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  container = document.querySelector('.results-container');
  container.textContent = '';
}

function playRound(e) {
  computerChoice = computerPlay();
  const beats = {
    'scissors': 'rock',
    'rock': 'paper',
    'paper': 'scissors'
  }

  let playerChoice = e.target.className.replace('-btn', '')
  if (playerChoice === computerChoice) {
    showResults('Tie!');
  } else {
    results = playerChoice === beats[computerChoice];
    results ? playerScore++ : computerScore++;
    showResults(`Winner: ${results}`);
  }
  if (playerScore === 5 || computerScore === 5) {
    determineWinner();
    reset();
  }
  updateScores(playerScore, computerScore);
}

let playerScore = 0;
let computerScore = 0;
updateScores(playerScore, computerScore);
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));