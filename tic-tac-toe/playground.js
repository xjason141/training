let game = {
    1: 'X',
    2: 'O',
    3: 'X',
    4: 'O',
    5: 'X',
    6: 'O',
    7: 'X'
}

let combo = [[1,2,3],[3,5,7]];
counter = 0;

for (winSet in combo){
    let winCheck = combo[winSet];
    for (things in winCheck){
        if (game[winCheck[things]] == 'X'){
            counter++;
            if (counter==3){
                console.log('player x wins')
            }
            }
        }
    }
