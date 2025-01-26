let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function setOperator(op) {
    if (currentInput === '') return; // Prevent setting operator if no input
    if (previousInput !== '') {
        calculateResult(); // Calculate if there's an existing operator and operand
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}