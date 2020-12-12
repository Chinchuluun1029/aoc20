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
console.log(ids);
console.log("Highest ID:", curMax);



let lines = document.getElementsByTagName("pre")[0].textContent.split("\n");
function findSeatId(line) {
  const binary = line.replace(/[FL]/g, "0").replace(/[BR]/g, "1")
  const [m, row, col] = binary.match(/([01]{7})([01]{3})/);
  const rowNum = Number(`0b${row}`);
  const colNum = Number(`0b${col}`);
  return rowNum * 8 + colNum;
}

let found = {};

for (line of lines) {
  const seatId = findSeatId(line);
  found[seatId] = true;
}

for (seatId in found) {
  const seatNum = Number(seatId);
  if (!found[seatNum + 1] && found[seatNum + 2]) {
    console.log("Your seat:", seatNum + 1);
    break;
  }
}