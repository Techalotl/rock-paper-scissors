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
    let choice = prompt("Choose: 1 for rock, 2 for paper or 3 for scissors")
    if (choice == 1){
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());