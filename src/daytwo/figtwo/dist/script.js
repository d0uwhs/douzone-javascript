"use strict";
/**
 * querySelector로 불러온 값은 element 타입이지만 null이 될 수 있으므로, narrow 처리 해야한다.
 * https://velog.io/@boorook/TypeScript%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-HTML-%EC%A1%B0%EC%9E%91
 *
 * Narrowing
 * https://velog.io/@jujube0/Typescript-Narrowing
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 *
 */
// const figboxOne = document.querySelector('.figbox_one')
const selectColor = document.querySelector('#selectColor');
const handleOnClickForChangeColor = () => {
    console.log(selectColor.getAttribute('value'));
};
