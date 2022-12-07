class Cat {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "야옹";
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    dive(num) {
        return "~m 다이빙 했습니다.";
    }
}
const talkPet = (pet) => {
    if (pet instanceof Cat) {
        console.log(pet.sayHello());
    }
    else if (pet instanceof Fish) {
        console.log('물고기는 말을 하지 못합니다.');
    }
    return 'func exit';
};
const cat = new Cat('나비');
const fish = new Fish('광어');
talkPet(cat);
talkPet(fish);
