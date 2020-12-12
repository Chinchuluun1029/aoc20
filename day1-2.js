const splitNums = document.getElementsByTagName("pre")[0].textContent.split("\n");

for (let i = 0; i < splitNums.length-2; i++) {
    const numSet = new Set();
    const curSum = 2020 - parseInt(splitNums[i]);
    for (let j = i+1; j < splitNums.length; j++) {
        if (numSet.has(parseInt(splitNums[j]))) {
            console.log("res:", parseInt(splitNums[i]), splitNums[j]);
        }
        numSet.add(curSum-parseInt(splitNums[j]));
    }
}