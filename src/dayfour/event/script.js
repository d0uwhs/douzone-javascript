"use strict";
const area1 = document.querySelector('#area1');
const addDivBox = () => {
    var _a;
    const divElement = document.createElement('div');
    const display = 'display: inline-block;';
    const boxSize = 'width:100px; height:100px;';
    const yelloBackground = 'background-color: #FFFF00;';
    const redBackground = 'background-color: #FF0000;';
    divElement.setAttribute('style', boxSize + display + redBackground);
    const findByCurrentBoxWithStyle = (_a = area1 === null || area1 === void 0 ? void 0 : area1.lastElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute('style');
    if (findByCurrentBoxWithStyle === null || findByCurrentBoxWithStyle === void 0 ? void 0 : findByCurrentBoxWithStyle.includes('#FF0000')) {
        divElement.setAttribute('style', boxSize + display + yelloBackground);
    }
    if (findByCurrentBoxWithStyle === null || findByCurrentBoxWithStyle === void 0 ? void 0 : findByCurrentBoxWithStyle.includes('#FFFF00')) {
        divElement.setAttribute('style', boxSize + display + redBackground);
    }
    area1 === null || area1 === void 0 ? void 0 : area1.appendChild(divElement);
};
const removeDivBox = () => {
    if ((area1 === null || area1 === void 0 ? void 0 : area1.hasChildNodes()) && (area1 === null || area1 === void 0 ? void 0 : area1.lastElementChild)) {
        area1.removeChild(area1.lastElementChild);
    }
};
const addBtn = document.querySelector('#add');
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', () => addDivBox());
const removeBtn = document.querySelector('#remove');
removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.addEventListener('click', () => removeDivBox());
const depositAmount = document.querySelector('input[name=money]');
const depositDate = document.querySelector('select[name=months]');
const interestRates = document.querySelector('input[name=interest]');
const originAmount = document.querySelector('span#money-before');
const matureAmount = document.querySelector('span#money-after');
const calculateInterest = () => {
    const result = parseInt(depositAmount.value) + ((parseInt(depositAmount.value) * (parseInt(interestRates.value) / 100)) * parseInt(depositDate.value));
    matureAmount.innerHTML = result.toString();
};
depositAmount === null || depositAmount === void 0 ? void 0 : depositAmount.addEventListener('change', () => {
    calculateInterest();
});
depositDate === null || depositDate === void 0 ? void 0 : depositDate.addEventListener('change', () => {
    calculateInterest();
});
interestRates === null || interestRates === void 0 ? void 0 : interestRates.addEventListener('change', () => {
    calculateInterest();
});
const viewBox = document.querySelector('#view');
const textArea = document.createElement('textarea');
textArea.classList.add('edit');
viewBox === null || viewBox === void 0 ? void 0 : viewBox.addEventListener('click', () => {
    viewBox === null || viewBox === void 0 ? void 0 : viewBox.replaceWith(textArea);
});
textArea.addEventListener('blur', () => {
    if (viewBox === null || viewBox === void 0 ? void 0 : viewBox.innerHTML) {
        viewBox.innerHTML = textArea.value;
    }
    textArea.replaceWith(viewBox);
});
