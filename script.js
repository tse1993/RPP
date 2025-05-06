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