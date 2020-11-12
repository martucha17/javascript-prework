// FUNCTIONS
function getMoveName(argMoveId) {
    if (argMoveId == 1) return 'kamień';
    else if (argMoveId == 2) return 'papier';
    else if (argMoveId == 3) return 'nożyce';
    else printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
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

// MOVES

//compute moves
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

// player moves
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

//RESULT
displayResult(computerMove, playerMove);











