"use strict";
const boxOne = document.querySelector('#box1');
const selectColor = document.querySelector('#selectColor');
const handleOnClickForChangeColor = () => {
    boxOne.setAttribute('style', `background-color : ${selectColor.value}`);
};
const divElement = document.querySelector('#box2');
const setHalfSize = () => {
    divElement.setAttribute('style', 'width : 50px; height : 50px');
};
const setDefaultSize = () => {
    divElement.setAttribute('style', 'width : 100px; height : 100px');
};
const setDoubleSize = () => {
    divElement.setAttribute('style', 'width : 200px; height : 200px');
};
