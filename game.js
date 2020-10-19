// store the score in an object or an array
const score = {
    computerScore: 0,
    playerScore: 0
};
// player score
let player = document.createElement("span");
player.setAttribute("class", "player-point");
player.textContent = score.playerScore
document.querySelector(".player-score").append(player);

// computer score
let computer = document.createElement("span");
computer.setAttribute("class", "player-point");
computer.textContent = score.computerScore
document.querySelector(".player-score").append(computer);

// Restart the game option which returns the score to 0
// The game is best of 3 tries

/*
TODO LIST 
    -- create a condition where
    rock beats scissors
    scissors beats paper
    paper beats rock

    -- Create the computer logic that randomly choses 
    rock, paper, scissors

    write a function that choses the computers decision 
    randomly after the player has chosen his selection.

    Make the score display the condion of who beats who 
    in regards to the condition of rock paper and scissors

    use textContent and append to change the values on the html page

*/ 

// The computers random selection
let options = ["Rock", "Paper", "Scissors"];
let computersChoice = options[Math.floor(Math.random() * options.length)];

// rock button, generates random computer logic
const rock = document.querySelector(".player-rock").addEventListener("click", () => {
    let rock = document.createElement("p");
    rock.textContent = "Rock"
    document.querySelector(".player-score").append(rock);

    let computersSelection = document.createElement("p");
    computersSelection.textContent = computersChoice
    document.querySelector(".computer-score").append(computersSelection);

    game(rock, null, null);

});
// papers button, generates random computer logic
const paper =  document.querySelector(".player-paper").addEventListener("click", () => {
    let paper = document.createElement("p");
    paper.textContent = "Paper"
    document.querySelector(".player-score").append(paper);

    let computersSelection = document.createElement("p");
    computersSelection.textContent = computersChoice
    document.querySelector(".computer-score").append(computersSelection);

});
// scissors button, generates random computer logic
const scissors = document.querySelector(".player-scissors").addEventListener("click", () => {
    let scissors = document.createElement("p");
    scissors.textContent = "Scissor"
    document.querySelector(".player-score").append(scissors);

    let computersSelection = document.createElement("p");
    computersSelection.textContent = computersChoice
    document.querySelector(".computer-score").append(computersSelection);

});

const game = (rock, paper, scissors) => {

    if(computersChoice === options[0] && paper) {
        let playerPoint = document.createElement("span");
        playerPoint.textContent = score.playerScore++
        document.querySelector(".player-point").append(playerPoint);
    }

    if (computersChoice === options[0] && rock) {
        let rockDraw = document.createElement("p");
        rockDraw.textContent = "Draw"
        document.querySelector(".restart").append(rockDraw);

    } else if (computersChoice === options[1] && paper) {
        let paperDraw = document.createElement("p");
        paperDraw.textContent = "Draw"
        document.querySelector(".restart").append(paperDraw);

    } else if (computersChoice === options[3] && scissors) {
        let scissorsDraw = document.createElement("p");
        scissorsDraw.textContent = "Draw"
        document.querySelector(".restart").append(scissorsDraw);
    }
}

