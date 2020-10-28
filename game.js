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
    document.querySelector(".player-Winner").style.visibility = "hidden"
    document.querySelector(".computer-Winner").style.visibility = "hidden"
    removeFunction();
    document.querySelector(".rock").style.visibility = "hidden"
    document.querySelector(".paper").style.visibility = "hidden"
    document.querySelector(".scissors").style.visibility = "hidden"

    document.querySelector(".computers-choice-rock").style.visibility = "hidden"
    document.querySelector(".computers-choice-paper").style.visibility = "hidden"
    document.querySelector(".computers-choice-scissors").style.visibility = "hidden"

    document.querySelector(".players-choice-rock").style.visibility = "hidden"
    document.querySelector(".players-choice-paper").style.visibility = "hidden"
    document.querySelector(".players-choice-scissors").style.visibility = "hidden"

});

//load animations
gsap.from(".player-rock", {duration: 1.3, opacity: 0,
y: () => Math.random() * 400 - 200, ease: "back"});
//animation paper button
gsap.from(".player-paper", {duration: 1.3, opacity: 0,
y: () => Math.random() * 400 - 200, ease: "back"});
//animation scissor button
gsap.from(".player-scissors", {duration: 1.3, opacity: 0,
y: () => Math.random() * 400 - 200, ease: "back"});
//animation for the computer score
gsap.from(".computers-container", {duration: 2,  x: -90, ease: "back"})
//animation for the players score
gsap.from(".players-container", {duration: 2,  x: 90, ease: "back"})
// animation for new game button 
gsap.from(".restart", {duration: 2,  x: 90, ease: "elastic"})



//checks the score for the winner
const checkScore = () => {
    if (score.computerScore >= 3) {
        document.querySelector(".computer-Winner").style.visibility = "visible"
        gsap.from(".computer-Winner", {duration: 1,  x: 90, ease: "bounce"})
    } else if (score.playerScore >= 3) {
        document.querySelector(".player-Winner").style.visibility = "visible"
        gsap.from(".player-Winner", {duration: 1,  x: 90, ease: "bounce"})
    }
}
  
const rockFunc = () => {
    document.querySelector(".rock").style.visibility = "visible"
    gsap.from(".rock", {duration: 2,  x: 90, ease: "bounce"})

}
const paperFunc = () => {
    document.querySelector(".paper").style.visibility = "visible"
    gsap.from(".paper", {duration: 2,  x: 90, ease: "bounce"})
}
const scissorsFunc = () => {
    document.querySelector(".scissors").style.visibility = "visible"
    gsap.from(".scissors", {duration: 2,  x: 90, ease: "bounce"})
}

//computers results
let computerSelectionRock = document.querySelector(".computers-choice-rock")
let computerSelectionPaper = document.querySelector(".computers-choice-paper")
let computerSelectionScissors = document.querySelector(".computers-choice-scissors")

// The computers random selection
const options = [computerSelectionRock, computerSelectionPaper, computerSelectionScissors];

//logic to run the code after the rock paper scissors queue.
const runRockLogic = (event) => {
    //animation for the results
    gsap.from(".computers-choice-rock", {duration: 1.5,  x: 80, ease: "bounce"});
    gsap.from(".computers-choice-paper", {duration: 1.5,  x: 80, ease: "bounce"});
    gsap.from(".computers-choice-scissors", {duration: 1.5,  x: 80, ease: "bounce"});
    // animation for player resuls
    gsap.from(".players-choice-rock", {duration: 1.5,  x: -20, ease: "bounce"});
    gsap.from(".players-choice-paper", {duration: 1.5,  x: -20, ease: "bounce"});
    gsap.from(".players-choice-scissors", {duration: 1.5,  x: -20, ease: "bounce"});


    document.querySelector(".players-choice-rock").style.visibility = "visible"
    document.querySelector(".players-choice-paper").style.visibility = "hidden"
    document.querySelector(".players-choice-scissors").style.visibility = "hidden"
//computer logic
    let computerOption = options[Math.floor(Math.random() * options.length)]
    if (computerOption === options[0]) {
        document.querySelector(".computers-choice-rock").style.visibility = "visible"
        document.querySelector(".computers-choice-paper").style.visibility = "hidden"
        document.querySelector(".computers-choice-scissors").style.visibility = "hidden"
    } else if (computerOption === options[1]) {
        document.querySelector(".computers-choice-paper").style.visibility = "visible"
        document.querySelector(".computers-choice-rock").style.visibility = "hidden"
        document.querySelector(".computers-choice-scissors").style.visibility = "hidden"
    } else {
        document.querySelector(".computers-choice-scissors").style.visibility = "visible"
        document.querySelector(".computers-choice-paper").style.visibility = "hidden"
        document.querySelector(".computers-choice-rock").style.visibility = "hidden"
    }
    game(event, null, null, computerOption);

}
//run paper logic
const runPaperLogic = (event) => {
    //animation for computer results
    gsap.from(".computers-choice-rock", {duration: 1.5,  x: 80, ease: "bounce"});
    gsap.from(".computers-choice-paper", {duration: 1.5,  x: 80, ease: "bounce"});
    gsap.from(".computers-choice-scissors", {duration: 1.5,  x: 80, ease: "bounce"});
    // animation for player results
    gsap.from(".players-choice-rock", {duration: 1.5,  x: -50, ease: "bounce"});
    gsap.from(".players-choice-paper", {duration: 1.5,  x: -50, ease: "bounce"});
    gsap.from(".players-choice-scissors", {duration: .5 , x: -50, ease: "bounce"});


    document.querySelector(".players-choice-paper").style.visibility = "visible"
    document.querySelector(".players-choice-rock").style.visibility = "hidden"
    document.querySelector(".players-choice-scissors").style.visibility = "hidden"
//computer logic
    let computerOption = options[Math.floor(Math.random() * options.length)]
    if (computerOption === options[0]) {
        document.querySelector(".computers-choice-rock").style.visibility = "visible"
        document.querySelector(".computers-choice-paper").style.visibility = "hidden"
        document.querySelector(".computers-choice-scissors").style.visibility = "hidden"
    } else if (computerOption === options[1]) {
        document.querySelector(".computers-choice-paper").style.visibility = "visible"
        document.querySelector(".computers-choice-rock").style.visibility = "hidden"
        document.querySelector(".computers-choice-scissors").style.visibility = "hidden"
    } else {
        document.querySelector(".computers-choice-scissors").style.visibility = "visible"
        document.querySelector(".computers-choice-paper").style.visibility = "hidden"
        document.querySelector(".computers-choice-rock").style.visibility = "hidden"
    }
    game(null, event, null, computerOption);
}
//run scissors logic
const runScissorsLogic = (event) => {
    //animation for computer result
    gsap.from(".computers-choice-rock", {duration: 1.5,  x: 80, ease: "bounce"});
    gsap.from(".computers-choice-paper", {duration: 1.5,  x: 80, ease: "bounce"});
    gsap.from(".computers-choice-scissors", {duration: 1.5,  x: 80, ease: "bounce"});
    //animation for player results
    gsap.from(".players-choice-rock", {duration: 1.5,  x: -20, ease: "bounce"});
    gsap.from(".players-choice-paper", {duration: 1.5,  x: -20, ease: "bounce"});
    gsap.from(".players-choice-scissors", {duration: 1.5,  x: -20, ease: "bounce"});

    document.querySelector(".players-choice-scissors").style.visibility = "visible"
    document.querySelector(".players-choice-paper").style.visibility = "hidden"
    document.querySelector(".players-choice-rock").style.visibility = "hidden"
// computer logic
    let computerOption = options[Math.floor(Math.random() * options.length)]
    if (computerOption === options[0]) {
        document.querySelector(".computers-choice-rock").style.visibility = "visible"
        document.querySelector(".computers-choice-paper").style.visibility = "hidden"
        document.querySelector(".computers-choice-scissors").style.visibility = "hidden"
    } else if (computerOption === options[1]) {
        document.querySelector(".computers-choice-paper").style.visibility = "visible"
        document.querySelector(".computers-choice-rock").style.visibility = "hidden"
        document.querySelector(".computers-choice-scissors").style.visibility = "hidden"
    } else {
        document.querySelector(".computers-choice-scissors").style.visibility = "visible"
        document.querySelector(".computers-choice-paper").style.visibility = "hidden"
        document.querySelector(".computers-choice-rock").style.visibility = "hidden"
    }
    game(null, null, event, computerOption);
}
//hide the game msg
const hideMsg = () => {
    document.querySelector(".rock").style.visibility = "hidden"
    document.querySelector(".paper").style.visibility = "hidden"
    document.querySelector(".scissors").style.visibility = "hidden"
}

    
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

const game = (rock, paper, scissors, computerOption) => {
     // functionality for duplicate choices
    if (computerOption === options[0] && rock) {
        document.querySelector(".draw").style.visibility = "visible"
        gsap.from(".draw", {duration: 1,  x: 90, ease: "bounce"})

    } else if (computerOption === options[1] && paper) {
        document.querySelector(".draw").style.visibility = "visible"
        gsap.from(".draw", {duration: 1,  x: 90, ease: "bounce"})

    } else if (computerOption === options[2] && scissors) {
        document.querySelector(".draw").style.visibility = "visible"
        gsap.from(".draw", {duration: 1,  x: 90, ease: "bounce"})
    } 

    // functionality for the game
    if(computerOption === options[0] && paper) {
        player.textContent = score.playerScore++ + 1;
        removeFunction();
        checkScore();
    } if (computerOption === options[0] && scissors) {
        computer.textContent = score.computerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerOption === options[1] && rock) {
        computer.textContent = score.computerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerOption === options[1] && scissors) {
        player.textContent = score.playerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerOption === options[2] && rock) {
        player.textContent = score.playerScore++ + 1
        removeFunction();
        checkScore();
    } if (computerOption === options[2] && paper) {
        computer.textContent = score.computerScore++ + 1
        removeFunction();
        checkScore();
    }
   
}


  



