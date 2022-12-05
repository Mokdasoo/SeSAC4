// function 함수이름 ( 변수명:타입 ) : 반환타입 {}
function sum1(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
function sum3(a, b) {
    return a + b;
}
console.log(sum3(1));
const func1 = (a) => {
    console.log('func1');
};
let person = { name: '코딩온', age: 10 };
const getInfo = (obj) => {
};
getInfo(person);
let person2 = { name: '코딩온', age: 10 };
function getInfo2(obj) {
}
person2.age = person2.age + 1;
;
let loginUser = (id, pw) => {
    return true;
};
class MyBook {
    constructor() {
        this.title = 'book';
        this.data = '2022-12-05';
    }
    getInfo() {
        console.log('info');
    }
    changeTitle(newTitle) {
    }
}
