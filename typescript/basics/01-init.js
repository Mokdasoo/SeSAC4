var a = 1;
console.log(a);
// 변수
// 키워드 변수 이름: 타입 = 값;
const str1 = '문자열';
const num1 = 1;
const flag1 = true;
let any1;
any1 = 1;
any1 = '문자';
any1 = false;
any1 = [];
const Arr1 = [1, 2, 3, 4, 5];
const Arr2 = ['a', 'b', 'c'];
// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정
const Arr3 = ['a', 2];
const Arr4 = [1, 'a'];
var Values;
(function (Values) {
    Values[Values["\uAC121"] = 0] = "\uAC121";
    Values[Values["\uAC122"] = 1] = "\uAC122";
})(Values || (Values = {}));
;
let val1;
val1 = Values.값1;
val1 = Values.값2;
let v2;
// 함수
/*
function 함수이름(매개변수: 타입):반환값타입{
    return 반환값;
}
*/
function Sum1(a, b) {
    return a + b;
}
;
function Sum2(a, b) {
    return a + b;
}
;
console.log(Sum1(1, 6));
const func3 = (a) => {
    console.log("func3");
};
function func4() {
    console.log("func4");
}
;
;
let stu1 = {
    name: 'dddd',
    age: 12
};
let stu2 = {
    name: 'cccc',
    age: 14,
    nickname: 'study2'
};
// 클래스
class Square {
    getLength() {
        return 0;
    }
}
class developer1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let dev1 = new developer1('새싹');
// dev1.name = 'SeSAC';
console.log(dev1.getName());
class developer2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let dev2 = new developer2('코딩온');
console.log(dev2.getName());
