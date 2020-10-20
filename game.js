// let playerScore = 0;
// let computerScore = 0;
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
    playerList.removeChild(rock);
    
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

*/ 

// The computers random selection
let options = ["Rock", "Paper", "Scissors"];
let computersChoice = options[Math.floor(Math.random() * options.length)];

// rock button, generates random computer logic
const rock = document.querySelector(".player-rock").addEventListener("click", () => {
    let rock = document.createElement("li");
    rock.textContent = "Rock"
    document.querySelector("#list-player-choice").append(rock);

    let computersSelection = document.createElement("li");
    computersSelection.textContent = computersChoice
    document.querySelector("#list-computer-choice").append(computersSelection);

    game(rock, null, null);

});
// papers button, generates random computer logic
const paper =  document.querySelector(".player-paper").addEventListener("click", () => {
    let paper = document.createElement("li");
    paper.textContent = "Paper"
    document.querySelector("#list-player-choice").append(paper);

    let computersSelection = document.createElement("li");
    computersSelection.textContent = computersChoice
    document.querySelector("#list-computer-choice").append(computersSelection);

    game(null, paper, null);
});
// scissors button, generates random computer logic
const scissors = document.querySelector(".player-scissors").addEventListener("click", () => {
    let scissors = document.createElement("li");
    scissors.textContent = "Scissor"
    document.querySelector("#list-player-choice").append(scissors);

    let computersSelection = document.createElement("li");
    computersSelection.textContent = computersChoice
    document.querySelector("#list-computer-choice").append(computersSelection);

    game(null, null, scissors);

});

const game = (rock, paper, scissors) => {
    // functionality for the game
    if(computersChoice === options[0] && paper) {
        player.textContent = score.playerScore++ + 1;

    } else if (computersChoice === options[0] && scissors) {
        computer.textContent = score.computerScore++ + 1

    } else if (computersChoice === options[1] && rock) {
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

