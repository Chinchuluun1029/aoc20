const answers = document.getElementsByTagName("pre")[0].textContent.split("\n\n");
let count = 0;
for (answer of answers) {
    answer = answer.replace(/(\r\n|\n|\r)/gm,""); //remove whitespaces, newlines
    let set = new Set();
    for (letter of answer) {
        set.add(letter);
    }
    count += set.size;
}
console.log(count);