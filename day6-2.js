const answers = document.getElementsByTagName("pre")[0].textContent.split("\n\n");
let result = 0;

for (answer of answers) {
    let cnt = answer.split(/\r\n|\r|\n/).length;
    let hash = new Array(26).fill(0);
    for (i in answer)
        hash[answer.charCodeAt(i)-97] += 1;
    for (letter in hash)
        if (hash[letter] === cnt)
            result++;
}
console.log(result);
//somehow the last string bundle is not counted in result, causing a bug