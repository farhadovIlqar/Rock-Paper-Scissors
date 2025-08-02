const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resetButton = document.getElementById("reset-btn");
let playerScoreValue = 0;
let computerScoreValue = 0;

function gamePlay(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                resultDisplay.textContent = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                resultDisplay.textContent = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                resultDisplay.textContent = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.classList.remove("greenText", "redText");


    switch (resultDisplay.textContent) {
        case "YOU WIN!":
            playerScoreValue++;
            playerScore.textContent = playerScoreValue;
            resultDisplay.classList.add("greenText");
            playerScore.classList.add("greenText");
            break;
        case "YOU LOSE!":
            computerScoreValue++;
            computerScore.textContent = computerScoreValue;
            resultDisplay.classList.add("redText");
            computerScore.classList.add("redText");
            break;
    }


}

resetButton.addEventListener("click", () => {
    if (playerDisplay.textContent === "Player: No choice yet" && computerDisplay.textContent === "Computer: No choice yet") {
        resultDisplay.textContent = "No game played yet!";
        setTimeout(() => {
            resultDisplay.textContent = "";
        }, 1000);
        return;
    }
    else {
        resultDisplay.textContent = "Game reset!";
        setTimeout(() => {
            resultDisplay.textContent = "";
        }, 1000);
        playerScoreValue = 0;
        computerScoreValue = 0;
        playerScore.textContent = playerScoreValue;
        computerScore.textContent = computerScoreValue;
        playerDisplay.textContent = "Player: No choice yet";
        computerDisplay.textContent = "Computer: No choice yet";
        resultDisplay.classList.remove("greenText", "redText");
        playerScore.classList.remove("greenText", "redText");
        computerScore.classList.remove("greenText", "redText");
    }
});