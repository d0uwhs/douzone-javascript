"use strict";
const stringla4 = document.querySelector('#stringla4');
const strArr = stringla4 === null || stringla4 === void 0 ? void 0 : stringla4.innerHTML.split(' ');
const removeInput = document.querySelector('#remove');
const addInput = document.querySelector('#add');
const printResult = document.querySelector('#print4');
const print2Test = () => {
    const resultArrs = strArr.filter(item => item !== removeInput.value);
    resultArrs.push(addInput.value);
    printResult ? printResult.innerHTML = resultArrs === null || resultArrs === void 0 ? void 0 : resultArrs.toString() : undefined;
};
