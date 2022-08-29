"use strict";
// 5. 표준 빌트인 객체
/**
 * 5.1
 * ---
 * 년, 월, 일을 전달하면 해댕 날짜의 요일 ('월','화','수','목','금','토','일')	문자열로 반환해주는 함수 getWeekDay를 만든다.
 *
 */
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
console.log(getWeekDay(2022, 1, 10)); // expected : 목
/**
 * 5.2
 * ---
 * 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 오늘 남은 시간을 초 단위로 알려주는
 * getSecondsToTomorrow 함수를 만든다.
 *
 */
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
/**
 * 5.3
 * ---
 * 상근이는 생명과학 연구소에서 염색체가 특정한 패턴인지를 확인하는 일을 하고 있다. 염색체는 알파벳 대문자 (A, B, C, ..., Z)로만 이루어진 문자열이다.
 * 상근이는 각 염색체가 다음과 같은 규칙을 만족하는지 검사해야 한다.
 *
 * 문자열은 {A, B, C, D, E, F} 중 0개 또는 1개로 시작해야 한다.
 * 그 다음에는 A가 하나 또는 그 이상 있어야 한다.
 * 그 다음에는 F가 하나 또는 그 이상 있어야 한다.
 * 그 다음에는 C가 하나 또는 그 이상 있어야 한다.
 * 그 다음에는 {A, B, C, D, E, F} 중 0개 또는 1개가 있으며, 더 이상의 문자는 없어야 한다.
 * 문자열이 주어졌을 때, 위의 규칙을 만족하는지 구하는 프로그램을 작성하시오.
 *
 */
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
/**
 * 5.4
 * ---
 * arr 배열에는 숫자 뒤에 단위 문자가 붙거나 숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다.
 * 해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 숫자로 형변환한 값들이 담긴 새로운 배열을 반환하는 removeChar 함수를 작성한다.
 *
 */
const arr = ['1080px', '$100', '+200', '60kg', '6m', '-15'];
const removeStr = /^[$+]|px$|kg$|m$/;
let returnDirect = arr.map((item) => item.replace(removeStr, ""));
console.log(returnDirect);
/**
 * 5.5
 * ---
 * 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.
 */
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
