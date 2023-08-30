function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let firstNum = "";
let secondNum = "";
let operator = "";

let displayValue = "";

const scr = document.querySelector(".screen");
scr.textContent = displayValue;

const numbers = document.querySelectorAll(".number");
numbers.forEach((button) => 
    button.addEventListener("click", function() {
        displayValue += button.textContent;
        scr.textContent = displayValue;
    }));

const operators = document.querySelectorAll(".operator");
operators.forEach((button) =>
    button.addEventListener("click", function() {
        scr.textContent = button.textContent;
    }))

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
    displayValue = "";
    scr.textContent = displayValue;
})

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}


