const pps = document.getElementsByTagName("pre")[0].textContent.split("\n\n");
const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let count = 0;
for (i of pps) fields.every(field => i.includes(field)) ? count++ : null;
console.log("Count:", count);