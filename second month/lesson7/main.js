// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(40,1.50,'violet');
// const bobik = new Dog(3,30,'yellow');
//
// console.log(rex,);
// console.log(bobik);

//1. Абстрактный класс

// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//     voice() {
//         console.log(this.voiceText)
//     }
// }

// class Dog extends Animal {
//     constructor(type, gender, color, voiceText, name, puprposeText) {
//         super(type, gender, color, voiceText);
//         this.name = name;
//         this.purposeText = puprposeText;
//     }
//     purpose(){
//         console.log(`Dog: ${this.name}\nPurpose; ${this.purposeText}`)
//     }
// }
//
// const rex = new Dog(
//     'хищник',
//     'male',
//     'pink',
//     'gaf gaf!',
//     'tuzik',
//     'security'
// )
// rex.purpose();
//
// const bublik = new Dog(
//     'domestic',
//     'domestic',
//     'red',
//     'tyaf tyaf!',
//     'bublik',
//     'face control'
// )
//
// bublik.purpose();

class Home {
    constructor(roof, walls, floor, window, door) {
        this.roof = roof;
        this.walls = walls;
        this.floor = floor;
        this.window = window;
        this.door = door;
    }
    rof() {
        console.log(this.roof)
    }
}
class Rooms extends Home {
    constructor(roof, walls, floor, window, door, flowers, chairs) {
        super(roof, walls, floor, window, door);
        this.flowers = flowers;
        this.chairs = chairs;

    }
}
const walls = new Rooms(
    4,
    10,
    6,
    3,
    6,
    13,
    22

)
console.log(walls)
