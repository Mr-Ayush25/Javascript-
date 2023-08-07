let score = "ayush"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let val = null
let convertedVal = Number(val)
// if null get converted into numbrs then it will give 0.
// console.log(convertedVal)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "ayush"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " ayush"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); String in beginning then it will persform opertaion on basis of string
// console.log(1 + 2 + "2"); and  Vice versa.

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

let var1 = 5, var2 = 5;

// 5 is displayed
// Then, var1 is increased to 6
console.log(var1++)

// var2 is increased to 6
// Then, var2 is displayed
console.log(++var2)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion