function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return "rock"
    } else if (random === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?")
    return choice.toLowerCase();
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(humanChoice, computerChoice)
        console.log("It's a tie!");
        console.log(humanScore, computerScore)
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(humanChoice, computerChoice)
        console.log("You win! Rock beats scissors")
        humanScore++
        console.log(humanScore, computerScore)
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(humanChoice, computerChoice)
        console.log("You win! Paper beats rock")
        humanScore++
        console.log(humanScore, computerScore)
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(humanChoice, computerChoice)
        console.log("You win! Scissors beats paper")
        humanScore++
        console.log(humanScore, computerScore)
    } else {
        console.log(humanChoice, computerChoice)
        console.log("You lose! :(")
        computerScore++
        console.log(humanScore, computerScore)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);