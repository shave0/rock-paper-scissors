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

function getPlayerChoice(){
    //let tempPlayerChoice = buttonVal;
    playRound("Rock", getComputerChoice());
}

let scoreComputer = 0;
let scoreUser = 0;

function playRound(playerSelection, computerSelection){

    const userId = document.getElementById("userScore");
    const computerId = document.getElementById("computerScore");
    const resultId = document.getElementById("resultDiv");

    //return playerSelection();
    //console.log("function");
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
            return "Win, Paper beats Rock";
        }
        else{
            console.log('Loose, Rock Beats Scissors');
            scoreComputer++;
            computerId.innerHTML = "Computer Score: " + scoreComputer;
            resultId.innerHTML = 'Loose, Rock Beats Scissors';
            return 'Loose, Rock Beats Scissors';
        } //User Scissors, Computer Rock
    }

    else if(computerSelection == 'paper'){
        if(playerSelection == 'rock') {
            console.log('Loose, Paper beats Rock');
            scoreComputer++;
            computerId.innerHTML = "Computer Score: " + scoreComputer;
            resultId.innerHTML = 'Loose, Paper beats Rock';
            return 'Loose, Paper beats Rock';
        }

        //Scissors
        else{
            console.log('Win, Scissors Beats Rock');
            scoreUser++;
            userId.innerHTML = "User Score: " + scoreUser;
            resultId.innerHTML = 'Win, Scissors Beats Rock';
            return 'Win, Scissors Beats Rock';
        }
    }   

    else{
        if(playerSelection == 'rock') {
            console.log('Win, Rock beats Scissors');
            scoreUser++;
            userId.innerHTML = "User Score: " + scoreUser;
            resultId.innerHTML = 'Win, Rock beats Scissors';
            return 'Win, Rock beats Scissors';
        }

        else(playerSelection == 'paper')
            console.log('Loose, Scissors beats Paper');
            scoreComputer++;
            computerId.innerHTML = "Computer Score: " + scoreComputer;
            resultId.innerHTML = 'Loose, Scissors beats Paper';
            return'Loose, Paper beats Scissors';
        
    }

}
