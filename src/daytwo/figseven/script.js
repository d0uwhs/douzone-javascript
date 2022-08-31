"use strict";
const stringLa1 = document.querySelector('#stringla1');
const stringLa2 = document.querySelector('#stringla2');
const printAnswer = document.querySelector('#print');
const stringArray = [];
const reverseTest = () => {
    const laArray1 = stringLa1.innerHTML.split(' ');
    const laArray2 = stringLa2.innerHTML.split(' ');
    for (const string of laArray1) {
        stringArray.push(string);
    }
    for (const string of laArray2) {
        stringArray.push(string);
    }
    let eArray = stringArray.filter((item) => item === 'e');
    let jArray = stringArray.filter((item) => item === 'j');
    let lArray = stringArray.filter((item) => item === 'l');
    let oArray = stringArray.filter((item) => item === 'o');
    let vArray = stringArray.filter((item) => item === 'v');
    const concatEjlove = eArray[0] + jArray[0] + lArray[0] + oArray[0] + vArray[0] + eArray[1];
    printAnswer.innerHTML = concatEjlove;
};
