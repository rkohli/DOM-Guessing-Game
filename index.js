const winningNumber = Math.ceil(Math.random() * 100)
let playerGuess = null 
let head = document.getElementById("title")
let subH = document.getElementById("subtitle")


let guessButton = document.getElementById("submit")

guessButton.addEventListener("click", function() {
    let playerGuess = document.getElementById("playerInput").value
    if (isNaN(playerGuess)) {
        subH.textContent = "Please enter an integer"
    } else if (playerGuess < 1 || playerGuess > 100) {
        subH.textContent = "Only numbers between 1 - 100"
    } else {
        if (playerGuess = winningNumber) {
            head.textContent = `You win! The number was ${playerGuess}`
            subH.textContent = "YAAAAAAAY"
            guessButton.prop("disabled", true)
        } 
    }
})


console.log(winningNumber)