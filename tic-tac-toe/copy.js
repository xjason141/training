/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    if (board[position] = ' ')
        board[position] = mark;
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    updatedBoard = {
        1: ' ', 2: ' ', 3: ' ',
        4: ' ', 5: ' ', 6: ' ',
        7: ' ', 8: ' ', 9: ' '
    };
    for (pos in updatedBoard){
        if (board[pos] == ' '){
            updatedBoard[pos] = pos;
        } else {
            updatedBoard[pos] = board[pos];
        }
    }
    
    console.log(
        '',updatedBoard[1],'|',updatedBoard[2],'|',updatedBoard[3],'\n' +
        ' --------- \n' +
        '',updatedBoard[4],'|',updatedBoard[5],'|',updatedBoard[6],'\n' +
        ' --------- \n' +
        '',updatedBoard[7],'|',updatedBoard[8],'|',updatedBoard[9],'\n');

}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    if (board[position] == ' '){
        if (position>0 && position<10){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3], [3, 5, 7], [4, 5, 6], [7, 8, 9],
    [1, 4, 7,], [1, 5, 9], [2, 5, 8], [3, 6, 9]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (winSet of winCombinations){
        if (board[winSet[0]] == player && board[winSet[1]] == player && board[winSet[2]] == player){
            return true;
        }
    }
    return false
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    let count = 0;
    for (pos in board){
        if(board[pos] == ' '){
            return false
        } else {
            count ++;
        }
    } if (count != 9){
        return false
    } else {
        return true
    }
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
    if (checkFull()) {
        console.log('Its a tie');
        winnerIdentified = true;
        retry()
    };
    
    let choice = prompt(player + '\'s turn: ');
    if (validateMove(choice) && player == 'X') {
        markBoard(choice, player);
        printBoard();
        counter++;
        if (checkWin(player)){
            console.log('Player ' + player + ' wins.');
            winnerIdentified = true;
            retry()
        }
    } else if (validateMove(choice) && player == 'Y') {
        markBoard(choice, player);
        printBoard();
        counter--;
        if (checkWin(player)){
            console.log('Player ' + player + ' wins.')
            winnerIdentified = true;
            retry()
        }
    } else {
        console.log('Invalid move. Try again.')
    }    
}

// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'
let counter = 0;

function playGame(){
    while (!winnerIdentified){
        // feel free to add logic here if needed, e.g. announcing winner or tie
        if (counter == 0){
            currentTurnPlayer = 'X';
            playTurn(currentTurnPlayer);
        } else {
            currentTurnPlayer = 'Y';
            playTurn(currentTurnPlayer)
        }
    }
}
// Bonus Point: Implement the feature for the user to restart the game after a tie or game over

function retry (){
    if (winnerIdentified == true){
        let ask = prompt('Do you want to play again? Y/N: ').toUpperCase();
        if (ask == 'Y') {
            for (i in board) {
                board[i] = ' ';
            }
            winnerIdentified = false;
            counter = 0;
            playGame()
        } else {
            console.log('Thanks for playing. Goodbye.');
        }
    }
}

//line below runs the script
playGame()



