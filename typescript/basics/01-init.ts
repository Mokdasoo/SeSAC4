var a: number = 1;
console.log(a);



// 변수
// 키워드 변수 이름: 타입 = 값;
const str1:string = '문자열';
const num1:number = 1;
const flag1:boolean = true;
let any1:any;
any1 = 1;
any1 = '문자';
any1 = false;
any1 = [];

const Arr1: number[] = [1, 2, 3, 4, 5];
const Arr2: string[] = ['a', 'b', 'c'];

// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정
const Arr3: [string, number] = ['a', 2];
const Arr4:object = [1, 'a'];

enum Values {값1, 값2};
let val1:Values;
val1 = Values.값1;
val1 = Values.값2;

let v2: string | number;


// 함수
/*
function 함수이름(매개변수: 타입):반환값타입{
    return 반환값;
}
*/

function Sum1(a:number, b:number): number {
    return a + b;
};

function Sum2(a:number, b?:number): number {
    return a + b;
};
console.log(Sum1(1, 6));

const func3 = (a: string) : void => {
    console.log("func3");
};
function func4(){
    console.log("func4");
};

// 인터페이스
interface Student {
    name: string;
    age: number;
    nickname?: string;
};
let stu1:Student = {
    name: 'dddd',
    age: 12
};
let stu2: Student = {
    name: 'cccc',
    age: 14,
    nickname: 'study2'
}

interface Shape {
    width: number;
    getLength(): number;
}
// 클래스

class Square implements Shape {
    width: number;
    height: number;
    getLength():number {
        return 0;
    }
}

/*
class 클래스이름 {
    변수명1: 타입;
    constructor(변수명:타입, 변수명:타입){
        this.변수명1 = 변수명;
    }
}
*/

interface Developer {
    name: string;
    getName(): string;
}
class developer1 implements Developer{
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}

let dev1 = new developer1('새싹');
// dev1.name = 'SeSAC';
console.log( dev1.getName());
class developer2 implements Developer{
    constructor(readonly name: string){}
    getName(): string {
        return this.name;
    }
}
let dev2 = new developer2('코딩온');
console.log( dev2.getName() );

// 제네릭 ( Generics )
// 재사용성을 높이기 위해서
// Array<number> = number[]
// Array<>
// const [age, setAge] = useState<number>(0)

function getText<S>(text:S) : S {
    return text;
}
getText<number>(1);
getText<string>('a');
getText(1);

let abc = 1;

// 타입 검사
// primitive type => typeof
// 
console.log( typeof(abc));
console.log( typeof(dev2));
if( dev2 instanceof developer2){

}

