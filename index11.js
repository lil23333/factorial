let btn = document.querySelector('#btn');
let p = document.querySelector('p');
let input1 = document.querySelector('#input1');


btn.addEventListener('click',
function func () {
    let x = +input1.value
function factorial(x) {
    if (x === 0) {
        return 1;  
    } 
        return x*factorial(x-1);
    }
    p.textContent = p.textContent + factorial(x);
}
 

);
