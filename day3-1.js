const land = document.getElementsByTagName("pre")[0].textContent.split("\n");

for (let i = 0; i < land; i++) {
    for (let j = 0; j < land[i]; j+=3) {
        console.log(`${i}, ${j}: ${land[i][j]}`);
    }
}