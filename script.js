let dice = document.getElementById('dice')
let rollDice = document.getElementById('roll-dice')
let newGame = document.getElementById('new-game')


function getDice(min, max) {
    
    min = 1
    max = 7

    let random = Math.floor(Math.random() * (max - min) + min)
    dice.innerHTML = random
}

function reload() {
    location.reload()
}

rollDice.addEventListener('click', getDice)
newGame.addEventListener('click', reload)