function playGame() {
  // Score variables inside playGame
  let humanScore = 0;
  let computerScore = 0;
  
  function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) return 'rock';
    else if (random < 0.66) return 'paper';
    else return 'scissors';
  }
  
  function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice;
  }
  
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }
    
    if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log('---');
  }
  
  // Play 5 rounds - THIS IS THE FIXED PART
  console.log('Round 1:');
  playRound(getHumanChoice(), getComputerChoice());
  
  console.log('Round 2:');
  playRound(getHumanChoice(), getComputerChoice());
  
  console.log('Round 3:');
  playRound(getHumanChoice(), getComputerChoice());
  
  console.log('Round 4:');
  playRound(getHumanChoice(), getComputerChoice());
  
  console.log('Round 5:');
  playRound(getHumanChoice(), getComputerChoice());
  
  // Announce final winner
  console.log('=== GAME OVER ===');
  if (humanScore > computerScore) {
    console.log(`You won the game! Final score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer won the game! Final score: ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${humanScore} - ${computerScore}`);
  }
}

// Start the game
playGame();