"use strict";
const inputColor = document.querySelector('#selectColor');
const selectBox = document.querySelector('.area');
const colorChange = () => {
    selectBox.setAttribute('style', `background-color : ${inputColor.value}`);
};
const halfSize = () => {
    var _a;
    (_a = document.querySelector('#div2')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'width : 50px; height : 50px');
};
const defaultSize = () => {
    var _a;
    (_a = document.querySelector('#div2')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'width : 100px; height : 100px');
};
const doubleSize = () => {
    var _a;
    (_a = document.querySelector('#div2')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'width : 200px; height : 200px');
};
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
const ulList = document.querySelector('#list');
const deleteList = () => {
    while (ulList.hasChildNodes()) {
        ulList.removeChild(ulList.childNodes[ulList.childElementCount]);
    }
};
const createList = () => {
    const input = prompt("추가할 목록을 입력하세요.");
    const node = document.createElement('li');
    if (input !== null) {
        node.innerHTML = input;
        ulList.appendChild(node);
    }
};
const areaList = document.querySelector('#area');
const left = () => {
    areaList.appendChild(areaList.children[0]);
};
