const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let playerChoice = prompt('Rock, paper, or scissors?');
  // to make user input case insensitive
  playerChoice = playerChoice.toLowerCase();

  while (!choices.includes(playerChoice)) {
    playerChoice = prompt('Unexpected input. Try again.');
  }
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  switch (playerChoice) {
    case 'rock':
      switch (computerChoice) {
        case 'scissors': return 1;
        case 'paper': return -1;
        default: return 0;
      }
    case 'paper':
      switch (computerChoice) {
        case 'rock': return 1;
        case 'scissors': return -1;
        default: return 0;
      }
    case 'scissors':
      switch (computerChoice) {
        case 'paper': return 1;
        case 'rock': return -1;
        default: return 0;
      }
  }
}

function game() {
  let score = 0;
  let roundScore = 0;

  for (let i = 0; i < 5; i++) {
    playerChoice = getPlayerChoice();
    computerChoice = computerPlay();
    roundScore = playRound(playerChoice, computerChoice);
    score += roundScore;
    if (roundScore === 1) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
    } else if (roundScore === -1) {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
    } else {
        console.log(`It's a tie.`);
    }
  }

  if (score > 0) {
    console.log(`You win the game! Your final score was ${score}.`);
  } else if (score < 0) {
    console.log(`You lose the game! Your final score was ${score}.`);
  } else {
    console.log(`It's a tie game.`)
  }
}