// store the score in an object or an array
const score = {
    computerScore: 0,
    playerScore: 0
};
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

    Make th score display the condion of who beats who 
    in regards to the condition of rock paper and scissors

    use textContent and append to change the values on the html page

*/ 



// The computers random selection
let options = ["Rock", "Paper", "Scissors"];
let computersChoice = options[Math.floor(Math.random() * options.length)];

const game = (rock, paper, scissors) => {
    if(rock) {
        console.log('I pick rock');
    } else if (paper) {
        console.log('I pick paper');
    } else if (scissors) {
        console.log('I pick scissors')
    }
}

// rock paper
const rock = document.querySelector(".player-rock").addEventListener("click", () => {
    let rock = document.createElement("p");
    rock.textContent = "Rock"
    document.querySelector(".player-score").append(rock);

    let computersSelection = document.createElement("p");
    computersSelection.textContent = computersChoice
    document.querySelector(".computer-score").append(computersSelection);

    game(rock, null, null);

});
// papers button
const paper =  document.querySelector(".player-paper").addEventListener("click", () => {
    let paper = document.createElement("p");
    paper.textContent = "Paper"
    document.querySelector(".player-score").append(paper);

    let computersSelection = document.createElement("p");
    computersSelection.textContent = computersChoice
    document.querySelector(".computer-score").append(computersSelection);

    game(null, paper, null);

});
// scissors button
const scissors = document.querySelector(".player-scissors").addEventListener("click", () => {
    let scissors = document.createElement("p");
    scissors.textContent = "Scissor"
    document.querySelector(".player-score").append(scissors);

    let computersSelection = document.createElement("p");
    computersSelection.textContent = computersChoice
    document.querySelector(".computer-score").append(computersSelection);

    game(null, null, scissors);
});

