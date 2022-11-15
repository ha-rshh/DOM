const number = document.getElementById('count');

let counter = 0;
number.innerText = counter;

// const btnDec = function() {
//     counter--;
//     number.innerText = counter;
//     color();
// }
// const btnRes = function(){
//     counter = 0;.
//     number.innerText = counter;
// }
// const btnInc = function (){
//     counter++;
//     number.innerText = counter;
//     color();
// }

function color() {
    if (counter == 0) {
        number.style.color = 'black';
    } else if (counter > 0) {
        number.style.color = 'green';
    } else if (counter < 0) {
        number.style.color = 'red';
    }
}

decrease.addEventListener('click', () => {
    counter--;
    number.innerText = counter;
    color()
});
reset.addEventListener('click', () => {
    counter = 0;
    number.innerText = counter;
});
increase.addEventListener('click', () => {
    counter++;
    number.innerText = counter;
    color();
});




