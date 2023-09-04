const startGameBtn = document.getElementById('start-game-btn');
let gameRunning = false;
let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";

function playerChoose() {
    const selection = prompt("Rock, Paper, or Scissors:").toLowerCase();
    if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
        alert("Invalid choice! Try again!");
        return playerChoose();
    }
    gameRunning = true;
    return selection;
}

function computerChoose() {
    const selection = Math.random();
    if (selection < 0.34) {
        return ROCK;
    }
    else if (selection < 0.67) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "IT'S A TIE";
    }
    else if (computerChoice === ROCK && playerChoice === SCISSORS || 
        computerChoice === SCISSORS && playerChoice === PAPER ||
        computerChoice === PAPER && playerChoice === ROCK) {
        return `${computerChoice} beats ${playerChoice}. Computer wins!`;
    }
    else {
        return `${playerChoice} beats ${computerChoice}. Player wins!`;
    }
}

startGameBtn.addEventListener("click", () => {
    if (!gameRunning) {
        console.log("Game starting...");
        const playerChoice = playerChoose();
        const computerChoice = computerChoose();
        const winner = determineWinner(playerChoice, computerChoice);
        console.log(winner);
        gameRunning = false;
    }
});