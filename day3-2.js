//yeeted from reddit bc i didnt understand the question
const rows = $('pre').innerText.split('\n').filter(row => row.match(/[\#\.]/g))

let result = 1;

const sloper = (incX, incY) => {
    var count = 0
    var y = 0
    var x = 0
    const lastRowIndex = rows[0].length - 1
    // Console will return number of trees
    while (y < rows.length - 1) {
        // As we approach end of string, make sure we return to 
        // beginning of next string at correct index
        if ((lastRowIndex - x) < incX) {
            x = x - lastRowIndex - 1
        }
        x += incX
        y += incY
        if (rows[y][x] === "#") {
            count = count + 1
        }
    }
    result *= count;
}
sloper(1, 1);
sloper(3, 1);
sloper(5, 1);
sloper(7, 1);
sloper(1, 2);
console.log("Result:", result);