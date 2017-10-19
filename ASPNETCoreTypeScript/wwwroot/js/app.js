function Welcome(person) {
    return "Hello" + person;
}
function ClickButton() {
    var user = "this ok";
    document.getElementById("divMgs").innerHTML = Welcome(user);
}
var decimal = 6;
var hex = 22;
var binary = 10;
var color = 'red';
color = "sxz";
var fullmane = "Ma Ra";
var age = 2;
var sentence = "My name is Babu " + fullmane + "'. \n            i'll bsdds " + (age + 1);
var list = [1, 2, 3];
var list1 = ["sds", "sdsd", "sdsd"];
var x;
x = ["dsds", 2];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var y;
y = "zxzxzx";
y = false;
y.ifItExists(); // okay, ifItExists might exist at runtime
y.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var listany = [1, true, "sdsd"];
var u = undefined;
var n = null;
var someValue = "this is a string";
var strLength = someValue.length;
//# sourceMappingURL=app.js.map