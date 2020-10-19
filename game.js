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

const game = (playersChoice) => {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    let options = [rock, paper, scissors];
    let computersChoice = options[Math.floor(Math.random() * options.length)];
}


const rock = document.querySelector(".player-rock").addEventListener("click", () => {
    let rock = document.createElement("p");
    rock.textContent = "Rock"
    document.querySelector(".player-score").append(rock);

});
const paper =  document.querySelector(".player-paper").addEventListener("click", () => {
    let paper = document.createElement("p");
    paper.textContent = "Paper"
    document.querySelector(".player-score").append(paper);
});
const scissors = document.querySelector(".player-scissors").addEventListener("click", () => {
    let scissors = document.createElement("p");
    scissors.textContent = "Scissor"
    document.querySelector(".player-score").append(scissors);
});

