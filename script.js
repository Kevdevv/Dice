let dice = document.getElementById('dice')
let rollDice = document.getElementById('roll-dice')
let newGame = document.getElementById('new-game')
let playerOne = document.getElementById('p1')
let playerTwo = document.getElementById('p2')
let scorePlayerOne = document.getElementById('score-p1')
let scorePlayerTwo = document.getElementById('score-p2')
let currentPlayerOne = document.getElementById('current-p1')
let currentPlayerTwo = document.getElementById('current-p2')
let tab = []
let scoreTab = []
let holdButton = document.getElementById('hold')

function Dice(min, max) {
    
    min = 1
    max = 7

    let random = Math.floor(Math.random() * (max - min) + min)
    dice.innerHTML = random
    
    if (random == 1) {
        scorePlayerOne.innerHTML = 0
        scoreTab = []
        currentPlayerOne.innerHTML = 0
        tab = []
    }

    if (random > 1) {
        tab.push(random)
    }    

    const initialValue = 0;
    const sumWithInitial = tab.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    )
    
    currentPlayerOne.innerHTML = sumWithInitial
}


function reload() {
    location.reload()
}

function hold() {
    scorePlayerOne.innerHTML = currentPlayerOne.innerHTML
   
    let score = scorePlayerOne.innerHTML
    
    scoreTab.push(score)

    const initialValue = 0;
    const sumWithInitial = scoreTab.reduce(
      (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
      initialValue
    )
    
    scorePlayerOne.innerHTML = sumWithInitial

    currentPlayerOne.innerHTML = 0
    tab = []
}

rollDice.addEventListener('click', Dice)
newGame.addEventListener('click', reload)
holdButton.addEventListener('click', hold)