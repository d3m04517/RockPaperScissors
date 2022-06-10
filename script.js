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

    let container = document.getElementById('gameContainer');

    if (computerChoice == playerChoice) {
        container.insertAdjacentHTML('beforeend', "<p>Tie! Computer selected " + computerChoice + " and you selected " + playerChoice + "</p>");
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper") ) {
        container.insertAdjacentHTML('beforeend', "<p>You lost! Computer selected " + computerChoice + " and you selected " + playerChoice + "</p>");

    } else if ((computerChoice == "scissors" && playerChoice == "rock") || (computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") ) {
        container.insertAdjacentHTML('beforeend', "<p>You won! Computer selected " + computerChoice + " and you selected " + playerChoice + "</p>");
    }
}

function game() {
        playRound();
}