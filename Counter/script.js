
const decrease = document.getElementById('decrease')
const number = document.getElementById('count');
console.log(number);
let counter = 0;
number.innerText = counter;

const btnDec = function() {
    counter--;
    number.innerText = counter;
    color();
}
const btnRes = function(){
    counter = 0;
    number.innerText = counter;
}
const btnInc = function (){
    counter++;
    number.innerText = counter;
    color();
}
const color = function (){
    if(counter == 0){
        number.style.color = 'black';
    } else if (counter > 0) {
      number.style.color = 'green';
    } else if (counter < 0) {
      number.style.color = 'red';
    }
    }
decrease.addEventListener('click', btnDec)
reset.addEventListener('click', btnRes)
increase.addEventListener('click', btnInc)




