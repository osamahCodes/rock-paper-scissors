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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection===computerSelection) {
        return `Tie Game! both players played ${playerSelection}`;
    }else if (playerSelection==='rock') {
        if(computerSelection==='paper'){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection==='paper') {
        if(computerSelection==='scissors'){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else{
        if(computerSelection==='rock'){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }else{
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));