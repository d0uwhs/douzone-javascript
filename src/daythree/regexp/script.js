"use strict";
let idNum = document.querySelector('idnumber');
let checkBtn = document.querySelector('#checkBtn');
const regExp = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
checkBtn.addEventListener('click', () => {
    if (regExp.test(idNum.value)) {
        alert("통과");
    }
    else {
        alert("통과못함");
    }
});
