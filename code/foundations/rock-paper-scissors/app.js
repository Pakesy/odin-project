// Rock Paper Scissors Game

let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

// Generate Computer Choice

function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS']
    return choices[Math.floor(Math.random() * choices.length)]
}

// Get Player Choice

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id)
    })
})

// Disable Buttons on game end

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// Game Logic

function playRound(playerChoice) {
    let computerChoice = computerPlay()
    let result = ""

    if ((playerChoice == 'ROCK' && computerChoice == 'SCISSORS') ||
        (playerChoice == 'SCISSORS' && computerChoice == 'PAPER') ||
        (playerChoice == 'PAPER' && computerChoice == 'ROCK')) {
        
        playerScore ++
        result = ('You win! ' + playerChoice + ' beats ' + computerChoice + "<br><br>"
            + "<hr>Player: " + playerScore + "<br>Computer: " + computerScore) + "<hr>"

        if (playerScore == 5) {
            result += '<br> Game Over: <strong>You win!</strong> <br> Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerChoice == computerChoice) {
        result = ('It\'s a tie. You both chose ' + playerChoice + "<br><br>"
            + "<hr>Player: " + playerScore + "<br>Computer: " + computerScore) + "<hr>"
    }
    else {
        computerScore ++
        result = ('You lose! ' + computerChoice + ' beats ' + playerChoice + "<br><br>"
            + "<hr>Player: " + playerScore + "<br>Computer: " + computerScore)+ "<hr>"

        if (computerScore == 5) {
            result += '<br> Game Over: <strong>Computer Wins!</strong> <br> Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result-display').innerHTML = result
    return
}
