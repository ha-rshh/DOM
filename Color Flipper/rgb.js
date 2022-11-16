const currentColor = document.querySelector('#current-color');
const body = document.querySelector('body');
const btnrgb = document.querySelector("#click1");

btnrgb.addEventListener("click", ()=>{
    function getRandNum(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    debugger;
    let r = getRandNum(0, 256);
    let g = getRandNum(0, 256);
    const b = getRandNum(0, 256);
    body.style.backgroundColor = "rgb" + "(" + r + "," + g + "," + b + ")";
    currentColor.textContent = "rgb" + "(" + r + "," + g + "," + b + ")";
})
