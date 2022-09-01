"use strict";
const getWeekDay = (year, month, date) => {
    const fullDate = new Date(year, month, date);
    const day = fullDate.getDay();
    if (day === 0) {
        return '일';
    }
    if (day === 1) {
        return '월';
    }
    if (day === 2) {
        return '화';
    }
    if (day === 3) {
        return '수';
    }
    if (day === 4) {
        return '목';
    }
    if (day === 5) {
        return '금';
    }
    if (day === 6) {
        return '토';
    }
};
console.log(getWeekDay(2022, 1, 10));
const getSecondToday = () => {
    const nowTime = new Date(Date.now());
    return nowTime.getSeconds() + (nowTime.getHours() * 3600);
};
console.log(`오늘 하루중, ${getSecondToday()}초나 흘렀습니다. 시간을 소중히 쓰셔야죠?`);
const getSecondsToTomorrow = () => {
    const nowTime = new Date(Date.now());
    return (60 * 60 * 24) - (nowTime.getSeconds() + (nowTime.getHours() * 3600));
};
console.log(`오늘 하루중, ${getSecondsToTomorrow()}초 밖에 남지 않았습니다. 다시는 오지 않는 오늘입니다.`);
const words = [
    '15',
    'AFC',
    'AAFC',
    'AAAFFCC',
    'AAFCC',
    'BAFC',
    'QWEDFGHJMNB',
    'DFAFCB',
    'ABCDEFC',
    'DADC'
];
const regExpForDNA = /^[A-F]?A+F+C+[A-F]?$/;
for (let word of words) {
    if (regExpForDNA.test(word)) {
        console.log("Infected");
    }
    if (!regExpForDNA.test(word)) {
        console.log("Good");
    }
}
const stringArrays = ['1080px', '$100', '+200', '60kg', '6m', '-15'];
const removeStr = /^[$+]|px$|kg$|m$/;
let returnDirect = stringArrays.map((item) => item.replace(removeStr, ""));
console.log(returnDirect);
const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '유재석'];
const palindrom = (item) => {
    if (item.split('').reverse().join('') === item) {
        return true;
    }
    return false;
};
list.forEach((item) => {
    console.log(palindrom(item));
});
