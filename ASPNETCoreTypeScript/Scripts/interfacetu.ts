interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 20, y: 32 };


let a: number[] = [1, 2, 3, 3, 3];
let ro: ReadonlyArray<number> = a;


interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;