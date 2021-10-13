const display = document.getElementById('display-text');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
let operandA = null;
let operandB = null;
let operator = null;
let result = 0;

function add(x, y) {
    result = x + y;
}

function subtract(x, y) {
    result = x - y;
}

function multiply(x, y) {
    result = x * y;
}

function divide(x, y) {
    result = x / y;
}

function operate(operator, x, y) {
    if (operator === 'add') {
        add(x, y);
    } else if (operator === 'subtract') {
        subtract(x, y);
    } else if (operator === 'multiply') {
        multiply(x, y);
    } else if (operator === 'divide') {
        divide(x, y)
    }
    return result
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        addText(button.innerText);
    })
})

function addText(value) {
    if (display.textContent.length < 10) {
    display.textContent += value;
    }
}

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operandA = parseFloat(display.textContent);
        display.textContent = null;
        if (button.id === 'add') {
            operator = 'add';
        } else if (button.id === 'subtract') {
            operator = 'subtract';
        } else if (button.id === 'multiply') {
            operator = 'multiply';
        } else if (button.id === 'divide') {
            operator = 'divide';
        }
    })
})

equalsButton.addEventListener('click', () => {
    operandB = parseFloat(display.textContent);
    operate(operator, operandA, operandB);
    display.textContent = result;
    operandA = result;
    operandB = null;
})

//add listener for decimal let it be disabled after click and reset after add or equals
//figure out how to disable equals
//add clear button