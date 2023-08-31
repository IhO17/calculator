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
scr.textContent = 0;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numbers.forEach((button) => 
    button.addEventListener("click", function() {
        if (displayValue.length < 14) {
            displayValue += button.textContent;
        }
        scr.textContent = displayValue;
    }));

operators.forEach((button) =>
    button.addEventListener("click", function() {
        
        if operator
        
        if (firstNum === "") {
            firstNum = parseInt(displayValue);
            //console.log("First num: " + firstNum);
            operator = button.textContent;
            //console.log("Operator: " + operator);

        } else if (operator === "/" && displayValue === "0") {
            scr.textContent = "lul";

        } else {            
            secondNum = parseInt(displayValue);
            //console.log("First num: " + firstNum);
            //console.log("Second num: " + secondNum);
            //console.log("Operator: " + operator);
            let result = operate(operator, firstNum, secondNum);
            operator = button.textContent;
            //console.log("Operator: " + operator);
            scr.textContent = result;
            firstNum = result;      
            secondNum = "";
     
        }
        
        displayValue = "";

    }))

function reset() {
    firstNum = "";
    secondNum = "";
    operator = "";
    displayValue = "";
    scr.textContent = 0;
}

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


