class Cat{
    constructor(readonly name:string){}
    sayHello():string {
        return "야옹";
    }
}
class Fish{
    constructor(readonly name:string){}
    dive(num: number):string{
        return `${num}m 다이빙 했습니다.`
    }
}

type Pet = Cat | Fish;

const talkPet = (pet: Pet):string => {
    if(pet instanceof Cat){
        console.log(pet.sayHello());
    }else if(pet instanceof Fish){
        console.log('물고기는 말을 하지 못합니다.');
    }
    return 'func exit';
}
const cat:Pet = new Cat('나비');
const fish:Pet = new Fish('광어');

talkPet(cat);
talkPet(fish);