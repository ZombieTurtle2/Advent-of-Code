//Test comment
//Imports the fs module
const fs = require("fs");

let lines = fs
    //Open the file
    .readFileSync("input.txt")
    //Convert to string
    .toString()
    //Split it on new lines (\r\n)
    .split('\r\n');

//Define empty array to fill later
let matches = [];
//Loop over lines. Entry is a new variable that exists while the loop is running
for (let entry of lines) {
    //Push a match into matches
    matches.push(
        [
            entry[0],
            entry[2]
        ]
    );
};

let score = 0;
const lose = 0;
const draw = 3;
const win = 6;

const a = 1;
const x = 1;
const b = 2;
const y = 2;
const c = 3;
const z = 3;


// rock(a,x) = 1, paper(b,y) = 2, scissors(c,z) = 3, lose = 0, draw = 3, win = 6
//a,b,c for opponent, x,y,z for you

for (let opponentPick of matches) {
    if (opponentPick[0] == a) {
        myPick = x;
        outcome = 'Lose';
        points = 4;
    elseif 
        //if opponentPick[0] == 'Z' {
            //LOSE
            //Reward points
        //}
        //else if
        //else if
    } else if (match[0] == 'B') {
        //if
        //else if
    } else if (match[0] == 'C') {
        //if
        //else if
    }
};

//if opponent chooses a
//  and I choose x
//      then draw
//      points = 4, 1 for x, 3 for draw
//  elseif I choose y
//      then win
//      points = 8, 2 for y, 6 for win
// elseif I choose z
//      then lose
//      points = 3, 3 for scissors, 0 for lose

//if opponent chooses b
//  and I choose x
//      then lose
//      points = 1, 1 for x, 0 for lose
//  elseif I choose y
//      then draw
//      points = 5, 2 for y, 3 for draw
// elseif I choose z
//      then win
//      points = 9, 3 for scissors, 6 for win

//if opponent chooses c
//  and I choose x
//      then win
//      points = 7, 1 for x, 6 for win
//  elseif I choose y
//      then lose
//      points = 2, 2 for y, 0 for lose
// elseif I choose z
//      then draw
//      points = 6, 3 for scissors, 3 for draw

//sum(win+draw+lose) = dayTwoAnswer

//A Y
//B X
//C Z
//A Y\r\nB X\r\nC Z

// rock(a,x) = 1, paper(b,y) = 2, scissors(c,z) = 3, lose = 0, draw = 3, win = 6
//a,b,c for opponent, x,y,z for you

//let matches = [
//    [A, Y],
//    [B, X],
//    [C, Z]
//]

//# matches
//    # your_move, opponent's move
//    # your_move, opponent's move
//    # your_move, opponent's move