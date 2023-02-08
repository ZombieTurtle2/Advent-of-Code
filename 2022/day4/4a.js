//Imports the fs module
const fs = require("fs")

let lines = fs
    //Open the file
    .readFileSync("input.txt")
    //Convert to string
    .toString()
    //Split it on new lines (\r\n)
    .split('\r\n');

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