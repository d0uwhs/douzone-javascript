"use strict";
const results = document.querySelector('#result1');
const strInput = document.querySelector('#strInput');
const itemArr = [];
strInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputItems();
    }
});
const inputItems = () => {
    if (!strInput.value) {
        return;
    }
    itemArr.push(strInput.value);
    strInput.value = '';
    console.log(itemArr);
};
const printTest = () => {
    for (const string of itemArr) {
        const elements = document.createElement('span');
        elements.innerHTML = string;
        results.appendChild(elements);
    }
};
