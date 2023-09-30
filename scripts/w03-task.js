/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.getElementById("add1").value);
    let number2 = Number(document.getElementById("add2").value);
    let result = add(number1, number2);
    document.getElementById("sum").value = result;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let number1 = Number(document.getElementById("subtract1").value);
    let number2 = Number(document.getElementById("subtract2").value);
    let difference = subtract(number1, number2);
    document.getElementById("difference").value = difference;
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (a, b) => a*b;

function multiplyNumbers() {
    let number1 = Number(document.querySelector("#factor1").value);
    let number2 = Number(document.querySelector("#factor2").value);
    let product = multiply(number1, number2);
    document.getElementById("product").value = product;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (a, b) => a/b;

function divideNumbers() {
    let number1 = Number(document.querySelector("#dividend").value);
    let number2 = Number(document.querySelector("#divisor").value);
    let quotient = divide(number1,number2);
    document.querySelector("#quotient").value = quotient;
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let today = new Date();
let currentYear = today.getFullYear();
document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 != 0);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
let numbersArrayMultiplied = numbersArray.map(number => number *2);
document.querySelector("#multiplied").innerHTML = numbersArrayMultiplied;
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArrayMultiplied.reduce((sum,number) => sum + number);
