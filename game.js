let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
let attempts = 0;
let userGuess = false;
// Prompt user for a number between 1 and 10, or type 999 to exit.
let userNum;
// Create while loop that continues for as long as the user guesses are incorrect.
while (userGuess === false) {
    // Loop should count the number of guesses.
    // Loop should exit if user enters 999 and not display "Too high!"
    // If the guess is too low, the user should be promped "Too low!" and be able to guess again.
    // If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
    // If anything else is entered, the user should be prompted that their input is invalid and 
    // to guess again.

    // If the guess is correct, the user should be alerted of their win and 
    // be told the number of guesses they made.
    attempts ++
    userNum = Number(prompt("Enter a number whole number 1-10 inclusive or 999 to end game"))
    if (userNum === 999){
        console.log("The game is over")
        console.log(`You made ${attempts} guesses`)
        break
    }
    else if (userNum === randomNumber){
        console.log("WOW you did it! Good job!")
        console.log(`You made ${attempts} guesses`)
        break
    }
    else if (userNum > randomNumber){
        console.log("Your guess was too high")
    }
    else if (userNum < randomNumber){
        console.log("Your guess was too low")
    }
    else {
        console.log("You did not enter a number")
    }
}
