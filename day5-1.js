const seats = document.getElementsByTagName("pre")[0].textContent.split("\n");
let curMax = 0;
let ids = [];
for (i of seats) {
    let row = 0, rowEnd = 127, col = 0, colEnd = 7;
    for (j of i.substring(0, 7)) (j === "F") ? rowEnd -= Math.ceil((rowEnd-row)/2) : row += Math.ceil((rowEnd-row)/2);
    for (j of i.substring(7)) (j === "R") ? col += Math.ceil((colEnd-col)/2) : colEnd -= Math.ceil((colEnd-col)/2);
    let cur = 8 * row + col;
    ids.push(cur);
    if (cur > curMax) curMax = cur;
}
ids.sort();
console.log("Result:", curMax);