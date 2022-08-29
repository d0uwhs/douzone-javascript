"use strict";
const boxOne = document.querySelector('#box1');
const selectColor = document.querySelector('#selectColor');
const handleOnClickForChangeColor = () => {
    boxOne.setAttribute('style', `background-color : ${selectColor.value}`);
};
const boxTwo = document.querySelector('#box2');
const setHalfSize = () => {
    boxTwo.setAttribute('style', 'width : 50px; height : 50px');
};
const setDefaultSize = () => {
    boxTwo.setAttribute('style', 'width : 100px; height : 100px');
};
const setDoubleSize = () => {
    boxTwo.setAttribute('style', 'width : 200px; height : 200px');
};
