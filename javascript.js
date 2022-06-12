function computerPlay(){
    let randomNumber= Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(randomNumber==1){
        return 'rock';
    }else if (randomNumber==2) {
        return 'paper';
    }else{
        return 'scissors';
    }

}

function playRound(computerSelection) {
    let playerSelection = this.classList.value;
    round.textContent = (parseInt(round.textContent)+1).toString();
    if (playerSelection===computerSelection) {
        return;
        // return `Tie Game! both players played ${playerSelection}`;
    }else if (playerSelection==='rock') {
        if(computerSelection==='paper'){
            computerScore.textContent = (parseInt(computerScore.textContent)+1).toString();
            return;
            // return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            playerScore.textContent = (parseInt(playerScore.textContent)+1).toString();
            return;
            // return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection==='paper') {
        if(computerSelection==='scissors'){
            computerScore.textContent = (parseInt(computerScore.textContent)+1).toString();
            return;
            // return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            playerScore.textContent = (parseInt(playerScore.textContent)+1).toString();
            return;
            // return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else{
        if(computerSelection==='rock'){
            computerScore.textContent = (parseInt(computerScore.textContent)+1).toString();
            return;
            // return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            playerScore.textContent = (parseInt(playerScore.textContent)+1).toString();
            return;
            // return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        
    }
}

function game(){
    const buttons = document.querySelectorAll('button');
    const playerScore = document.querySelector('player');
    const computerScore = document.querySelector('computer');
    const round = document.querySelector('round');
    buttons.forEach(button => button.addEventListener('click', playRound(computerPlay())))
    // for (let i = 0; i < 5; i++) {
    //     // let playerSelection = prompt("rock, paper, or scissors?");
    //     let computerSelection = computerPlay();
    //     console.log(playRound(playerSelection, computerSelection));
    // }
}



game()