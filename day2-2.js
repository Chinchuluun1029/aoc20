const pwds = document.getElementsByTagName("pre")[0].textContent.split("\n");
let count = 0;

for (i of pwds) {
    const first = i.substring(0, i.indexOf("-"));
    const second = i.substring(i.indexOf("-")+1, i.indexOf(" "));
    const letter = i.substring(i.indexOf(":")-1, i.indexOf(":"));
    const pwd = i.substring(i.indexOf(":")+2);
    if (pwd[first-1] === letter ^ pwd[second-1] === letter ) count++;
}
console.log(count);