const pwds = document.getElementsByTagName("pre")[0].textContent.split("\n");
let cnt = 0;
for (i of pwds) {
    const occur = ((i.substring(i.indexOf(":")+2)).split(i.substring(i.indexOf(":")-1, i.indexOf(":"))).length - 1);
    if (occur <= i.substring(i.indexOf("-")+1, i.indexOf(" ")) && occur >= i.substring(0, i.indexOf("-"))) ++cnt;
}
console.log(cnt);