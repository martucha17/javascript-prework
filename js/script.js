//HTML REFERENCES

let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');
let scissorsBtn = document.querySelector('#scissors-btn');

// FUNCTIONS

function getMoveName(argMoveId) {
    if (argMoveId == 1) return 'kamień';
    else if (argMoveId == 2) return 'papier';
    else if (argMoveId == 3) return 'nożyce';
}

function displayResult(argComputerMove, argPlayerMove) {
    let condition = (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'))

    if (condition) printMessage('Ty wygrywasz!');
    else if (argComputerMove == argPlayerMove) printMessage('Remis!');
    else printMessage('Ty przegrywasz!');
}

function playGame(playerInput){

    // clear messages
    clearMessages();

    //compute moves
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    
    // player moves
    let playerMove = getMoveName(playerInput);
    
    // render player and computer chocies in HTML
    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);

    //result
    displayResult(computerMove, playerMove);

    
}

//MAIN PROCESS

rockBtn.addEventListener('click', function() {
    playGame(1);
});

paperBtn.addEventListener('click', function() {
    playGame(2);
});

scissorsBtn.addEventListener('click', function() {
    playGame(3);
});















