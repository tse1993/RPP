let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function getComputerChoice(){
    let num = Math.floor(Math.random()* 3) 
    if (num === 1){
        return 'Rock'
    }
    else if (num === 2){
        return 'Paper'
    }
    else 
    return 'Scissors'
}
 
function getHumanChoice(){
    let humanChoice = prompt('Rock, Paper, Scissors')
    return humanChoice
}

function playRound(humanChoice, computerChoice){
    let humanChoice = humanSelection
    let computerChoice = computerSelection
    if (humanChoice === computerChoice)
        return 'Tie'
    else if (humanChoice === 'Rock' && computerChoice === 'Paper')
        return 'Computer wins'
    else if (humanChoice === 'Rock' && computerChoice === 'Scissors')
        return 'Human wins'
}