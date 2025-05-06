let humanScore = 0
let computerScore = 0
let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    if (num ===1){
        return choices[0]
    }
    else if (num ===2){
        return choices[1]
    }
    else{
        return choices[2]
    }
}

function getHumanChoice(){
    let choice = prompt('rock, paper, scissors?')
    return choice.toLowerCase()
}

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        return 'Tie'
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++
        return 'Player wins'
    }else if (humanChoice === 'rock' && computerChoice === 'paper')
        computerScore++
        return 'Computer wins'
    }

    function game() {
        let rounds = 5
        for (let i = 0; i < rounds; i++) {
            let humanChoice = getHumanChoice();
            if (!humanChoice) {
                console.log('Game cancelled.');
                break;
            }
            let computerChoice = getComputerChoice();
            console.log(`Round ${i + 1}:`);
            console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`);
            console.log(playRound(humanChoice, computerChoice));
            console.log(`Scores => You: ${humanScore}, Computer: ${computerScore}`);
        }
    
        console.log('Game Over!');
        if (humanScore > computerScore) {
            console.log('Congratulations, you win!');
        } else if (humanScore < computerScore) {
            console.log('Computer wins. Better luck next time');
        } else {
            console.log('It\'s a tie');
        }
    }