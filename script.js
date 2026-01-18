let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const random = Math.random();
  
  if (random < 0.33) {
    return 'rock';
  } else if (random < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Test it
console.log(getComputerChoice());

function getHumanChoice(){
    const choice = prompt("enter rock, paper, or scissors:");
    return choice;

}
console.log(getHumanChoice());

function playRound(humanChoice, ComputerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log (`you chose: ${humanChoice}`);
    console.log (`Computer chose: ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return;
 
    }
    if (
        (humanChoice === 'rock'&& computerChoice ==="scissors")||
        (humanChoice === 'paper'&& computerChoice ==="rock")||
        (humanChoice === 'scissors'&& computerChoice ==="paper")
    ){
        console.log(`you Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    } else{
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}