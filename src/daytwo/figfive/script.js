"use strict";
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const resultSpan = document.querySelector('#calc');
const calculator = (value) => {
    switch (value) {
        case '+':
            resultSpan.innerHTML = (parseInt(num1.value) + parseInt(num2.value)).toString();
            break;
        case '-':
            resultSpan.innerHTML = (parseInt(num1.value) - parseInt(num2.value)).toString();
            break;
        case 'x':
            resultSpan.innerHTML = (parseInt(num1.value) * parseInt(num2.value)).toString();
            break;
        case '/':
            resultSpan.innerHTML = (parseInt(num1.value) / parseInt(num2.value)).toString();
            break;
        case '%':
            resultSpan.innerHTML = (parseInt(num1.value) % parseInt(num2.value)).toString();
            break;
    }
};
