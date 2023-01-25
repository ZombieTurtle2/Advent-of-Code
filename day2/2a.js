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

const lose = 0;
const draw = 3;
const win = 6;

const x = 1;
const y = 2;
const z = 3;

// rock(a,x) = 1, paper(b,y) = 2, scissors(c,z) = 3, lose = 0, draw = 3, win = 6
//a,b,c for opponent, x,y,z for you

let totalScore = 0
for (let match of matches) {
    let opponentPick = match[0];
    let myPick = match[1];

    if (opponentPick == 'A') {
        if (myPick == 'X') {
            totalScore = totalScore + draw + x
        } else if (myPick == "Y") {
            totalScore = totalScore + win + y
        } else {
            totalScore = totalScore + lose + z
        }
    } else if (opponentPick == 'B') {
        if (myPick == 'X') {
            totalScore = totalScore + lose + x
        } else if (myPick == "Y") {
            totalScore = totalScore + draw + y
        } else {
            totalScore = totalScore + win + z
        }
    } else {
        if (myPick == 'X') {
            totalScore = totalScore + win + x
        } else if (myPick == "Y") {
            totalScore = totalScore + lose + y
        } else {
            totalScore = totalScore + draw + z
        }
    }
};
console.log(totalScore)

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

// rock(a,x) = 1, paper(b,y) = 2, scissors(c,z) = 3, lose = 0, draw = 3, win = 6
//a,b,c for opponent, x,y,z for you