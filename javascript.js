const score = document.querySelector('#score');
score.textContent = "Who is going to win?";
const log = document.querySelector('#log');
log.textContent = "To start a new game pick and click Rock, Paper or Scissor!";
let options = ["rock", "paper", "scissor"];
let playerScore = 0; 
let computerScore = 0;
function getComputerChoice(){
    let rng = Math.floor(Math.random() * 3);
    return options[rng];
}

function getPlayerSelection(){
    let choice = prompt("Rock, Paper or Scissor?");
    return choice.toLowerCase();
}
       

function playRound(playerChoice){
    //let playerChoice = getPlayerSelection();
    let computerChoice = getComputerChoice();
    let result = "";
    if (computerChoice == "rock" && playerChoice == "paper"){
        result = "Player win the match";
        playerScore++; 
     } else if (computerChoice == "rock" && playerChoice == "scissor"){
        result = "Computer win the match";
        computerScore++;
    } else if (computerChoice == "paper" && playerChoice == "scissor"){
        result = "Player win the match";
        playerScore++; 
    } else if (computerChoice == "paper" && playerChoice == "rock"){
        result = "Computer win the match";
        computerScore++;
    } else if (computerChoice == "scissor" && playerChoice == "rock"){
        result = "Player win the match";
        playerScore++; 
    } else if (computerChoice == "scissor" && playerChoice == "paper"){
        result = "Computer win the match";
         computerScore++;
     } else {
         result = "Draw, you both get a point";
        playerScore++;
        computerScore++;
    }
    let scoreString = `Player ${playerScore} - Computer ${computerScore}`;
    let resultString = `You picked ${playerChoice}, computer picked ${computerChoice}. ${result}`;
    if (playerScore == 5){
         resultString = " Player win the game!";
         playerScore = 0;
         computerScore = 0;
     } else if (computerScore == 5){
        resultString = " Computer win the game!";
        playerScore = 0;
         computerScore = 0;
     }
     score.innerHTML = scoreString;
     log.innerHTML = resultString;
    //div.textContent = resultString;
     //return resultString;
 }
// old function
 function game(){
    playerScore, computerScore = 0;
    for(let i = 0; i < 5; i++){
        playRound();  
    }
    let gameResult = `GG! Final result is: Player ${playerScore} - Computer ${computerScore}`;
    if (playerScore > computerScore) {
        return `${gameResult}. Player won!`;
    } else if (computerScore > playerScore){
        return `${gameResult}. Computer won!`;
    } else {
        return `${gameResult}. It's a draw!`;
       }
       
}