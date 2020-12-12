const splitNums = document.getElementsByTagName("pre")[0].textContent.split("\n");
let hash = new Map();

for (let i in splitNums) {
  const comp = 2020 - parseInt(splitNums[i]);
  if (hash.has(parseInt(splitNums[i]))) {
    console.log("Result:", comp*(2020-comp));
  }
  hash.set(comp, splitNums[i]);
}