const priorities = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//Imports the fs module
const fs = require("fs")

let lines = fs
    //Open the file
    .readFileSync("input.txt")
    //Convert to string
    .toString()
    //Split it on new lines (\r\n)
    .split('\r\n');
let total = 0

for (let line of lines) {
    let length = line.length;
    let left = line.slice(0, length / 2)
    let right = line.slice(length/2)

    for (let char of left) {
        if (right.includes(char)) {
            console.log(char)
            total = total + priorities.indexOf(char)
            console.log(total)
            break
        }
    }
    console.log("")
}

// remove left/right slice. probably need to change left/right slice to slice on every third line
// group input.txt into groupings of 3
// find the common character between each grouping of 3 (keep but modify lines 20 and 21)
// sum priorities
