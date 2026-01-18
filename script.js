function getComputerChoice(){
    const random = Math.random();
    if (random<0.33) {
        return "rock";
    } else if (random<0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice());

function chooseWeapon(weapon){
    const result = document.getElementById('result');
    result.textContent = "You chose:" + weapon;
}
let HumanScore = 0
let computerScore = 0 

function playRound(chooseWeapon, getComputerChoice){
    

}