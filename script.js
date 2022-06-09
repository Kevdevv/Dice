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
let button = document.getElementById('test')



function player() {
    return 1
  }
  let joueur = player()

  whoPlay(joueur)

function DicePlayerOne() {
    
    min = 1
    max = 7

    let random = Math.floor(Math.random() * (max - min) + min)
    dice.innerHTML = random
    
    if (random == 1) {

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

    if (currentPlayerOne.innerHTML == '0') {
        function player() {
            return 2
          }
          let joueur = player()
        
          whoPlay(joueur)
    }
}

function DicePlayerTwo() {
    
    min = 1
    max = 7

    let random = Math.floor(Math.random() * (max - min) + min)
    dice.innerHTML = random
    
    if (random == 1) {
     
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

    if (currentPlayerTwo.innerHTML == '0') {
        function player() {
            return 1
          }
          let joueur = player()
        
          whoPlay(joueur)
    }
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

    if (sumWithInitial >= '100') {
        alert('Player 1 win')
        reload()
    }

    currentPlayerOne.innerHTML = 0
    tab = []


    function player() {
        return 2
      }
      let joueur = player()
    
      whoPlay(joueur)

}

function whoPlay(joueur) {

    if (joueur === 1) {
        console.log('p1')
        rollDice.removeEventListener('click', DicePlayerTwo)
        rollDice.addEventListener('click', DicePlayerOne)
        holdButton.addEventListener('click', hold)
        holdButton.removeEventListener('click', holdTwo)
        playerTwo.classList.remove('red')
        playerOne.classList.add('red')
    } 

    if (joueur === 2) {
    console.log('p2')
        rollDice.removeEventListener('click', DicePlayerOne)
        rollDice.addEventListener('click', DicePlayerTwo)
        holdButton.addEventListener('click', holdTwo)
        holdButton.removeEventListener('click', hold)
        playerTwo.classList.add('red')
        playerOne.classList.remove('red')
    }

}

function holdTwo() {

    scorePlayerTwo.innerHTML = currentPlayerTwo.innerHTML
   
    let score = scorePlayerTwo.innerHTML
    
    scoreTabTwo.push(score)

    const initialValue = 0;
    const sumWithInitial = scoreTabTwo.reduce(
      (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
      initialValue
    )
    
    scorePlayerTwo.innerHTML = sumWithInitial

    if (sumWithInitial >= '100') {
        alert('Player 2 win')
        reload()
    }

    currentPlayerTwo.innerHTML = 0
    tabTwo = []


    function player() {
        return 1
      }
      let joueur = player()
    
      whoPlay(joueur)
      
}

rollDice.addEventListener('click', whoPlay)
newGame.addEventListener('click', reload)
