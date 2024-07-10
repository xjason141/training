//prompt-sync
let x = require('prompt-sync')({sigint: true});

console.log('Game started:');

//win conditions for X
let x1 = (' 1' + ' | ' + '2' + ' | ' + '3');
x1.charAt(1) = '5';
console.log(x1)


//game board
// console.log(' 1' + ' | ' + '2' + ' | ' + '3')
// console.log(' ---------')
// console.log(' 4' + ' | ' + '5' + ' | ' + '6')
// console.log(' ---------')
// console.log(' 7' + ' | ' + '8' + ' | ' + '9')

// let board = x(' 1' + ' | ' + '2' + ' | ' + '3');