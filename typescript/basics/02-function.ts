// function 함수이름 ( 변수명:타입 ) : 반환타입 {}
function sum1(a,b){
    return a + b;
}
function sum2( a:number, b:number ):number {
    return a + b;
}
console.log( sum2(1,2) );

function sum3( a:number, b?:number ):number { // ?는 매개변수로 받을 값이 필수가 아닐 때
    return a + b;
}

console.log(sum3(1));

const func1 = (a:string) : void => {
    console.log('func1');
}

let person = { name: '코딩온', age: 10};
const getInfo = (obj: {name: string, age: number}) => {

}
getInfo(person);

interface PersonData {
    readonly name: string;
    age: number;
    nicknamme?: string;
}
let person2:PersonData = { name: '코딩온', age: 10};
function getInfo2(obj: PersonData){

}
person2.age = person2.age + 1;
// person2.name = 'dd';

interface login {
    (id: string, pw:string) : boolean
};
let loginUser:login = (id, pw) => {
    return true;
}

interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}

class MyBook implements Book {
    title = 'book';
    data = '2022-12-05';
    getInfo(){
        console.log('info');
    }
    changeTitle(newTitle: string): void {
        
    }
}



