let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results")
const scoreDiv = document.querySelector("#score")
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
  
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
    
    resultsDiv.textContent =`you chose:${humanChoice}, Computer chose:$${computerChoice}`
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
    // Check if someone reached 5 points
if (humanScore === 5) {
  resultsDiv.textContent += " YOU WON THE GAME!";
  
  // Maybe disable buttons here?
}
if (computerScore === 5) {
  resultsDiv.textContent += " Computer won the game!";
  // Maybe disable buttons here?
}
  }
  
  
 

  


rockButton.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice)
})

paperButton.addEventListener("click",()=>{
  const computerChoice = getComputerChoice()
  playRound("paper", computerChoice)
})
scissorsButton.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice()
  playRound("scissors", computerChoice)
})