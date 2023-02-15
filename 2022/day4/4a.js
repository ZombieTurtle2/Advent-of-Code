//Imports the fs module
const fs = require("fs")

function genRange(start, end) {
    let range = [];
    for (let i = parseInt(start); i <= end; i++) {
        range.push(i);
    }
    return range
}

let lines = fs
    //Open the file
    .readFileSync("input.txt")
    //Convert to string
    .toString()
    //Split it on new lines (\r\n)
    .split('\r\n');


let total = 0

for (let line of lines) {
    let left = line.split(',')[0]
    left = left.split('-')
    let right = line.split(',')[1]
    right = right.split('-')

    left = genRange(left[0], left[1])
    right = genRange(right[0], right[1])
    // console.log(left)
    // console.log(right)
    // console.log("")

    for (let num of left) {
        console.log(`Right: ${right}`)
        if (right.includes(num) == false) {
            console.log(`Does not include: ${num}`)
            continue
        } else {
            
        }
    }
};

//Else if it does contain all numbers of left (true), +1
//total = true + 1? 