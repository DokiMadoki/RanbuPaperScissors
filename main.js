let choices = ["✊", "🖐", "✌"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const wrapper = document.querySelector(".wrapper");
let gameResult = "";
function playGame(playerOption){
    const computerOption = choices[Math.floor(Math.random() * 3)];
    if (playerOption === computerOption){
        gameResult = "It is a Tie"
    }
    else{
        switch(playerOption){
            case "✊":
                gameResult = (computerOption === "✌") ? "You Win!" : "You Lose!";
                break;
            case "🖐":
                gameResult = (computerOption === "✊") ? "You Win!" : "You Lose!";
                break;
            case "✌":
                gameResult = (computerOption === "🖐") ? "You Win!" : "You Lose!";
                break;
        }
    }
    console.log(playerOption);
    console.log(computerOption);
    result.textContent = gameResult;
    playerChoice.textContent = `Simp: ${playerOption}`;
    computerChoice.textContent = `Mikazuki: ${computerOption}`;
    console.log(computerChoice.textContent);
    
    switch(gameResult){
        case "It is a Tie":
            wrapper.style.backgroundImage = "url(/images/c-tie.png)";
            break;
        case "You Lose!":
            wrapper.style.backgroundImage = "url(/images/c-win.png)";
            break;
        case "You Win!":
            wrapper.style.backgroundImage = "url(/images/c-loss.png)";
            break;
    }
}