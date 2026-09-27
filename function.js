let firstNumber = "";
let operation = "";


function displayNumber(digit) {

    let result = document.getElementById("result");

    if (result.value === "0") {
        result.value = digit;
    } else {
        result.value += digit;
    }
}


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


function setOperation(op) {

    firstNumber = document.getElementById("result").value;

    operation = op;

    document.getElementById("result").value = "";
}


function calculate() {

    let a = Number(firstNumber);
    let b = Number(document.getElementById("result").value);

    let res;

    switch (operation) {

        case "+":
            res = add(a, b);
            break;

        case "-":
            res = subtract(a, b);
            break;

        case "*":
            res = multiply(a, b);
            break;

        case "/":
            if (b === 0) {
                res = "Cannot divide by zero";
            } else {
                res = divide(a, b);
            }
            break;

        default:
            res = "Invalid operation";
    }

    document.getElementById("result").value = res;
}

function clearResult() {
    firstNumber = "";
    operation = "";
    document.getElementById("result").value = "0";
}