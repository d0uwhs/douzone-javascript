"use strict";
class Student {
    constructor(name, age, addr) {
        this._name = name;
        this._age = age;
        this._addr = addr;
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
    get addr() {
        return this._addr;
    }
    set addr(value) {
        this._addr = value;
    }
}
const getNameForTd = document.querySelectorAll('td.name');
const getAgeForTd = document.querySelectorAll('td.age');
const getAddrForTd = document.querySelectorAll('td.addr');
const studentArr = [];
const studentBtn = () => {
    for (let i = 0; i < 3; i++) {
        let name = prompt(i + 1 + "번째 학생 이름 입력");
        let age = prompt(i + 1 + "번째 학생 나이 입력");
        let addr = prompt(i + 1 + "번째 학생 주소 입력");
        getNameForTd[i].innerHTML = name ? name : '';
        getAgeForTd[i].innerHTML = age ? age : '';
        getAddrForTd[i].innerHTML = addr ? addr : '';
        let student = new Student(name ? name : '', age ? age : '', addr ? addr : '');
        studentArr.push(student);
    }
    console.log(studentArr);
};
