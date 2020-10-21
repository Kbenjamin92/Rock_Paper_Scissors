let score = {
    playerScore: 0,
    computerScore: 0
}
 
// player score
let player = document.createElement("span");
player.setAttribute("class", "player-point");
player.textContent = score.playerScore
document.querySelector(".player-score").append(player);

// computer score
let computer = document.createElement("span");
computer.setAttribute("class", "player-point");
computer.textContent = score.computerScore
document.querySelector(".computer-score").append(computer);

// Restart the game option which returns the score to 0
const restartGame = document.querySelector(".restart").addEventListener("click", () => {
// restart player score
    player.textContent = score.playerScore = 0;
// restart computer score
    computer.textContent = score.computerScore = 0; 

    let playerList = document.querySelector("#list-player-choice")
    let computerList = document.querySelector("#list-computer-choice")

    location.reload();
    
});
// The game is best of 3 tries add that functionality, use a for loop to perfrom this action

/*
TODO LIST 
    -- create a condition where
    rock beats scissors
    scissors beats paper
    paper beats rock

    -- Create the computer logic that randomly choses 
    rock, paper, scissors

    Make the score display the condion of who beats who 
    in regards to the condition of rock paper and scissors

    computer only randomly selects option after refresh
        - make computer randomly select after click

    create a next round button to clear the output so the old output doesn't stay on the page 
    for the next selection.

    remove the last choice from the screen once a new choice is chosen

    find a way to remove the text off the page without having to refresh the page to get the html
    tags back on the page for the values to stay

*/ 

// The computers random selection
const options = ["Rock", "Paper", "Scissors"];
let computersChoice = options[Math.floor(Math.random() * options.length)];

// create element for computer output
let computerSelection = document.createElement("p");
    document.querySelector("#list-computer-choice").append(computerSelection);

let playerSelection = document.createElement("p");
    document.querySelector("#list-player-choice").append(playerSelection);
    // computerSelection.textContent = options[Math.floor(Math.random() * options.length)]

    
// rock button, generates random computer logic
const rock = document.querySelector(".player-rock").addEventListener("click", (e) => {
    playerSelection.textContent = "Rock"
    // comLogic()
    computerSelection.textContent = computersChoice

    game(e, null, null);

});

// papers button, generates random computer logic
const paper =  document.querySelector(".player-paper").addEventListener("click", (e) => {
    playerSelection.textContent = "Paper"

    computerSelection.textContent = options[Math.floor(Math.random() * options.length)]

    game(null, e, null);
});
// scissors button, generates random computer logic
const scissors = document.querySelector(".player-scissors").addEventListener("click", (e) => {
    playerSelection.textContent = "Scissors"

    computerSelection.textContent = options[Math.floor(Math.random() * options.length)]

    game(null, null, e);

});

/* UPDATE THE GAME FUNCTION TO THE NEW CODE ABOVE
    FIX THE CONDITION BELOW
*/

const game = (rock, paper, scissors) => {
    // functionality for the game
    if(computersChoice === options[0] && paper) {
        player.textContent = score.playerScore++ + 1;

    } else if (computersChoice === options[0] && scissors) {
        computer.textContent = score.computerScore++ + 1

    } else if (computersChoice === options[1] && rock) {
        console.log('works');
        computer.textContent = score.computerScore++ + 1

    } else if (computersChoice === options[1] && scissors) {
        player.textContent = score.playerScore++ + 1

    } else if (computersChoice === options[2] && rock) {
        player.textContent = score.playerScore++ + 1

    } else if (computersChoice === options[2] && paper) {
        computer.textContent = score.computerScore++ + 1
    }
    
    // functionality for duplicate choices
    if (computersChoice === options[0] && rock) {
        let rockDraw = document.createElement("h1");
        rockDraw.textContent = "Draw"
        document.querySelector(".score").append(rockDraw);

    } else if (computersChoice === options[1] && paper) {
        let paperDraw = document.createElement("h1");
        paperDraw.textContent = "Draw"
        document.querySelector(".score").append(paperDraw);

    } else if (computersChoice === options[2] && scissors) {
        let scissorsDraw = document.createElement("h1");
        scissorsDraw.textContent = "Draw"
        document.querySelector(".score").append(scissorsDraw);
    }
}

