"use strict";
class Member {
    constructor(name, age, address) {
        this._name = name;
        this._age = age;
        this._address = address;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
}
const memberRepository = [];
const resultSet = document.querySelector('#print');
const insertMember = () => {
    let name;
    let age;
    let address;
    while (true) {
        name = prompt("이름을 입력하세요.");
        if (name === null || name === '') {
            alert("입력을 먼저 해주세요.");
            continue;
        }
        if (name !== null) {
            break;
        }
    }
    while (true) {
        age = prompt("나이를 입력하세요.");
        if (age === null || age === '') {
            alert("입력을 먼저 해주세요.");
            continue;
        }
        if (age !== null) {
            break;
        }
    }
    while (true) {
        address = prompt("주소를 입력하세요.");
        if (address === null || address === '') {
            alert("입력을 먼저 해주세요.");
            continue;
        }
        if (address !== null) {
            break;
        }
    }
    const member = new Member(name, age, address);
    console.log(member);
    memberRepository.push(member);
};
const printMember = () => {
    for (let member of memberRepository) {
        let memberNode = document.createElement('div');
        let memberName = document.createElement('div');
        let memberAge = document.createElement('div');
        let memberAddress = document.createElement('div');
        memberName.innerHTML = '이름 : ' + member.name;
        memberAge.innerHTML = '나이 : ' + member.age + '세';
        memberAddress.innerHTML = '주소 : ' + member.address;
        console.log(memberName);
        memberNode.appendChild(memberName);
        memberNode.appendChild(memberAge);
        memberNode.appendChild(memberAddress);
        console.log(memberNode);
        resultSet.appendChild(memberNode);
    }
};
