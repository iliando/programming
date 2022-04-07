
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
const roof = "санжар извращенец?"
prompt(roof)

