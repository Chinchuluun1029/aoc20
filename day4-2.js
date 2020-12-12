const pps = document.getElementsByTagName("pre")[0].textContent.split("\n\n");
const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let count = 0;
for (i of pps)
    if (fields.every(field => i.includes(field)))
        console.log("Matching:", i.match(new RegExp("(?:byr:)" + "(.*)" + "\\s", "g")));
console.log("Count:", count);