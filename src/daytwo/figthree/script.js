"use strict";
const tagValue = document.querySelector('input');
const idValue = document.querySelector('#pname');
const nameValue = document.getElementsByName('price')[0];
const printValue = () => {
    const target = document.querySelector('#area');
    const buyerTag = document.createElement('div');
    buyerTag.innerHTML = `구매자 : ${idValue.value}`;
    const productTag = document.createElement('div');
    productTag.innerHTML = `상품명 : ${nameValue.value}`;
    const priceTag = document.createElement('div');
    priceTag.innerHTML = `가격 : ${tagValue.value}`;
    target === null || target === void 0 ? void 0 : target.appendChild(buyerTag);
    target === null || target === void 0 ? void 0 : target.appendChild(productTag);
    target === null || target === void 0 ? void 0 : target.appendChild(priceTag);
};
