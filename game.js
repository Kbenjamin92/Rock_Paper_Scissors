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
computer.setAttribute("class", "computer-point");
computer.textContent = score.computerScore
document.querySelector(".computer-score").append(computer);

// Restart the game option which returns the score to 0
const restartGame = document.querySelector(".restart").addEventListener("click", () => {
// restart player score
    player.textContent = score.playerScore = 0;
// restart computer score
    computer.textContent = score.computerScore = 0; 
//refresh the data
    document.querySelector(".computers-choice").style.visibility = "hidden"
    document.querySelector(".players-choice").style.visibility = "hidden"
    document.querySelector(".player-Winner").style.visibility = "hidden"
    document.querySelector(".computer-Winner").style.visibility = "hidden"
    removeFunction();
    document.querySelector(".rock").style.visibility = "hidden"
    document.querySelector(".paper").style.visibility = "hidden"
    document.querySelector(".scissors").style.visibility = "hidden"
    });
//checks the score for the winner
const checkScore = () => {
    if (score.computerScore >= 3) {
        document.querySelector(".computer-Winner").style.visibility = "visible"
    } else if (score.playerScore >= 3) {
        document.querySelector(".player-Winner").style.visibility = "visible"
    }
}

/*
TODO LIST 
    figure out how to add the game parameter to the settimeout function on each button
*/ 
document.querySelector(".rock").style.visibility = "hidden"
document.querySelector(".paper").style.visibility = "hidden"
document.querySelector(".scissors").style.visibility = "hidden"

// The computers random selection
const options = ["ROCK","PAPER","SCISSORS"]
  
const rockFunc = () => {
    document.querySelector(".rock").style.visibility = "visible"
}
const paperFunc = () => {
    document.querySelector(".paper").style.visibility = "visible"
}
const scissorsFunc = () => {
    document.querySelector(".scissors").style.visibility = "visible"
}
//logic to run the code after the rock paper scissors queue.
const runRockLogic = (event) => {
    playerSelection.textContent = "Rock"
    computerSelection.textContent = options[Math.floor(Math.random() * options.length)]
    game(event, null, null);
    document.querySelector(".computers-choice").style.visibility = "visible"
    document.querySelector(".players-choice").style.visibility = "visible"
}
//run paper logic
const runPaperLogic = (event) => {
    playerSelection.textContent = "Paper"
    computerSelection.textContent = options[Math.floor(Math.random() * options.length)]
    game(null, event, null);
    document.querySelector(".computers-choice").style.visibility = "visible"
    document.querySelector(".players-choice").style.visibility = "visible"
}
//run scissors logic
const runScissorsLogic = (event) => {
    playerSelection.textContent = "Scissors"
    computerSelection.textContent = options[Math.floor(Math.random() * options.length)]
    game(null, null, event);
    document.querySelector(".computers-choice").style.visibility = "visible"
    document.querySelector(".players-choice").style.visibility = "visible"
}
//hide the game msg
const hideMsg = () => {
    document.querySelector(".rock").style.visibility = "hidden"
    document.querySelector(".paper").style.visibility = "hidden"
    document.querySelector(".scissors").style.visibility = "hidden"
}


// create element for computer output
let computerSelection = document.createElement("p");
    computerSelection.setAttribute("class", "computers-choice")
    document.querySelector("#list-computer-choice").append(computerSelection);

let playerSelection = document.createElement("p");
    playerSelection.setAttribute("class", "players-choice")
    document.querySelector("#list-player-choice").append(playerSelection);

    
// rock button, generates random computer logic
const rock = document.querySelector(".player-rock").addEventListener("click", (e) => {
    setTimeout(rockFunc, 1000)
    setTimeout(paperFunc, 2000);
    setTimeout(scissorsFunc, 3000);
    setTimeout(hideMsg, 4000)
    setTimeout(function () {
        runRockLogic(e)
    }, 4000);

});
// papers button, generates random computer logic
const paper =  document.querySelector(".player-paper").addEventListener("click", (e) => {
    setTimeout(rockFunc, 1000);
    setTimeout(paperFunc, 2000);
    setTimeout(scissorsFunc, 3000);
    setTimeout(hideMsg, 4000)
    setTimeout(function () {
        runPaperLogic(e)
    }, 4000);


});
// scissors button, generates random computer logic
const scissors = document.querySelector(".player-scissors").addEventListener("click", (e) => {
    setTimeout(rockFunc, 1000);
    setTimeout(paperFunc, 2000);
    setTimeout(scissorsFunc, 3000);
    setTimeout(hideMsg, 4000)
    setTimeout(function () {
        runScissorsLogic(e)
    }, 4000);

});

// Delete the draw text
const removeFunction = () => {
    document.querySelector(".draw").style.visibility = "hidden"
}

const game = (rock, paper, scissors) => {
     // functionality for duplicate choices
    if (computerSelection.textContent === options[0] && rock) {
        document.querySelector(".draw").style.visibility = "visible"

    } else if (computerSelection.textContent === options[1] && paper) {
        document.querySelector(".draw").style.visibility = "visible"

    } else if (computerSelection.textContent === options[2] && scissors) {
        document.querySelector(".draw").style.visibility = "visible"
    } 

    // functionality for the game
    if(computerSelection.textContent === options[0] && paper) {
        player.textContent = score.playerScore++ + 1;
        removeFunction();
        checkScore();
    } if (computerSelection.textContent === options[0] && scissors) {
        computer.textContent = score.computerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerSelection.textContent === options[1] && rock) {
        computer.textContent = score.computerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerSelection.textContent === options[1] && scissors) {
        player.textContent = score.playerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerSelection.textContent === options[2] && rock) {
        player.textContent = score.playerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerSelection.textContent === options[2] && paper) {
        computer.textContent = score.computerScore++ + 1
        removeFunction();
        checkScore();
    }
   
}


  



