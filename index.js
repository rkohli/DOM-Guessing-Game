let winningNumber = Math.ceil(Math.random() * 100)
let playerGuess = null 
let head = document.getElementById("title")
let subH = document.getElementById("subtitle")
let guessCounter = document.getElementById("guessCounter")
let currentCount = 5
let guessButton = document.getElementById("submit")
let retry = document.getElementById("retry")

retry.addEventListener("click", function(){
    currentCount = 5;
    guessCounter.textContent = currentCount;
    winningNumber = Math.ceil(Math.random() * 100)
    guessButton.disabled = false;
    head.textContent = "Guessing Game"
    subH.textContent = "Guess a number between 1 - 100"
})
guessButton.addEventListener("click", function() {
    let playerGuess = document.getElementById("playerInput").value
    if (isNaN(playerGuess)) {
        subH.textContent = "Please enter an integer"
    } else if (playerGuess < 1 || playerGuess > 100) {
        subH.textContent = "Only numbers between 1 - 100"
    } else {
        if (currentCount === 1) {
            head.textContent = "You're fucking stupid"
            subH.textContent = "Try again"
            currentCount = currentCount - 1;
            guessCounter.textContent = currentCount
            guessButton.disabled = true;

        }
         else if (playerGuess < winningNumber) {
            head.textContent = "Your guess was too low."
            currentCount = currentCount - 1;
            guessCounter.textContent = currentCount

        }
        else if (playerGuess > winningNumber){
            head.textContent = "Your guess was too high."
            currentCount = currentCount - 1;
            guessCounter.textContent = currentCount
        }
        else if (playerGuess = winningNumber) {
            head.textContent = `You win! The number was ${playerGuess}`
            subH.textContent = "YAAAAAAAY"
            guessButton.disabled = true;
    }
}
})



// console.log(guessCounter)
console.log(winningNumber)

