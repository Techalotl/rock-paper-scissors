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
const displayPlayerScore = document.querySelector("#player-score");
const displayComputerScore = document.querySelector("#computer-score");
const selectionMessage = document.querySelector("#selection-message");
const roundMessage = document.querySelector("#round-message");
const finalMessage = document.querySelector("#final-message");

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
        selectionMessage.textContent = "You chose " + humanChoice + " and the computer chose " + computerChoice;
        roundMessage.textContent = "It's a tie!";
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper")) {
        selectionMessage.textContent = "You chose " + humanChoice + " and the computer chose " + computerChoice;
        roundMessage.textContent = "You win this round! " + humanChoice + " beats " + computerChoice;
        humanScore++
        displayPlayerScore.textContent = humanScore;
    } else {
        selectionMessage.textContent = "You chose " + humanChoice + " and the computer chose " + computerChoice;
        roundMessage.textContent = "You lose this round! :( " + computerChoice + " beats " + humanChoice;
        computerScore++;
        displayComputerScore.textContent = computerScore;
    }
    if (humanScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    if (humanScore > computerScore) {
        finalMessage.textContent = "Congratulations! You win the game";
    } else {
        finalMessage.textContent = "You lose the game. F"
    }
}
}