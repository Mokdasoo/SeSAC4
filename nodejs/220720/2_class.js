class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    mew(){
        console.log(this.name+" 이/가 야옹합니다~");
    }
}

var cat1 = new Cat("설", 3);
var cat2 = new Cat("로로", 3);
console.log(cat1);
cat1.mew();
cat2.mew();



class Car {
    constructor(color){
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }
    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
    returnColor(){
        return this.color;
    }
}

module.exports = {Car};