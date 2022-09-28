
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}

class Square extends Shape {

}
class Triangle extends Shape {
  constructor(x,y,name){
    super(x,y);
    this.name = name;
  }
  getArea(){
    return this.w * this.h/2;
  }
}

class Student {
  constructor(name, school, age, studentNumber){
    this.name = name;
    this.school = school;
    this.age = age;
    this.studentNumber = studentNumber;
  }
  getInfo(){
    console.log(`${this.name}는 ${this.school}학교에 다니고 ${this.age}살이고 ${this.studentNumber}학번이다.`);
  }
}

class Kim extends Student{
  constructor(name, school, age, studentNumber, specialKim){
    super(name, school, age, studentNumber);
    this.specialKim = specialKim;
  }
  getKim(){
    console.log(this.specialKim);
  }
}

class Lee extends Student{
  constructor(name, school, age, studentNumber, specialLee){
    super(name, school, age, studentNumber);
    this.specialLee = specialLee;
  }
  getLee(){
    console.log(this.specialLee);
  }
}

let student1 = new Kim('김아무개', '새싹', 25, 19, 'kim power');
student1.getInfo();
student1.getKim();

let shape1 = new Shape(5, 4);
console.log( shape1.getArea() );  //20

let shape2 = new Shape(2, 3);
console.log( shape2.getArea() );  //6

let shape3 = new Square(4, 8);
console.log( shape3.getArea() );