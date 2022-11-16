let currentColor = document.querySelector('#current-color');
let body = document.querySelector('body');
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector("#click");

function colorChange() {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        const color = Math.trunc(Math.random() * hex.length - 1);
        hexCode += hex[color];
    }
    body.style.backgroundColor = hexCode;
    currentColor.innerText = hexCode;
}
btn.addEventListener('click', colorChange);
