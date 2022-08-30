"use strict";
const hours = document.querySelector('span.hour');
const minutes = document.querySelector('span.min');
const seconds = document.querySelector('span.sec');
const timer = () => {
    let nowTime = new Date(Date.now());
    let nowHours = nowTime.getHours().toString();
    let nowMinutes = nowTime.getMinutes().toString();
    let nowSeconds = nowTime.getSeconds().toString();
    hours.innerHTML = appendZero(nowHours);
    minutes.innerHTML = appendZero(nowMinutes);
    seconds.innerHTML = appendZero(nowSeconds);
};
let timerId;
const startTimer = () => {
    timerId = setInterval(timer, 500);
};
const appendZero = (times) => {
    if (times.length === 1) {
        return '0' + times;
    }
    if (times.length !== 1) {
        return times;
    }
};
const figTwoResult = document.querySelector('#figtwo_result');
const figTwo = () => {
    const arr = [];
    let result = 0;
    while (true) {
        let input = prompt('숫자를 입력하세요.');
        if (Number(input)) {
            arr.push(Number(input));
        }
        else {
            for (const number of arr) {
                result += number;
            }
            console.log(result);
            break;
        }
    }
    figTwoResult ? figTwoResult.innerHTML = result.toString() : undefined;
};
const threeArr = [];
const input = () => {
    while (true) {
        let input = prompt('숫자를 입력하세요.');
        if (Number(input)) {
            threeArr.push(Number(input));
        }
        else {
            break;
        }
    }
};
const printAll = () => {
    if (!threeArr.length) {
        alert("값이 먼저 입력되어야 합니다.");
    }
    if (threeArr.length) {
        alert(threeArr);
    }
};
const reset = () => {
    threeArr.splice(0);
    alert("값이 모두 삭제되었습니다.");
};
