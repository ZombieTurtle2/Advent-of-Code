const fs = require("fs");

let lines = fs
    .readFileSync("input.txt")
    .toString()
    .split('\r\n');

let matches = [];
for (let entry of lines) {
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

const rock = 1;
const paper = 2;
const scissors = 3;

let totalScore = 0
for (let match of matches) {
    let opponentPick = match[0];
    let outcome = match[1];

    if (opponentPick == 'A') {
        if (outcome == 'X') {
            totalScore = totalScore + lose + scissors
        } else if (outcome == "Y") {
            totalScore = totalScore + draw + rock
        } else {
            totalScore = totalScore + win + paper
        }
    } else if (opponentPick == 'B') {
        if (outcome == 'X') {
            totalScore = totalScore + lose + rock
        } else if (outcome == "Y") {
            totalScore = totalScore + draw + paper
        } else {
            totalScore = totalScore + win + scissors
        }
    } else {
        if (outcome == 'X') {
            totalScore = totalScore + lose + paper
        } else if (outcome == "Y") {
            totalScore = totalScore + draw + scissors
        } else {
            totalScore = totalScore + win + rock
        }
    }
};
console.log(totalScore)

// rock(a) = 1, paper(b) = 2, scissors(c) = 3,
// X = need to lose (0), Y = need to draw (3), Z = need to win (6).
//a,b,c for opponent

//if opponent chooses rock(a)
//  and I need lose(x)
//      then scissors(3)
//      points = 3, 3 for scissors, 0 for lose
//  elseif I need draw(y)
//      then rock(1)
//      points = 4, 1 for rock, 3 for draw
//  I need win(z)
//      then paper(2)
//      points = 8, 2 for paper, 6 for win

//if opponent chooses paper(b)
//  and I need lose(x)
//      then rock(1)
//      points = 1, 1 for rock, 0 for lose
//  elseif I need draw(y)
//      then paper(2)
//      points = 5, 2 for paper, 3 for draw
//  I need win(z)
//      then scissors(3)
//      points = 9, 3 for scissors, 6 for win

//if opponent chooses scissors(c)
//  and I need lose(x)
//      then paper(2)
//      points = 2, 2 for paper, 0 for lose
//  elseif I need draw(y)
//      then scissors(3)
//      points = 6, 3 for scissors, 3 for draw
//  I need win(z)
//      then rock(1)
//      points = 7, 1 for rock, 6 for win

//sum(win+draw+lose) = dayTwoAnswer