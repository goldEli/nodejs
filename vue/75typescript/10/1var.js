"use strict";
let a = 123;
// a = "111"
// number string
function add(num1, num2) {
    console.log(num1 + num2);
}
// add("1", "1")
add(1, 1);
function add1(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
// let b: string
let b;
b = add1(1, 1);
