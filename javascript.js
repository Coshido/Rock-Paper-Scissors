const div = document.querySelector('#result');
        div.textContent = "Who is gonna win?";
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
                result = "Player wins";
                playerScore++; 
            } else if (computerChoice == "rock" && playerChoice == "scissor"){
                result = "Computer wins";
                computerScore++;
            } else if (computerChoice == "paper" && playerChoice == "scissor"){
                result = "Player wins";
                playerScore++; 
            } else if (computerChoice == "paper" && playerChoice == "rock"){
                result = "Computer wins";
                computerScore++;
            } else if (computerChoice == "scissor" && playerChoice == "rock"){
                result = "Player wins";
                playerScore++; 
            } else if (computerChoice == "scissor" && playerChoice == "paper"){
                result = "Computer wins";
                computerScore++;
            } else {
                result = "Draw";
                playerScore++;
                computerScore++;
            }
            resultString = `${result}, computer picked ${computerChoice}.<br>Current score: Player ${playerScore} - Computer ${computerScore} <br>`;       
            if (playerScore == 5){
                resultString += " Player wins!";
                playerScore = 0;
                computerScore = 0;
            } else if (computerScore == 5){
                resultString += " Computer wins!";
                playerScore = 0;
                computerScore = 0;
            }
            div.innerHTML = resultString;
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