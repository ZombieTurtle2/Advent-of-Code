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

let i = 0;
while(i < lines.length) {
    const elfGroup = lines.slice(i, i + 3);

    for (let char of elfGroup[0]) { 
        if (elfGroup[1].includes(char) && elfGroup[2].includes(char)) {
            total = total + priorities.indexOf(char)
            break
        }
    }
    i = i + 3;
}
console.log(total)
// [x] remove left/right slice. probably need to change left/right slice to slice on every third line
// [x] group input.txt into groupings of 3
// [] find the common character between each grouping of 3 (keep but modify lines 20 and 21)
// [] sum priorities