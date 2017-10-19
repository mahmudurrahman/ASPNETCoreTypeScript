function Welcome(person: string)
{
    return "Hello" + person;
}

function ClickButton()
{
    var user = "this ok"
    document.getElementById("divMgs").innerHTML = Welcome(user);
}

let decimal: number = 6;
let hex: number = 22;
let binary: number = 0b01010;
let color: string = 'red';
 color = "sxz";


 let fullmane: string = "Ma Ra";
 let age: number = 2;
 let sentence: string = `My name is Babu ${fullmane}'. 
            i'll bsdds ${age + 1}`;
 let list: number[] = [1, 2, 3];
 let list1: Array<string> = ["sds", "sdsd", "sdsd"];
 let x: [string, number];

 x = ["dsds", 2];
 enum Color { Red, Green, Blue }
 let c: Color = Color.Blue;


 let y: any;
 y = "zxzxzx";
 y = false;

 y.ifItExists(); // okay, ifItExists might exist at runtime
 y.toFixed(); // okay, toFixed exists (but the compiler doesn't check)


 let listany: any[] = [1, true, "sdsd"];
 let u: undefined = undefined;
 let n: null = null;

 let someValue: any = "this is a string";

 let strLength: number = (someValue as string).length;