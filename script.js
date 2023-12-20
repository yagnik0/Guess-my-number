let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrhigh = document.querySelector('.loworhigh');
const startOver = document.querySelector('.resultstore');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess){
    // this function checks values between 1 to 100
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1){
        alert('Please enter a number more than 1')
    } else if (guess > 100){
        alert('Please enter a number less than a 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endgame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // this function checks whether the value is equal to random  number or low or high if it's then do it in displayMessage
    if (guess === randomNumber) {
        displayMessage(`You guessed it right `)
        endgame()
    } else if (guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess){
    // thi function cleans the value and update previous guesss and guess remaining
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // this function prints the message low or high
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
     // this function ends the game
     userInput.value = ''
     userInput.setAttribute('disabled', '')
     p.classList.add('button')
     p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
     startOver.appendChild(p)
     playGame = false
     newGame();
}


function newGame(){
    // this function starts the new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.replaceChild(p);
        playGame = true;
    })
}


