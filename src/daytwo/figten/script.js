"use strict";
const titleBox = document.querySelector('#titleBox');
const dateBox = document.querySelector('#dateBox');
const writerBox = document.querySelector('#writerBox');
const showDiv = (e) => {
    const getId = e.getAttribute('id');
    if (getId === 'title') {
        titleBox === null || titleBox === void 0 ? void 0 : titleBox.setAttribute('style', 'display:block;');
        dateBox === null || dateBox === void 0 ? void 0 : dateBox.setAttribute('style', 'display:none;');
        writerBox === null || writerBox === void 0 ? void 0 : writerBox.setAttribute('style', 'display:none;');
    }
    if (getId === 'date') {
        titleBox === null || titleBox === void 0 ? void 0 : titleBox.setAttribute('style', 'display:none;');
        dateBox === null || dateBox === void 0 ? void 0 : dateBox.setAttribute('style', 'display:block;');
        writerBox === null || writerBox === void 0 ? void 0 : writerBox.setAttribute('style', 'display:none;');
    }
    if (getId === 'writer') {
        titleBox === null || titleBox === void 0 ? void 0 : titleBox.setAttribute('style', 'display:none;');
        dateBox === null || dateBox === void 0 ? void 0 : dateBox.setAttribute('style', 'display:none;');
        writerBox === null || writerBox === void 0 ? void 0 : writerBox.setAttribute('style', 'display:block;');
    }
};
