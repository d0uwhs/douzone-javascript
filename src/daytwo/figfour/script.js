"use strict";
const inputTagLength = document.querySelector('#text1');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const la1 = document.querySelector('label[id="la1"]');
const stringLength = () => {
    result1.innerHTML = inputTagLength.value.length.toString();
};
const stringSplit = () => {
    const laArr = la1.innerHTML.split(',');
    for (const string of laArr) {
        let node = document.createElement('p');
        node.innerHTML = string;
        result2 === null || result2 === void 0 ? void 0 : result2.appendChild(node);
    }
};
