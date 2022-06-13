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

function playRound(computerSelection, playerSelection) {
    // console.log(this);
    // let playerSelection = this.classList.value;
    // console.log(playerSelection);
    if (playerSelection===computerSelection) {
        // computerScore.textContent = (parseInt(computerScore.textContent, 10)+1).toString();
        // playerScore.textContent = (parseInt(playerScore.textContent, 10)+1).toString();
        round.textContent = (parseInt(round.textContent, 10)-1).toString();
        return;
        // return `Tie Game! both players played ${playerSelection}`;
    }else if (playerSelection==='rock') {
        if(computerSelection==='paper'){
            computerScore.textContent = (parseInt(computerScore.textContent, 10)+1).toString();
            return;
            // return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            playerScore.textContent = (parseInt(playerScore.textContent, 10)+1).toString();
            return;
            // return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection==='paper') {
        if(computerSelection==='scissors'){
            computerScore.textContent = (parseInt(computerScore.textContent, 10)+1).toString();
            return;
            // return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            playerScore.textContent = (parseInt(playerScore.textContent, 10)+1).toString();
            return;
            // return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else{
        if(computerSelection==='rock'){
            computerScore.textContent = (parseInt(computerScore.textContent, 10)+1).toString();
            return;
            // return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            playerScore.textContent = (parseInt(playerScore.textContent, 10)+1).toString();
            return;
            // return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        
    }
}

function game(){
    const buttons = document.querySelector('.buttons');

    function listens(e){
        round.textContent = (parseInt(round.textContent, 10)+1).toString();
        
        const isButton = e.target.nodeName === 'BUTTON';
        // console.log(isButton);
        if(!isButton){
            return;
        }else{
            playRound(computerPlay(), e.target.classList.value);
        }
        if((parseInt(playerScore.textContent,10))===5){
            buttons.removeEventListener('click', listens);
            footer.textContent = 'You won!!! restart to try again';

            
        }else if((parseInt(computerScore.textContent,10))===5){
            buttons.removeEventListener('click', listens);    
            footer.textContent = 'You lost :( restart to try again';
  
        }
    }

    buttons.addEventListener('click', listens)
    

    // for (let i = 0; i < 5; i++) {
    //     // let playerSelection = prompt("rock, paper, or scissors?");
    //     let computerSelection = computerPlay();
    //     console.log(playRound(playerSelection, computerSelection));
    // }
}
let playerScore = document.querySelector('.player');
let computerScore = document.querySelector('.computer');
let round = document.querySelector('.round');
let footer = document.querySelector('.footer');
game()