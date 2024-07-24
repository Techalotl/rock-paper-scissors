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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("It's a tie!");
            console.log(humanScore, computerScore)
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("You win this round! Rock beats Scissors")
            humanScore++
            console.log(humanScore, computerScore)
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("You win this round! Paper beats Rock")
            humanScore++
            console.log(humanScore, computerScore)
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("You win this round! Scissors beats Paper")
            humanScore++
            console.log(humanScore, computerScore)
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("You lose this round! :( Paper beats Rock")
            computerScore++
            console.log(humanScore, computerScore)
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("You lose this round! :( Scissors beats Paper");
            computerScore++
            console.log(humanScore, computerScore)
        } else {
            console.log("You chose " + humanChoice, "and the computer chose " + computerChoice)
            console.log("You lose this round! :( Rock beats Scissors")
            computerScore++
            console.log(humanScore, computerScore)
        }
    }
    playRound(humanSelection, computerSelection);
    playRound(humanSelection = getHumanChoice(), computerSelection = getComputerChoice());
    playRound(humanSelection = getHumanChoice(), computerSelection = getComputerChoice());
    playRound(humanSelection = getHumanChoice(), computerSelection = getComputerChoice());
    playRound(humanSelection = getHumanChoice(), computerSelection = getComputerChoice());
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game")
    } else if (humanScore === computerScore) {
        console.log("Tie ¯\_(ツ)_/¯")
    }else {
        console.log("You lose the game. F")
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playGame();