//yeeted from reddit bc i didnt fully understand the question
const rows = $('pre').innerText.split('\n').filter(row => row.match(/[\#\.]/g))
let result = 1;

const sloper = (incX, incY) => {
    let count = 0, y = 0, x = 0;
    const lastRowIndex = rows[0].length - 1;
    while (y < rows.length - 1) {
        if ((lastRowIndex - x) < incX) {
            x = x - lastRowIndex - 1;
        }
        x += incX;
        y += incY;
        if (rows[y][x] === "#") count++;
    }
    result *= count;
}
sloper(3, 1);
console.log("Result:", result);