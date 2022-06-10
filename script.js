function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 2)];
}

function playerSelection() {
    let playerChoice = prompt("Please enter Rock, Paper, or Scissors: ");
    return playerChoice;
}

function playRound() {
    let computerChoice = computerPlay().toLowerCase();
    let playerChoice = playerSelection().toLowerCase();

    if (computerChoice == playerChoice) {
        console.log("Tie! Computer selected " + computerChoice + " and you selected " + playerChoice);
        return playRound();
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper") ) {
        console.log("You lost! Computer selected " + computerChoice + " and you selected " + playerChoice);
    } else if ((computerChoice == "scissors" && playerChoice == "rock") || (computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") ) {
        console.log("You won! Computer selected " + computerChoice + " and you selected " + playerChoice);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}