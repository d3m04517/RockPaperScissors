const startButton = document.querySelector("#startButton");
const selectionButtons = document.querySelectorAll("#selections input")
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const selections = document.querySelector("#selections");
const scoreCount = document.querySelector(".scoreCount");
const roundResult = document.querySelector(".roundResult");

let count = 0;
let round = 0;
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(selection) {
    let computerChoice = computerPlay().toLowerCase();
    let playerChoice = selection.toLowerCase();

   
    if (computerChoice == playerChoice) {
        round++;
        roundResult.textContent = "Round: " + round + ": Tie! Computer selected " + computerChoice + " and you selected " + playerChoice;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper") ) {
        round++;
        roundResult.textContent = "Round: " + round + ": You lost! Computer selected " + computerChoice + " and you selected " + playerChoice ;
    } else if ((computerChoice == "scissors" && playerChoice == "rock") || (computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") ) {
        round++;
        roundResult.textContent =  "Round: " + round + ": You won! Computer selected " + computerChoice + " and you selected " + playerChoice ;
        count++;
        scoreCount.textContent = "Score Count: " + count;
    } else {
        roundResult.textContent =  "Please select one of the options.";
    }

    if (count == "5") {
        alert("Congrats you win!");
        startButton.style.display = "block";
        selections.style = "none";
        count = 0;
        round = 0;
        scoreCount.textContent = "";
        roundResult.textContent = "";
    } 
}

startButton.addEventListener("click", (e) => {
    e.target.style.display = "none";
    selections.style = "display: flex; flex-direction: column;";
});

selectionButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        playRound(e.target.attributes.value.value);
    });
});