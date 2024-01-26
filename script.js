let userscore = 0;  //crete a userscore to store user score
let compscore = 0;  //crete a compscore to store computer score

const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const showWinner = (useWin,userChoice,compChoice) =>{
    if(useWin){
        console.log("You win!");
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `You win ${userChoice} beat ${compChoice}`;
        msg.style.background = "Green";
        msg.style.fontSize = "2.5rem";
    }else{
        console.log("You lose");
        compscore++;
        compScore.innerText = compscore;
        msg.innerText = `You lose ${compChoice} beat ${userChoice}`;
        msg.style.background = "red";
        msg.style.fontSize = "2.5rem";
    }
}

const drawGame = () =>{
    console.log("draw match");
    msg.innerText = "Draw Match, Please try again";
    msg.style.background = "rgb(24, 52, 1)";
    msg.style.fontSize = "2.5rem";
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice)

    // To genrete computer choice
    const compChoice = getCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        //draw game
        // console.log("Draw Match");
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const getCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
} 

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        // console.log("clicked");
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
});
