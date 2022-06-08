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
let tabTwo = []
let scoreTabTwo = []
let holdButton = document.getElementById('hold')



let player = 1
if (dice.innerHTML == '1') {
    player = 2
}
console.log(dice.innerHTML)
function whoPlay() {

if (player == 1) {
    DicePlayerOne()
} else if (player == 2) {
    DicePlayerTwo()
}

}


function whoHold() {
    let player = 1

if (dice.innerHTML == '1') {
    player = 2
}

if (player == 1) {
    hold()
} else if (player == 2) {
    holdTwo()
}
}




function DicePlayerOne(min, max) {
    
    min = 1
    max = 7

    let random = Math.floor(Math.random() * (max - min) + min)
    dice.innerHTML = random
    
    if (random == 1) {
        scorePlayerOne.innerHTML = 0
        scoreTab = []
        currentPlayerOne.innerHTML = 0
        tab = []
        //player = 2
    }
/*
    if (player == 2) {
       rollDice.addEventListener('click', DicePlayerTwo)
       //alert(player)
    }
    */
    

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

function DicePlayerTwo(min, max) {
    
    min = 1
    max = 7

    let random = Math.floor(Math.random() * (max - min) + min)
    dice.innerHTML = random
    
    if (random == 1) {
        scorePlayerTwo.innerHTML = 0
        scoreTabTwo = []
        currentPlayerTwo.innerHTML = 0
        tabTwo = []
    }

    if (random > 1) {
        tabTwo.push(random)
    }    

    const initialValue = 0;
    const sumWithInitial = tabTwo.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    )
    
    currentPlayerTwo.innerHTML = sumWithInitial
}


function reload() {
    location.reload()
}

function hold() {
    alert('one')
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

function holdTwo() {
    alert('two')
    scorePlayerTwo.innerHTML = currentPlayerTwo.innerHTML
   
    let score = scorePlayerTwo.innerHTML
    
    scoreTabTwo.push(score)

    const initialValue = 0;
    const sumWithInitial = scoreTabTwo.reduce(
      (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
      initialValue
    )
    
    scorePlayerTwo.innerHTML = sumWithInitial

    currentPlayerTwo.innerHTML = 0
    tabTwo = []
}


rollDice.addEventListener('click', whoPlay)
//rollDice.addEventListener('click', DicePlayerTwo)
newGame.addEventListener('click', reload)
holdButton.addEventListener('click', whoHold)