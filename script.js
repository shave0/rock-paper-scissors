function getComputerChoice(){
    let computerInput = Math.floor(Math.random() * 3);

    if(computerInput === 0){
        return "Rock";
    }

    else if( computerInput === 1){
        return "Paper";
    }

    else{
        return "Scissors";
    }
}

function startGame(){
    playRound(getPlayerChoice(), getComputerChoice());
}

let scoreComputer = 0;
let scoreUser = 0;

function playRound(playerSelection, computerSelection){

    const userId = document.getElementById("userScore");
    const computerId = document.getElementById("computerScore");
    const resultId = document.getElementById("resultDiv");

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(computerSelection == playerSelection){
        console.log('Draw, both ' + computerSelection);
        resultId.innerHTML = 'Draw, both ' + computerSelection;
        return "Draw, both " + computerSelection; //draw
    }

    if(computerSelection == 'rock'){
        if(playerSelection == 'paper'){
            console.log('Win, Paper beats Rock');
            scoreUser++;
            userId.innerHTML = "User Score: " + scoreUser;
            resultId.innerHTML = 'Win, Paper beats Rock';
            if(scoreUser > 4){
                gameOver("player");
            }
            return "Win, Paper beats Rock";
        }
        else{
            console.log('Loose, Rock Beats Scissors');
            scoreComputer++;
            computerId.innerHTML = "Computer Score: " + scoreComputer;
            resultId.innerHTML = 'Loose, Rock Beats Scissors';
            if(scoreComputer > 4){
                gameOver("com");
            }
            return 'Loose, Rock Beats Scissors';
        } //User Scissors, Computer Rock
    }

    else if(computerSelection == 'paper'){
        if(playerSelection == 'rock') {
            console.log('Loose, Paper beats Rock');
            scoreComputer++;
            computerId.innerHTML = "Computer Score: " + scoreComputer;
            resultId.innerHTML = 'Loose, Paper beats Rock';
            if(scoreComputer > 4){
                gameOver("com");
            }
            return 'Loose, Paper beats Rock';
        }

        //Scissors
        else{
            console.log('Win, Scissors Beats Rock');
            scoreUser++;
            userId.innerHTML = "User Score: " + scoreUser;
            resultId.innerHTML = 'Win, Scissors Beats Rock';
            if(scoreUser > 4){
                gameOver("player");
            }
            return 'Win, Scissors Beats Rock';
        }
    }   

    else{
        if(playerSelection == 'rock') {
            console.log('Win, Rock beats Scissors');
            scoreUser++;
            userId.innerHTML = "User Score: " + scoreUser;
            resultId.innerHTML = 'Win, Rock beats Scissors';
            if(scoreUser > 4){
                gameOver("player");
            }
            return 'Win, Rock beats Scissors';
        }

        else(playerSelection == 'paper')
            console.log('Loose, Scissors beats Paper');
            scoreComputer++;
            computerId.innerHTML = "Computer Score: " + scoreComputer;
            resultId.innerHTML = 'Loose, Scissors beats Paper';
            if(scoreComputer > 4){
                gameOver("com");
            }
            return'Loose, Paper beats Scissors';
        
    }

}

function gameOver(winner){

    const gameOverId = document.getElementById("gameOverDiv");
    const buttons = document.querySelectorAll('button');

    if(winner == 'com'){
        gameOverId.innerHTML = "Computer wins overall"
    }
    else{
        gameOverId.innerHTML = "Player wins overall"
    }

    buttons.forEach((button) => {button.style.backgroundColor = 'darkgray'; button.onclick = "";});
    
}
