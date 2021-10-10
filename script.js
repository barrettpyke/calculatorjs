function add(x, y) {
    x + y;
}

function subtract(x, y) {
    x - y;
}

function multiply(x, y) {
    x * y;
}

function divide(x, y) {
    x / y;
}

function operate(operator, x, y) {
    if (operator === '+') {
        add(x, y);
    } else if (operator === '-') {
        subtract(x, y);
    } else if (operator === '*') {
        multiply(x, y);
    } else if (operator === '/') {
        divide(x, y)
    }
}

const textContent = document.getElementById('text-content');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');

function addText() {
    
}