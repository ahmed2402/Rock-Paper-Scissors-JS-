let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector(".userscore");
const compScorePara = document.querySelector(".compscore");

const genCompChoice = () => {
    const opts = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return opts[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw! Play Again.";
    msg.style.backgroundColor = "#466060";
    msg.style.color = "#F8C7CC";
    msg.style.fontFamily ="chiller";
    msg.style.fontSize ="2.5rem";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#0E0F19";
        msg.style.color = "#F1E4F3";
        msg.style.fontFamily ="chiller";
        msg.style.fontSize ="2.5rem";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#440D0F";
        msg.style.color = "white";
        msg.style.fontFamily ="chiller";
        msg.style.fontSize ="2.5rem";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice now
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // comp has paper or scissors
            userWin = compChoice === "paper"? false : true ;
        } else if(userChoice === "paper"){
            // comp has rock or scissors
            userWin = compChoice === "scissors"? false : true ;
        } else {
            userWin = compChoice === "rock" ? false : true ;
        }
     showWinner(userWin, userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});