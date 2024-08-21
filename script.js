function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return "Rock"
    } else if (random === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});

let humanScore = 0
let computerScore = 0
    
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
        console.log("It's a tie!");
        console.log(humanScore, computerScore)
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
        console.log("You win this round! " + humanChoice + " beats " + computerChoice)
        humanScore++
        console.log(humanScore, computerScore)
    } else {
        console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
        console.log("You lose this round! :( " + computerChoice + " beats " + humanChoice);
        computerScore++;
        console.log(humanScore, computerScore)
    }
    if (humanScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game")
    } else if (humanScore === computerScore) {
        console.log("Tie ¯\_(ツ)_/¯")
    } else {
        console.log("You lose the game. F")
    }
}
}