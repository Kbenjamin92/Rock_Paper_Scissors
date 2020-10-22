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

// create element for computer output
let computerSelection = document.createElement("p");
    document.querySelector("#list-computer-choice").append(computerSelection);

let playerSelection = document.createElement("p");
    document.querySelector("#list-player-choice").append(playerSelection);
    
// rock button, generates random computer logic
const rock = document.querySelector(".player-rock").addEventListener("click", (e) => {
    playerSelection.textContent = "Rock"
    computerSelection.textContent = options[Math.floor(Math.random() * options.length)]
    game(e, null, null);
    console.log(playerPoints)
    console.log(computerPoints)


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

    delete draw msg when its not a draw
*/

let drawClass = document.querySelectorAll(".draw");

const removeFunction = () => {
    for (let i = 0; i < drawClass[0].childNodes.length; i++) {
        drawClass[0].childNodes[i].remove()
    }
}

const game = (rock, paper, scissors) => {

    console.log(drawClass[0].childNodes[1])
     // functionality for duplicate choices
    if (computerSelection.textContent === options[0] && rock) {
        let rockDraw = document.createElement("h1");
        rockDraw.setAttribute("class", "draw-text")
        rockDraw.textContent = "Draw"
        document.querySelector(".draw").append(rockDraw);

    } else if (computerSelection.textContent === options[1] && paper) {
        let paperDraw = document.createElement("h1");
        paperDraw.setAttribute("class", "draw-text")
        paperDraw.textContent = "Draw"
        document.querySelector(".draw").append(paperDraw);

    } else if (computerSelection.textContent === options[2] && scissors) {
        let scissorsDraw = document.createElement("h1");
        scissorsDraw.setAttribute("class", "draw-text")
        scissorsDraw.textContent = "Draw"
        document.querySelector(".draw").append(scissorsDraw);
     } 


    // functionality for the game
    if(computerSelection.textContent === options[0] && paper) {
        player.textContent = score.playerScore++ + 1;
        removeFunction()
    } if (computerSelection.textContent === options[0] && scissors) {
        computer.textContent = score.computerScore++ + 1
        removeFunction()
    } if (computerSelection.textContent === options[1] && rock) {
        computer.textContent = score.computerScore++ + 1
        removeFunction()
    } if (computerSelection.textContent === options[1] && scissors) {
        player.textContent = score.playerScore++ + 1
        removeFunction()
    } if (computerSelection.textContent === options[2] && rock) {
        player.textContent = score.playerScore++ + 1
        removeFunction()
    } if (computerSelection.textContent === options[2] && paper) {
        computer.textContent = score.computerScore++ + 1
        removeFunction()
    }
    // TEST FUNTIONS FOR THE DRAW OUTPUT!!
    // document.querySelector(".remove").addEventListener("click", () => {
    //     let drawClass = document.querySelectorAll(".draw")

    //     for (let i = 0; i < drawClass[0].childNodes.length; i++) {
    //         drawClass[0].childNodes[i].remove()
    //     }
    // })
}
let playerPoints = document.querySelector(".player-point");
let computerPoints = document.querySelector(".computer-point");
console.log(computerPoints)
console.log(playerPoints)

const winnerAndLoser = () => {
    /*
     FILL IN THE LOGIC HERE FOR DISPLAYING THE WINNER AND THE LOSER
     WITH DISPLAYING THE BEST OF 5 WITH THE USER WITH THE HIGHER NUMBER WINS.
    */ 
   if (computerPoints <= 5 && playerPoints < computerPoints) {
        let computerWinner = document.createElement("h1");
        computerWinner.setAttribute("class", "computerWinner")
        computerWinner.textContent = "You LOSE! Try Again"
        document.querySelector(".score").append(computerWinner);

   } else if (playerPoints <= 5 && computerPoints < playerPoints) {
        let playerWinner = document.createElement("h1");
        playerWinner.setAttribute("class", "playerWinner")
        playerWinner.textContent = "You WIN!"
        document.querySelector(".score").append(playerWinner);
   }

}
winnerAndLoser();

