const splitNums = document.getElementsByTagName("pre")[0].textContent.split("\n");
let hash = new Map();
for (let i in splitNums) {
  let comp = 2020 - parseInt(splitNums[i]);
    if (hash.has(parseInt(splitNums[i]))) {
        console.log("Res:", comp*(2020-comp));
    }
    hash.set(comp, splitNums[i]);
}