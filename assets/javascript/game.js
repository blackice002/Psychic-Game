
// generating computer choices .
var computerChoice =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97);

// variable for wins losses guesses left.
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var lettersGuessed = [];
            // var showResult = [" You Won !!!", "You Lose!! Try again"];


//  function for winner count


function userWins() {
    document.getElementById("wins-count").innerHTML = wins;
}

// function for losses count
function userlosses() {
    document.getElementById("losses-count").innerHTML = losses;
}

// function for remaining number
function RemainingGuess() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    guessesLeft--;
}

// function for gussed letter
function userGuessedLetters() {
    var displayletter = lettersGuessed.join(" ");
    document.getElementById("playerGuess").innerHTML = displayletter;
}

            // function showFinalResult() {
            //     document.getElementById("showResult").innerHTML = showResult;
            // }


// variable define for userchoice
document.onkeyup = function (event) {
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    lettersGuessed.push(userChoice);
    guessMatch(userChoice);
}
//  function to find matchesh between user choice and computer choice

function guessMatch(character) {

    if (character === computerChoice) {
        wins++;
        alert( "You Did it!");
        userWins();
        // showFinalResult();
        reset();

    }
    else if (guessesLeft === 0) {
        losses++;
        alert("Upps! try Again");
        userlosses();
        // showFinalResult();
        reset();
    }
    else {
        RemainingGuess();
        userGuessedLetters();
    }
}

// game reset

function reset() {
    computerChoice =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97);
    lettersGuessed = [];
    guessesLeft = 6;
    userWins();
    userlosses();

}

function startGame() {
    RemainingGuess();
    userWins();
    userlosses();

}


startGame();